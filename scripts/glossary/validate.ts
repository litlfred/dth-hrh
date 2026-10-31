#!/usr/bin/env bun
/**
 * Validate this folio's glossary schemes against the platform's
 * folio-glossary/v1 schema, and check that every L2 DTH link and structured
 * artefact resolves (dth-hrh#47):
 *
 * - every `related` IRI in this instance's namespace names a term (or scheme)
 *   that exists here;
 * - every SKOS match (`exactMatch`, `closeMatch`, `broadMatch`, `narrowMatch`)
 *   into a MOUNTED instance's namespace (such as dpi-h-ra, litlfred/smart-ra)
 *   names a term in that instance's glossary (dth-hrh#47);
 * - every `meta.glossaryTerms` IRI on a block resolves to a term in this
 *   instance's glossary or a mounted instance's glossary;
 * - every ArchiMate element or view a block names in `meta.archimate` exists
 *   in the mounted dpi-h-ra model (dth-hrh#47);
 * - every `persona` block links to at least one BPMN swimlane (`meta.bpmnLanes`),
 *   one `dpi-h-ra` ArchiMate role/actor/component (`meta.archimate.elements`),
 *   and one glossary term (`meta.glossaryTerms`), and each referenced BPMN lane
 *   binds `partitionElementRef` to the persona's label;
 * - every `business-process` block has a valid BPMN 2.0 companion
 *   (`dak-companion-present`, `dak-bpmn-has-process`), a rendered SVG in
 *   `folio/dth-hrh/media/`, and one lane per role bound to a declared persona;
 * - every `decision-table` block has a valid DMN companion
 *   (`dak-dmn-has-decision-table`), loads with zero warnings and zero
 *   unreadable FEEL expressions via `loadDecisionTable` /
 *   `unreadableExpressions`, and cites its source passages.
 *
 *   bun run scripts/glossary/validate.ts
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { GlossarySchema } from "../../folio-assistant-core/schemas/glossary.ts";
import { instanceNs } from "../../folio-assistant-core/scripts/glossary-page.ts";
import {
  checkDakBpmnHasProcess,
  checkDakCompanionPresent,
  checkDakDmnHasDecisionTable,
} from "../../smart-base/pipeline/qa-checkers-dak.ts";
import {
  loadDecisionTable,
  unreadableExpressions,
} from "../../cat-harness-tools/src/workflow/decision-table.ts";

const MATCHES = ["exactMatch", "closeMatch", "broadMatch", "narrowMatch"] as const;

interface Instance {
  name: string;
  ns: string;
  root: string;
}

function instanceAt(root: string, file: string): Instance {
  const d = JSON.parse(readFileSync(join(root, file), "utf-8"));
  return { name: d.name, ns: instanceNs(d.name, d.stub, d), root };
}

/** Every term and scheme IRI an instance's `glossary/` declares. */
function glossaryIris(inst: Instance): { known: Set<string>; docs: Array<{ f: string; g: ReturnType<typeof GlossarySchema.parse> }> } {
  const dir = join(inst.root, "glossary");
  const known = new Set<string>();
  const docs: Array<{ f: string; g: ReturnType<typeof GlossarySchema.parse> }> = [];
  if (!existsSync(dir)) return { known, docs };
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".glossary.json"))) {
    const g = GlossarySchema.parse(JSON.parse(readFileSync(join(dir, f), "utf-8")));
    known.add(`${inst.ns}glossary/${g.id}`);
    for (const t of g.terms) known.add(t.iri ?? `${inst.ns}glossary/${g.id}/${t.id}`);
    docs.push({ f, g });
  }
  return { known, docs };
}

const self = instanceAt(".", "dth-hrh.json");
const mounted: Instance[] = [];
if (existsSync("dpi-h-ra/dpi-h-ra.json")) mounted.push(instanceAt("dpi-h-ra", "dpi-h-ra.json"));

const here = glossaryIris(self);
const there = new Map(mounted.map((m) => [m, glossaryIris(m).known]));
let bad = 0;

for (const { f, g } of here.docs) {
  for (const t of g.terms) {
    for (const r of t.related ?? []) {
      if (r.startsWith(self.ns) && !here.known.has(r)) {
        console.error(`✗ ${f}: ${t.id} relates to ${r}, which is not a term here`);
        bad++;
      }
    }
    for (const m of MATCHES) {
      for (const r of t[m] ?? []) {
        const inst = mounted.find((x) => r.startsWith(x.ns));
        if (r.startsWith(self.ns) ? !here.known.has(r) : inst ? !there.get(inst)!.has(r) : false) {
          console.error(`✗ ${f}: ${t.id} ${m} ${r}, which is not a term in ${inst?.name ?? self.name}`);
          bad++;
        }
      }
    }
  }
  const authored = g.terms.filter((t) => t.status === "authored").length;
  const linked = g.terms.filter((t) => MATCHES.some((m) => t[m]?.length)).length;
  console.log(`✓ ${f}: ${g.terms.length} terms (${authored} authored, ${linked} matched to another scheme)`);
}

