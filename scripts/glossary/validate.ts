#!/usr/bin/env bun
/**
 * Validate this folio's glossary schemes against the platform's
 * folio-glossary/v1 schema, and check that every link resolves:
 *
 * - every `related` IRI in this instance's namespace names a term (or scheme)
 *   that exists here;
 * - every SKOS match (`exactMatch`, `closeMatch`, `broadMatch`, `narrowMatch`)
 *   into a MOUNTED instance's namespace (such as dpi-h-ra, litlfred/smart-ra)
 *   names a term in that instance's glossary (dth-hrh#47);
 * - every ArchiMate element or view a block names in `meta.archimate` exists
 *   in the mounted dpi-h-ra model (dth-hrh#47).
 *
 * Namespaces come from each instance's own declaration (`instanceNs`), never a
 * hand-written string: the old hard-coded one did not match the IRIs the
 * glossary uses, so nothing was being checked.
 *
 * The cross-instance part is a stopgap for this pilot. The general check is
 * smart-base#242 (cross-instance glossary validator, ArchiMate-link check);
 * once it lands this script reduces to a call to it.
 *
 *   bun run scripts/glossary/validate.ts
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { GlossarySchema } from "../../folio-assistant-core/schemas/glossary.ts";
import { instanceNs } from "../../folio-assistant-core/scripts/glossary-page.ts";

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
    ids.set(cm.id, { elements: new Set(model.elements.map((e: { id: string }) => e.id)), views: new Set(model.views.map((v: { id: string }) => v.id)) });
  }
  const iriRe = /\/archimate\/([^/]+)\/(elements|views)\/([^/]+)\.jsonld$/;
  let blocks = 0;
  let links = 0;
  const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".ts") ? [join(dir, e.name)] : []));
  for (const file of walk("folio/dth-hrh")) {
    const src = readFileSync(file, "utf-8");
    if (!src.includes('"archimate"')) continue;
    // The outline seed writes `meta` as one line of JSON, which is where the links go.
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
      const ok = hit && String(x.iri).startsWith("https://litlfred.github.io/smart-ra/") && ids.get(hit[1])?.[hit[2] as "elements" | "views"].has(hit[3]);
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
process.exit(bad ? 1 : 0);
