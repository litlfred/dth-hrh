# AGENTS.md — Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries

This is a **folio**: the content repository. The authoring platform —
skills, schemas, MCP tools, the publication pipeline — is
folio-assistant, **remote-mounted** at the repository root from the SHAs pinned in
`index.lock.json` (`smart-base/`, `folio-assistant-core/`, `cat-harness/`,
`cat-harness-tools/`, `fhir-harness/`, `bootstrap/`, `bootstrap-tools/`,
`who-iris/`, `dpi-h-ra/`; all
gitignored). The session-start hook mounts them; by hand:
`bun run cat-harness-tools/scripts/remote-mount.ts`. Set up like
[litlfred/smart-ra](https://github.com/litlfred/smart-ra), on the smart-base harness
(`needs: ["smart-base", "dpi-h-ra"]` in `dth-hrh.json`). It is the pilot L2
DTH on smart-ra: smart-ra's `glossary/` and `archimate/` are mounted at
`dpi-h-ra/`, glossary terms carry SKOS matches to its concepts, and blocks name
ArchiMate elements in `meta.archimate`. How, step by step: `docs/l2-wiring.md`.

This file is the **agent-generic** source of truth, read natively by Claude
Code, Gemini CLI, Antigravity, Cursor and Copilot. `CLAUDE.md` and
`GEMINI.md` are thin stubs pointing here.

> **Content lives here; formalism lives in the platform.** If you are about to
> add a schema, a validator, a QA criterion or a skill, it belongs in
> folio-assistant, not in this repo. If you are about to add a chapter, a
> recommendation or a table, it belongs here.

## This document

The **WHO Digital Transformation Handbook: Planning for Human Resources for
Health and Health Worker Registries** — an L1 document of smart-base document
kind `dth` (`smart-base/document-kinds/dth.json`), at the TWG-outline stage.

| what | where | how it is made |
|---|---|---|
| the working document | `folio/dth-hrh/` | seeded once from the TWG outline by `scripts/folio/build_from_outline.py`; **edited by hand from then on** — never re-run it without `--force`, which discards edits |
| the glossary (Annex 9) | `glossary/*.glossary.json` (SKOS, `folio-glossary/v1`) and `folio/dth-hrh/glossary/` | `bun run glossary:build` from the TWG workbook; the chapter is generated — edit the glossary, not the chapter |
| sources, frozen | `library/twg-outline-2026-10-02/`, `library/twg-glossary-2026-09-29/` | as received; never edited to answer a comment |
| working-group comments and change sets | `review/wg-comment/` | the platform's public-comment tooling with `--store review/wg-comment` |
| review anchors (block and section index the comment tooling places comments with) | `folio/dth-hrh/review-anchors.json` | `bun run review:anchors` after any structural change; `check:review-anchors` fails when stale |

**Glossary rules.** Every definition in the workbook is a `candidate` in
`twg-candidates.glossary.json`, one per (concept, source). The consolidated
scheme `dth-hrh.glossary.json` has one concept per term, `related` to its
candidates. Only a person moves a term to `authored`, by setting `definition`
and `status` and citing the change set that decided it in `scopeNote`;
`glossary:build` keeps authored terms. Check with `bun run check:dth-glossary`.
Digital terms are out of scope here (addressed separately; see
`smart-base/findings/dth-terms.md` for the cross-DTH digital term alternatives).

**Reuse before authoring.** The DIIG phase figure in 3.1 is the smart-base
library's vector of DIIG Fig. 1.1.1. Other reusable material: the RA's
health workforce registry section
(`smart-base/library/who-dpi-h-reference-architecture-draft-v1/sections/sec-092-health-workforce-registry.md`),
the DTH voice (`smart-base/skills/voices/who-digital-transformation-handbook/`,
rule `register-is-not-registry`), the DIIG BPMN
(`smart-base/methodologies/processes/diig-investment-path.bpmn`), and the
three ingested DTHs (PHC, supply chain, product catalogue) in `smart-base/library/`.

**Working-group comments** work like smart-ra's public comments, at a smaller
scale. Intake: `bun run folio-assistant-core/scripts/public-comment.ts import <file.xlsx> --store review/wg-comment --channel comment-matrix`
or `import-narrative`. On GitHub, a collaborator writes in any issue or PR
conversation:

```
pc: PC-0042
recommend: accepted-modified

Why.
```

(`decide:` for the editor). Change sets: `public-comment-changesets.ts … --store review/wg-comment`.
The workflows are dispatch-only, as in smart-ra.

**The site** is agent-run: `bun run cat-harness-tools/scripts/stage-local.ts --repo .`
(steps in `dth-hrh.config.json` under `site.build`), or the `site-publish`
workflow by hand.

## Content type: `document`

A **document** folio: structured prose — policy guidance, a standard, a
report, a handbook. No Lean formalization, and no TeX installation required to
publish.

**Block kinds you may use:** `prose`, `example`, `remark`, `algorithm`,
`simulator`, `equation`, `diagram`, `table`, `figure` — and, for the L1
structured assets, smart-base's DAK kinds imported from
`folio/schema/dak.ts`: `persona` (`pers:`), `userScenario` (`scen:`),
`functionalRequirement` (`freq:`), `nonFunctionalRequirement` (`nfreq:`),
`dataElement` (`de:`). A user scenario names its personas by label.

**Kinds you may NOT use:** `definition`, `theorem`, `lemma`,
`proposition`, `corollary`, `conjecture`, `proof`. Those are the paper
profile — their assertion is a formal mathematical claim backed by a `.lean`
sibling, and this folio has no toolchain to check one. `content_validate`
enforces this on every run.

Reaching for `theorem` to carry a recommendation is the common mistake. Load
the `normative-statements` skill instead.

## Layout

```
folio/dth-hrh/          the document
  dth-hrh.ts             its manifest — chapters, in reading order
  <chapter>/<chapter>.ts   a chapter manifest — sections, in reading order
  <chapter>/<root>.ts      a block manifest
  <chapter>/<root>.md      that block's prose
folio/schema/            re-export shim for the platform's builders
test/results/block-qa/     QA verdicts, one per block, mirroring folio/ (machine-written working copy — published to qa-reports)
test/attestations/        reviewer judgements and baseline attestations (committed on main)
library/                   ingested source documents (read-only reference)
uploads/                   source PDFs, for offline citation verification
./              the platform
beans/                    the work plan (mounted from its declared branch)
todos/                    people's outstanding items (mounted likewise)
```

## Commands

```sh
bun run ./cat-harness-tools/src/index.ts --stdio --repo .   # the MCP server
bun run ./cat-harness-tools/src/index.ts --check-deps       # what's installed
bun run ./cat-harness-tools/content/pipeline/qa-sweep.ts folio  # QA every block
```

## QA — every block is checked from the first commit

`qa-sweep` runs every criterion a script can check against each block, and
writes one verdict file per block under `test/results/block-qa/`. Derived QA
verdicts live on the orphan `qa-reports` branch (published by CI), rather than
being committed to `main`. Judgements stay on `main` in `test/attestations/`.
The working copy under `test/results/` is machine-written.

`.github/workflows/qa-sweep.yml`
runs the full sweep in CI, and `qa-sweep-nightly.yml` refreshes stale verdicts;
both are dispatch-only until you enable their triggers. Criteria that need an
agent's judgement (voice, exposition, adversarial review) are not run by the
sweep; they stay unaudited until an agent records them.

## Work plan — use `beans`

`beans/` and `todos/` are this folio's STATE. Where each is kept is declared
in `dth-hrh.json` — by default on its own branch,
`cat/dth-hrh/beans` and `cat/dth-hrh/todos`, mounted at those paths by the
session-start hook (`state:mount`) and never committed to `main`. Either way
the plan survives a fresh container and a sibling session sees it. Claim before
you work; never resolve a sibling's bean.

```sh
./cat-harness-tools/scripts/install-beans.sh
beans list
beans create "<title>"
beans <id> --status in-progress
```

**Check before you create** — `beans create` is not idempotent and dedupes on
nothing, so re-entering a step duplicates the plan rather than no-op'ing.

## The skills are in the platform, not here

Ask for them by name and the agent loads them over MCP (`skill_fetch`):

| Package | What |
|---|---|
| `folio-core` | content-agnostic: bean coordination, editorial review, QA |
| `folio-document-adapter` | `document-authoring`, `document-structure`, `normative-statements`, `document-publishing` |

Do not copy a skill body into this repo. It will drift, and the platform's copy
is the one every other folio is reading.