const walk = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".ts") ? [join(dir, e.name)] : [],
  );

const allTsFiles = walk("folio/dth-hrh");

// ── ArchiMate links in block manifests ─────────────────────────────
const ra = mounted.find((m) => m.name === "dpi-h-ra");
if (ra) {
  const { readArchimate } = await import("../../cat-harness-tools/archimate/schemas/archimate.ts");
  const cfg = JSON.parse(readFileSync(join(ra.root, "archimate/cat-archimate.config.json"), "utf-8"));
  const ids = new Map<string, { elements: Set<string>; views: Set<string> }>();
  for (const cm of cfg.models) {
    const p = join(ra.root, "archimate", cm.file);
    if (!existsSync(p)) continue;
    const model = readArchimate(readFileSync(p));
    ids.set(cm.id, {
      elements: new Set(model.elements.map((e: { id: string }) => e.id)),
      views: new Set(model.views.map((v: { id: string }) => v.id)),
    });
  }
  const iriRe = /\/archimate\/([^/]+)\/(elements|views)\/([^/]+)\.jsonld$/;
  let blocks = 0;
  let links = 0;
  for (const file of allTsFiles) {
    const src = readFileSync(file, "utf-8");
    if (!src.includes('"archimate"')) continue;
    const m = src.match(/meta: (\{.*\}),\n/);
    if (!m) {
      console.error(`✗ ${file}: names "archimate" but its meta is not one line of JSON`);
      bad++;
      continue;
    }
    const a = JSON.parse(m[1]).archimate;
    if (!a) continue;
    blocks++;
    for (const x of [...(a.elements ?? []), ...(a.views ?? [])]) {
      links++;
      const hit = String(x.iri).match(iriRe);
      const ok =
        hit &&
        String(x.iri).startsWith("https://litlfred.github.io/smart-ra/") &&
        ids.get(hit[1])?.[hit[2] as "elements" | "views"].has(hit[3]);
      if (!ok) {
        console.error(`✗ ${file}: ${x.iri} (${x.name}) is not in the mounted dpi-h-ra ArchiMate model`);
        bad++;
      }
    }
  }
  console.log(`✓ ArchiMate: ${links} link(s) from ${blocks} block(s) to dpi-h-ra checked`);
} else {
  console.log("· dpi-h-ra is not mounted: ArchiMate and cross-instance glossary links not checked");
}

// ── Structured content checks: personas, BPMN business processes, DMN tables ──
const personaLabels = new Set<string>();
let personaCount = 0;
let glossaryRefCount = 0;

