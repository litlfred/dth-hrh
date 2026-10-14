#!/usr/bin/env bun
/**
 * Write the glossary page of this folio's site: <out>/en/dth-hrh/glossary/index.html.
 *
 *   bun run tools/glossary/site.ts --out <site source dir>
 *
 * Reads glossary/*.glossary.json (folio-glossary/v1, validated with the
 * platform's GlossarySchema) and renders one page: the consolidated scheme's
 * terms with their status and candidate definitions, then the candidate and
 * country-example schemes. It is the visualiser dth-hrh.json declares for the
 * `glossary` directory. A stopgap: the platform's glossary-page.ts renders only
 * the platform's own site (no --out), so a folio has no glossary page without
 * this.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { GlossarySchema, type Glossary, type LangText } from "../../folio-assistant-core/schemas/glossary.ts";

const ROOT = resolve(import.meta.dir, "../..");
const NS = "https://litlfred.github.io/folio-assistant/dth-hrh/ns#glossary/";
const i = process.argv.indexOf("--out");
const out = i > 0 ? resolve(process.argv[i + 1]) : undefined;
if (!out) {
  console.error("usage: bun run tools/glossary/site.ts --out <site source dir>");
  process.exit(2);
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const text = (t: LangText | undefined) => (t === undefined ? "" : typeof t === "string" ? t : Object.values(t)[0]);
const para = (s: string) => s.split(/\n\s*\n/).map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`).join("");

const dir = join(ROOT, "glossary");
const schemes = new Map<string, Glossary>();
for (const f of readdirSync(dir).filter((f) => f.endsWith(".glossary.json")).sort()) {
  const g = GlossarySchema.parse(JSON.parse(readFileSync(join(dir, f), "utf-8")));
  schemes.set(g.id, g);
}
const main = schemes.get("dth-hrh");
if (!main) throw new Error("glossary/dth-hrh.glossary.json is missing");
const byIri = new Map<string, { scheme: Glossary; term: Glossary["terms"][number] }>();
for (const g of schemes.values()) for (const t of g.terms) byIri.set(`${NS}${g.id}/${t.id}`, { scheme: g, term: t });

const termHtml = (t: Glossary["terms"][number]) => {
  const cands = (t.related ?? []).map((r) => byIri.get(r)).filter((x) => x !== undefined);
  const status =
    t.status === "authored"
      ? `<span class="st st-a">adopted</span>`
      : `<span class="st st-c">open · ${cands.length} candidate${cands.length === 1 ? "" : "s"}</span>`;
  const alts = t.altLabel?.length ? `<div class="alt">Also: ${esc(t.altLabel.join(", "))}</div>` : "";
  const def = t.definition ? `<div class="def">${para(text(t.definition))}</div>` : "";
  const list = cands.length
    ? `<details${t.status === "authored" ? "" : " open"}><summary>Candidate definitions</summary><ol>${cands
        .map((c) => `<li><div class="src">${esc(c.term.scopeNote?.replace(/^Cited as: /, "") ?? "")}</div>${para(text(c.term.definition))}</li>`)
        .join("")}</ol></details>`
    : "";
  return `<section class="term" id="${esc(t.id)}"><h3>${esc(text(t.prefLabel))} ${status}</h3>${alts}${def}${t.scopeNote ? `<div class="note">${esc(t.scopeNote)}</div>` : ""}${list}</section>`;
};

const councils = schemes.get("twg-professional-council-examples");
const councilRows = (councils?.terms ?? [])
  .map((t) => `<tr><td>${esc(t.notation ?? "")}</td><td>${esc(text(t.prefLabel))}</td><td>${esc(text(t.definition))}</td></tr>`)
  .join("");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Glossary — DTH-HRH</title>
<style>
:root{--fg:#1d2327;--muted:#5b6770;--line:#d6dde2;--bg:#fff;--chip:#eef3f6;--ok:#1f7a4a;--open:#9a5b00}
@media (prefers-color-scheme:dark){:root{--fg:#e6eaed;--muted:#9aa7b0;--line:#33404a;--bg:#14191d;--chip:#1f2a31;--ok:#5cc28f;--open:#e0a54a}}
body{font:16px/1.55 system-ui,sans-serif;color:var(--fg);background:var(--bg);max-width:58rem;margin:0 auto;padding:1.5rem 1rem}
h1{font-size:1.6rem;margin:.2rem 0}h2{margin-top:2rem;border-bottom:1px solid var(--line);padding-bottom:.3rem}
h3{font-size:1.1rem;margin:0 0 .3rem}.term{border-top:1px solid var(--line);padding:.9rem 0}
.st{font-size:.75rem;font-weight:600;border-radius:999px;padding:.1rem .5rem;margin-left:.4rem;background:var(--chip);vertical-align:middle}
.st-a{color:var(--ok)}.st-c{color:var(--open)}.alt,.note,.src{color:var(--muted);font-size:.9rem}.src{font-weight:600}
details summary{cursor:pointer;color:var(--muted);font-size:.9rem;margin:.3rem 0}ol li{margin:.5rem 0}
table{border-collapse:collapse;width:100%;font-size:.9rem}td,th{border:1px solid var(--line);padding:.35rem .5rem;vertical-align:top;text-align:left}
.toc{columns:3 12rem;font-size:.9rem;padding-left:1rem}a{color:inherit}
</style></head><body>
<p><a href="../">← Working document</a></p>
<h1>Glossary</h1>
<p>${esc(main.description ?? "")}</p>
<p>${main.terms.filter((t) => t.status === "authored").length} of ${main.terms.length} terms adopted. Comment on a term from its entry in Annex 9 of the <a href="../">working document</a>.</p>
<ul class="toc">${main.terms.map((t) => `<li><a href="#${esc(t.id)}">${esc(text(t.prefLabel))}</a></li>`).join("")}</ul>
<h2>Terms</h2>
${main.terms.map(termHtml).join("\n")}
<h2 id="professional-councils">Professional councils: country examples</h2>
<p>${esc(councils?.description ?? "")}</p>
<table><thead><tr><th>Region / country</th><th>Council</th><th>Statutory definition</th></tr></thead><tbody>${councilRows}</tbody></table>
<p class="note">Machine-readable: <code>glossary/*.glossary.json</code> (SKOS, folio-glossary/v1) in the repository.</p>
</body></html>
`;

const dest = join(out, "en", "dth-hrh", "glossary");
mkdirSync(dest, { recursive: true });
writeFileSync(join(dest, "index.html"), html);
console.log(`glossary page: ${main.terms.length} terms → ${join("en", "dth-hrh", "glossary", "index.html")}`);
