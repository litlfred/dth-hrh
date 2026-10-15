#!/usr/bin/env bun
/**
 * Write folio/dth-hrh/review-anchors.json from the working document itself.
 *
 *   bun run scripts/review/review-anchors.ts [--check]
 *
 * In smart-ra the anchors come from the frozen review version (a line-numbered
 * PDF and its .docx, via docx-to-folio.ts), and every public comment is placed
 * on a block through them. This handbook has no frozen version yet: the
 * working group comments on the working document as it stands. So the index
 * is taken from the folio — every chapter, section and block in reading
 * order — and the platform's comment intake, placement and dashboard read it
 * unchanged. A comment that cites "7.3" is placed on section 7.3's first block
 * (anchor method `section`); one made from a block's feedback link names the
 * block directly.
 *
 * Re-run after the structure changes (a block added, moved or relabelled).
 * `--check` fails when the committed file is stale.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const DOC = "dth-hrh";
const ROOT = resolve(import.meta.dir, "../..");
const FOLIO = join(ROOT, "folio", DOC);
const OUT = join(FOLIO, "review-anchors.json");
const OUTLINE = "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const hash = (s: string) => createHash("sha256").update(norm(s)).digest("hex").slice(0, 12);
const sha = (f: string) => createHash("sha256").update(readFileSync(join(ROOT, f))).digest("hex");
const plain = (md: string) =>
  md.replace(/[*_>#|`]/g, " ").replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();

type Sec = { title: string; label?: string; blocks: string[]; subsections?: Sec[] };

const paper = (await import(join(FOLIO, `${DOC}.ts`))).default as { chapters: Array<{ dir: string }> };
const chapters: Array<{ dir: string; title: string; number?: number; label: string }> = [];
const sections: Array<{ label: string; number?: string; title: string; chapter: string; parent?: string }> = [];
const blocks: Array<Record<string, unknown>> = [];

for (const { dir } of paper.chapters) {
  const ch = (await import(join(FOLIO, dir, `${dir}.ts`))).default as {
    title: string; number?: number; label: string; sections: Sec[];
  };
  chapters.push({ dir, title: ch.title, ...(ch.number !== undefined ? { number: ch.number } : {}), label: ch.label });
  const walk = (s: Sec, path: string[], parent?: string) => {
    const label = s.label ?? `sec:${dir}-${sections.length}`;
    const num = s.title.match(/^(\d+(?:\.\d+)*)\s/)?.[1];
    sections.push({ label, ...(num ? { number: num } : {}), title: s.title, chapter: dir, ...(parent ? { parent } : {}) });
    for (const root of s.blocks) {
      const m = (require(join(FOLIO, dir, `${root}.ts`)) as { default: { kind: string; label?: string; caption?: string } }).default;
      const mdPath = join(FOLIO, dir, `${root}.md`);
      const text = plain(existsSync(mdPath) ? readFileSync(mdPath, "utf-8") : "");
      blocks.push({
        label: m.label ?? root,
        kind: m.kind,
        chapter: dir,
        root,
        sections: [...path, label],
        ...(m.caption ? { caption: m.caption } : {}),
        hash: hash(text),
        excerpt: text.slice(0, 160),
        method: "folio-snapshot",
      });
    }
    for (const sub of s.subsections ?? []) walk(sub, [...path, label], label);
  };
  for (const s of ch.sections) walk(s, []);
}

const anchors = {
  $schema: "folio-review-anchors/v1",
  document: DOC,
  library: "twg-outline-2026-10-02",
  // What the library entry is to this folio (shown on its library page).
  sourceLabel: "the TWG manuscript outline it was seeded from",
  source: {
    // No frozen review version yet: the working document is the review text.
    // The outline it was seeded from stands in as the source of record.
    docx: { file: OUTLINE, sha256: sha(OUTLINE) },
    pdf: { file: "", sha256: "", pages: 0 },
  },
  note: "Generated from the working document by scripts/review/review-anchors.ts (no frozen review version yet).",
  chapters,
  sections,
  blocks,
};
const text = JSON.stringify(anchors, null, 1) + "\n";
if (process.argv.includes("--check")) {
  const ok = existsSync(OUT) && readFileSync(OUT, "utf-8") === text;
  console.log(ok ? "✓ review-anchors.json is current" : "✗ review-anchors.json is stale: run bun run scripts/review/review-anchors.ts");
  process.exit(ok ? 0 : 1);
}
writeFileSync(OUT, text);
console.log(`review-anchors: ${chapters.length} chapters, ${sections.length} sections, ${blocks.length} blocks`);