for (const file of allTsFiles) {
  const src = readFileSync(file, "utf-8");
  const metaMatch = src.match(/meta: (\{"[^]*\}),\n/);
  const meta = metaMatch ? JSON.parse(metaMatch[1]) : undefined;

  if (meta?.glossaryTerms) {
    for (const iri of meta.glossaryTerms as string[]) {
      glossaryRefCount++;
      const inst = mounted.find((x) => iri.startsWith(x.ns));
      const ok = iri.startsWith(self.ns)
        ? here.known.has(iri)
        : inst
          ? there.get(inst)!.has(iri)
          : !iri.includes("smart-ra");
      if (!ok) {
        console.error(`✗ ${file}: glossaryTerms IRI ${iri} does not resolve`);
        bad++;
      }
    }
  }

  if (src.includes("export default persona(")) {
    personaCount++;
    const labelMatch = src.match(/label:\s*"([^"]+)"/);
    const label = labelMatch?.[1];
    if (label) personaLabels.add(label);

    if (!meta?.roleId || !Array.isArray(meta?.bpmnLanes) || meta.bpmnLanes.length === 0) {
      console.error(`✗ ${file}: persona is missing roleId or bpmnLanes`);
      bad++;
    }
    if (!Array.isArray(meta?.archimate?.elements) || meta.archimate.elements.length === 0) {
      console.error(`✗ ${file}: persona is missing meta.archimate.elements`);
      bad++;
    }
    if (!Array.isArray(meta?.glossaryTerms) || meta.glossaryTerms.length === 0) {
      console.error(`✗ ${file}: persona is missing meta.glossaryTerms`);
      bad++;
    }
    for (const lane of meta?.bpmnLanes ?? []) {
      if (!existsSync(lane.bpmnFile)) {
        console.error(`✗ ${file}: bpmnFile ${lane.bpmnFile} does not exist`);
        bad++;
        continue;
      }
      const bpmnXml = readFileSync(lane.bpmnFile, "utf-8");
      if (!bpmnXml.includes(`id="${lane.laneId}"`) || !bpmnXml.includes(`partitionElementRef="${label}"`)) {
        console.error(`✗ ${file}: lane ${lane.laneId} with partitionElementRef="${label}" not found in ${lane.bpmnFile}`);
        bad++;
      }
    }
  }
}
console.log(`✓ Personas: ${personaCount} persona block(s) linked to BPMN lanes, ArchiMate roles/components, and ${glossaryRefCount} block glossary term link(s)`);

let bpCount = 0;
let laneCount = 0;
let dtCount = 0;
let dtRuleCount = 0;

for (const file of allTsFiles) {
  const src = readFileSync(file, "utf-8");
  const dir = dirname(file);
  const label = src.match(/label:\s*"([^"]+)"/)?.[1] ?? file;

  if (src.includes("export default businessProcess(")) {
    bpCount++;
    const c1 = checkDakCompanionPresent(dir, { kind: "business-process", label, sourceFile: file });
    const c2 = checkDakBpmnHasProcess(dir, { kind: "business-process", label, sourceFile: file });
    for (const c of [c1, c2]) {
      if (c && c.result !== "pass") {
        console.error(`✗ ${file} (${c.id}): ${c.evidence}`);
        bad++;
      }
    }
    const bpmnPath = file.replace(/\.ts$/, ".bpmn");
    const bpmnXml = readFileSync(bpmnPath, "utf-8");
    const lanes = [...bpmnXml.matchAll(/<bpmn:lane\s+([^>]+)>/g)];
    if (lanes.length === 0) {
      console.error(`✗ ${bpmnPath}: has no <bpmn:lane> elements`);
      bad++;
    }
    for (const l of lanes) {
      laneCount++;
      const roleRef = l[1].match(/partitionElementRef="([^"]+)"/)?.[1];
      if (!roleRef || !personaLabels.has(roleRef)) {
        console.error(`✗ ${bpmnPath}: lane missing partitionElementRef or persona "${roleRef}" not declared`);
        bad++;
      }
    }
    const metaMatch = src.match(/meta: (\{"[^]*\}),\n/);
    const meta = metaMatch ? JSON.parse(metaMatch[1]) : undefined;
    const svgPath = meta?.svgFile ? join("folio/dth-hrh", meta.svgFile) : "";
    if (!svgPath || !existsSync(svgPath)) {
      console.error(`✗ ${file}: rendered SVG ${svgPath} is missing`);
      bad++;
    }
  }

  if (src.includes("export default decisionTable(")) {
    dtCount++;
    const c1 = checkDakCompanionPresent(dir, { kind: "decision-table", label, sourceFile: file });
    const c2 = checkDakDmnHasDecisionTable(dir, { kind: "decision-table", label, sourceFile: file });
    for (const c of [c1, c2]) {
      if (c && c.result !== "pass") {
        console.error(`✗ ${file} (${c.id}): ${c.evidence}`);
        bad++;
      }
    }
    const decisionId = src.match(/decisionId:\s*"([^"]+)"/)?.[1];
    const dmnPath = file.replace(/\.ts$/, ".dmn");
    if (!decisionId) {
      console.error(`✗ ${file}: missing decisionId`);
      bad++;
    } else {
      try {
        const table = await loadDecisionTable(dmnPath, decisionId);
        dtRuleCount += table.rules.length;
        const unreadable = unreadableExpressions(table);
        if (unreadable.length > 0) {
          console.error(`✗ ${dmnPath}: ${unreadable.length} unreadable FEEL expression(s):`, unreadable);
          bad++;
        }
      } catch (e) {
        console.error(`✗ ${dmnPath}: failed to load decision table:`, e);
        bad++;
      }
    }
  }
}

console.log(`✓ Business processes: ${bpCount} BPMN 2.0 process(es) with ${laneCount} role-bound lane(s) and rendered SVGs checked`);
console.log(`✓ Decision tables: ${dtCount} DMN table(s) with ${dtRuleCount} rule(s) checked against dak-dmn-has-decision-table and FEEL evaluator`);

process.exit(bad ? 1 : 0);
