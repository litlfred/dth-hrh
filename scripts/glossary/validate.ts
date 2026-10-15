#!/usr/bin/env bun
/**
 * Validate this folio's glossary schemes against the platform's
 * folio-glossary/v1 schema, and check every `related` IRI that points into
 * this instance's namespace names a term (or scheme) that exists.
 *
 *   bun run scripts/glossary/validate.ts
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { GlossarySchema } from "../../folio-assistant-core/schemas/glossary.ts";

const NS = "https://litlfred.github.io/folio-assistant/dth-hrh/ns#glossary/";
const dir = "glossary";
const files = readdirSync(dir).filter((f) => f.endsWith(".glossary.json"));
const known = new Set<string>();
const docs = files.map((f) => {
  const g = GlossarySchema.parse(JSON.parse(readFileSync(join(dir, f), "utf-8")));
  known.add(`${NS}${g.id}`);
  for (const t of g.terms) known.add(`${NS}${g.id}/${t.id}`);
  return { f, g };
});
let bad = 0;
for (const { f, g } of docs) {
  for (const t of g.terms) {
    for (const r of t.related ?? []) {
      if (r.startsWith(NS) && !known.has(r)) {
        console.error(`✗ ${f}: ${t.id} relates to ${r}, which is not a term here`);
        bad++;
      }
    }
  }
  const authored = g.terms.filter((t) => t.status === "authored").length;
  console.log(`✓ ${f}: ${g.terms.length} terms (${authored} authored)`);
}
process.exit(bad ? 1 : 0);
