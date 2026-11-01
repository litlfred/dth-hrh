# CS-007: plan of changes for the L2 pilot (dth-hrh#47)

| | |
|---|---|
| Change set | CS-007 in the DTH-HRH review log |
| Issue | [dth-hrh#47](https://github.com/litlfred/dth-hrh/issues/47), "Pilot: make dth-hrh an L2 DTH that depends on smart-ra" |
| Asked for | Committee feedback (CL), 2026-11-01: "Need plan of changes to make" |
| Stage | `proposed`: waiting for sign-off on #47. Nothing below is implemented by this plan. |
| Method | CRDM (a stakeholder-facing content question), through the `plan-request-gate` skill |
| Written | 2026-11-01, from `main` at a27f97b |

## Summary

dth-hrh is the pilot for Digital Transformation Handbooks that sit on top of
smart-ra (owner decision, 2026-10-31, option A). The other four DTHs (dth-phc,
dth-sc, dth-pc, dth-sfp) copy its wiring.

- **Done (merged, #63):** smart-ra is mounted, one glossary term is matched to
  smart-ra, 22 blocks in chapters 4 to 8 link to smart-ra's ArchiMate model,
  and `docs/l2-wiring.md` is the template.
- **Drafted, not merged (#64, #69, #70):** six BPMN processes, fifteen linked
  personas, three DMN decision tables, W3C ORG organizations in the glossary,
  and the SMART Guidelines approach figure. All three change content, so each
  is a committee decision and stays unmerged until the committee decides.
  By the owner's decision Q-CS7-1 A (2026-11-01 19:10Z) the content now has
  its own change sets: **#76** (BPMN, personas, DMN; PR #64) and **#77**
  (SMART approach figure; PR #70). CS-007 keeps the wiring and #69.
- **Still to do:** bring the drafts up to date with `main`, add a dth-hrh
  ArchiMate overlay, propose the remaining glossary matches, update the
  template, and, once smart-base lands the L2 document kind, switch the folio
  to L2 and move blocks to typed fields.

## 1. What is already done

### dth-hrh#63 (merged 2026-10-31 08:29Z)

| Item of #47 | What #63 did |
|---|---|
| Mount smart-ra | `index.config.json` mounts litlfred/smart-ra at 6c60711 as instance `dpi-h-ra`, only its `glossary/` and `archimate/` directories. Every layer dth-hrh already pins is skipped, so dth-hrh's own pins win. `dth-hrh.json` `needs` is `["smart-base", "dpi-h-ra"]`; smart-base stays because the DAK block kinds come through it. |
| Glossary links | "Health workforce registry" has `broadMatch` to smart-ra's "Registry". This is 1 of 49 terms. `build_glossary.py` keeps SKOS matches on a re-run. |
| ArchiMate links | 22 blocks in chapters 4 to 8 (section prose and 6 functional requirements) carry 59 links to HWR elements and views in smart-ra 0.2.0, in `meta.archimate`. Each is marked "agent-proposed by name, for working-group review". |
| Template | `docs/l2-wiring.md`, linked from AGENTS.md. |
| Fix on the way | `check:dth-glossary` had compared links against a namespace no IRI used, so it checked nothing. It was fixed, and it checks matches and ArchiMate IRIs. Since #72 (2026-11-01) this check is core's shared `glossary-validate.ts`. |

### docs/l2-wiring.md

Five steps, as merged: (1) mount smart-ra's `glossary` and `archimate` only,
with skips for shared layers; (2) declare `needs`; (3) link terms with SKOS
`broadMatch`/`exactMatch`, never copy definitions; (4) put ArchiMate IRIs in
`meta.archimate`, then `kg:blocks`; (5) run `check:dth-glossary`. It says
that BPMN, persona links and DMN wait for the structured-authoring work, and
that the folio's `level` stays `L1` until smart-base#242 adds the L2 kind.

The template does not yet say how a DTH adds its own ArchiMate elements.
Since 2026-11-01 08:13Z the owner's rule is that a DTH builds an **overlay** on
smart-ra and never adds elements to smart-ra itself (pattern in dth-phc#3 and
dth-sfp#8: `scripts/archimate/extract_overlay.py`, `archimate/README.md`, tags
`overlay:owner` / `overlay:base` / `overlay:dth`). dth-hrh has no overlay yet.

## 2. What the draft PRs add (all draft, all content)

| PR | Adds | State on 2026-11-01 |
|---|---|---|
| [#64](https://github.com/litlfred/dth-hrh/pull/64) BPMN, roles, DMN | 6 BPMN processes (ch04 lifecycle maintenance; ch05 register and license, renew and verify, employment and deployment, NHWA reporting; ch06 governance review), each with a `.bpmn`, a rendered SVG and a step table. 15 personas linked to lanes, smart-ra roles and glossary terms, 2 of them new (registry governance body, registry custodian, ch06). 3 DMN tables (ch07: registration eligibility, lifecycle status, verification and access), 25 rules. Updates `docs/l2-wiring.md` with a structured-content step. | Draft, clean, 1 commit behind `main`. Only the draft fast tier of CI ran. |
| [#69](https://github.com/litlfred/dth-hrh/pull/69) W3C ORG glossary | `foaf:focus` on 11 organization concepts and the 41 professional council examples; the 6 shared organizations from smart-ra#198 as `members`. | Draft, **stacked on #64**. Its own "before merge" step (bump the pins once core#412 and smart-ra#198 merge) is now unblocked: both merged on 2026-10-31. Last CI run was cancelled. |
| [#70](https://github.com/litlfred/dth-hrh/pull/70) SMART approach figure | `fig:smart-guidelines-approach` in 3.1, an SVG generated by core's `smart-approach-svg` (core#405) from who-iris figure data (who-iris#149), with glossary and ArchiMate links. | Draft, clean, 3 commits behind `main`. Both dependencies merged. |

Points the committee should know when it reviews them:

- The BPMN steps, persona links and DMN rules were extracted by an agent from
  the outline. The DMN tables use only qualitative states from the text (no
  invented thresholds), but every rule still needs a human check against its
  cited passage.
- #64 was written before #72 replaced the local `check:dth-glossary` with
  core's shared validator. Its claim that the check covers lanes, BPMN and
  DMN must be re-run on the rebased branch.
- The persona "Health worker" links to two smart-ra Business Roles, "Health
  Workers" and "Health Worker". smart-ra also has a "Health Worker"
  DataObject with the same name; the rename is in draft smart-ra#203.
- #64 puts three kinds of change (processes, roles, decision tables) in one
  PR. Section 4 asks whether to split it, under #76, into three change sets.

## 3. Requirements

Sign-off owners: **Authoring Committee** for content (anything a reader of the
handbook sees); **owner (litlfred)** for wiring and platform steps.
Verification methods: `test`, `inspection`, `review`, `analysis`.

### Done

- [x] **REQ-001** (SHALL) dth-hrh depends on smart-ra through a mount of its glossary and ArchiMate only.
  - _Source:_ #47 Wiring item 1; owner, 2026-10-31, option A.
  - _Success criteria:_ `SC-1` (test) `mount:remote:check` verifies `dpi-h-ra`; `SC-2` (inspection) `needs` lists `dpi-h-ra`.
  - _Sign-off owner:_ owner. _Delivered by:_ #63.
- [x] **REQ-003** (SHALL) Chapters 4 to 8 link to smart-ra's HWR ArchiMate elements and views.
  - _Source:_ #47 Wiring item 3.
  - _Success criteria:_ `SC-1` (test) `check:dth-glossary` resolves every `meta.archimate` IRI.
  - _Sign-off owner:_ owner. _Delivered by:_ #63 (22 blocks, 59 links).

### Drafted, waiting for the committee

- [ ] **REQ-005** (SHALL) Each business process in the narrative has a BPMN diagram with one lane per role.
  - _Source:_ #47 Structured content; owner, 2026-10-31 01:36Z.
  - _Success criteria:_ `SC-1` (test) every `.bpmn` passes `dak-bpmn-has-process` and every lane names a persona; `SC-2` (review) the committee accepts the process list and each diagram's steps against its cited sections.
  - _Sign-off owner:_ Authoring Committee. _Draft:_ #64, change set #76.
- [ ] **REQ-006** (SHALL) Every role in the narrative is a persona block linked to its BPMN lane, a smart-ra ArchiMate role, actor or component, and a glossary term.
  - _Source:_ #47 Structured content.
  - _Success criteria:_ `SC-1` (test) each persona's lane, ArchiMate and glossary links resolve; `SC-2` (review) the committee accepts each link and the two new ch06 personas.
  - _Sign-off owner:_ Authoring Committee. _Draft:_ #64, change set #76.
- [ ] **REQ-007** (SHALL) Rules in the narrative are DMN decision tables that cite their source, with thresholds from the source only.
  - _Source:_ #47 Structured content; cat-harness `dmn-authoring`.
  - _Success criteria:_ `SC-1` (test) `dak-dmn-has-decision-table` passes and no FEEL expression is unreadable; `SC-2` (review) the committee checks each rule against its cited passage.
  - _Sign-off owner:_ Authoring Committee. _Draft:_ #64, change set #76.
- [ ] **REQ-009** (SHOULD) Organizations in the glossary use W3C ORG and share smart-ra's organizations scheme.
  - _Source:_ owner choice of option B for glossary organizations (SKOS + W3C ORG, smart-ra#198).
  - _Success criteria:_ `SC-1` (test) `check:dth-glossary` passes with core and smart-ra pinned at or past core#412 and smart-ra#198; `SC-2` (review) the committee accepts the members list.
  - _Sign-off owner:_ Authoring Committee. _Draft:_ #69.
- [ ] **REQ-010** (MAY) Chapter 3 shows the SMART Guidelines approach as a figure generated from shared who-iris data.
  - _Source:_ owner choice on 2026-10-31 to hold each shared chart once as data in who-iris (who-iris#149).
  - _Success criteria:_ `SC-1` (test) `site:document` builds and the SVG regenerates byte-identical from the data; `SC-2` (review) the committee agrees the figure belongs in 3.1.
  - _Sign-off owner:_ Authoring Committee. _Draft:_ #70, change set #77.

### Not started

- [ ] **REQ-002** (SHALL) Each dth-hrh term that has a smart-ra concept carries a SKOS match to it, as a proposal.
  - _Source:_ #47 Wiring item 2 (only 1 of 49 terms is matched today).
  - _Success criteria:_ `SC-1` (analysis) a list compares all 49 terms with smart-ra's glossary and proposes broad, narrow or exact matches with reasons; `SC-2` (test) `check:dth-glossary` passes; `SC-3` (review) the committee accepts the matches.
  - _Sign-off owner:_ Authoring Committee.
- [ ] **REQ-004** (SHALL) `docs/l2-wiring.md` is a complete template for the other four DTHs.
  - _Source:_ #47 Wiring item 4; owner rule on overlays, 2026-11-01 08:13Z.
  - _Success criteria:_ `SC-1` (inspection) it has steps for the ArchiMate overlay, structured content and the shared checks from core; `SC-2` (inspection) smart-base's `dth-l1-to-l2-ingest` skill (smart-base#249) links to it.
  - _Sign-off owner:_ owner.
- [ ] **REQ-008** (SHALL) ArchiMate elements dth-hrh needs that smart-ra lacks live in a dth-hrh overlay, never in smart-ra.
  - _Source:_ owner, 2026-11-01 08:13Z (DTHs build overlays on smart-ra).
  - _Success criteria:_ `SC-1` (test) `check:dth-glossary` validates the overlay tags; `SC-2` (inspection) no new element is added to smart-ra; a real conflict is filed as an issue on smart-ra and on dth-hrh.
  - _Sign-off owner:_ owner (wiring), Authoring Committee (the elements).
- [ ] **REQ-011** (SHALL) The folio's `level` becomes `L2` once smart-base has an L2 DTH document kind.
  - _Source:_ #47; `docs/l2-wiring.md`. _Blocked by:_ smart-base#242 (open).
  - _Success criteria:_ `SC-1` (test) the folio validates against the L2 kind.
  - _Sign-off owner:_ owner.
- [ ] **REQ-012** (SHOULD) Persona, scenario, requirement and data element blocks use WHO's typed logical-model fields, and step tables use the shared step-table schema.
  - _Source:_ structured-authoring option D, owner, 2026-10-31 ~01:50Z. _Blocked by:_ smart-base#246 (draft) and the step-table schema in smart-base#242.
  - _Success criteria:_ `SC-1` (test) the 52 blocks (13 personas, 9 scenarios, 15 FR, 5 NFR, 10 DE) and #64's step tables validate against the typed kinds; `SC-2` (review) the committee sees no change in meaning.
  - _Sign-off owner:_ owner (schema), Authoring Committee (meaning).
- [ ] **REQ-013** (SHALL) The drafts stay current with `main` and with smart-ra, so the committee reviews what would really merge.
  - _Source:_ owner rule that each re-pin is a review step (2026-11-01 17:00Z).
  - _Success criteria:_ `SC-1` (test) #64, #69, #70 are 0 commits behind `main` and pass the full checks; `SC-2` (inspection) the `dpi-h-ra` pin moves from 6c60711 to current smart-ra `main`, with a note of what changed in the linked elements.
  - _Sign-off owner:_ owner.
- [ ] **REQ-014** (SHALL NOT) No content change set in this plan is merged, and no issue is closed, without the committee's decision.
  - _Source:_ owner, 2026-11-01 18:50Z ("that is a commitee content change").
  - _Success criteria:_ `SC-1` (inspection) #64, #69, #70 stay draft or unmerged until a Disposition is recorded in the review log; #47 stays open.
  - _Sign-off owner:_ owner.

## 4. Open question for sign-off

**Q-L2P-1: how should the committee review #64 (change set #76)?**

- **A. Split #64 into three change sets under #76** (BPMN processes, roles, DMN tables), each its own PR and review-log row. Smaller reviews, and one can merge without the others. Costs one rebase and two new rows. *Recommended.*
- **B. Keep #64 as one change set.** No extra work, but the committee must accept or reject all three kinds together.
- **C. Hold #64 until typed fields land** (smart-base#246), then redo it on the typed kinds. Avoids reworking blocks twice, but the committee sees nothing for now.

## 5. Work plan (beans)

The bean files are in `docs/proposals/cs-007-beans/` on this branch, because `beans/` is a state mount that git ignores here. They move into the bean store when the plan is signed off. Each `## Done when` is copied from
the criteria above. Order: 1, then 2 to 4 in parallel; 5 to 7 any time; 8 and
9 wait for smart-base.

| # | Bean | Delivers | Waits on |
|---|---|---|---|
| 1 | `dth-hrh-8xq8` Rebase #64, #69, #70 on `main`, bump #69's pins, re-pin `dpi-h-ra` | REQ-013, REQ-009 SC-1 | sign-off |
| 2 | `dth-hrh-fwj5` BPMN processes ready for committee review | REQ-005 | 1, Q-L2P-1 |
| 3 | `dth-hrh-15kq` Persona links ready for committee review | REQ-006 | 1, Q-L2P-1 |
| 4 | `dth-hrh-3r3s` DMN tables ready for committee review | REQ-007 | 1, Q-L2P-1 |
| 5 | `dth-hrh-b3e7` Propose the remaining glossary matches to smart-ra | REQ-002 | sign-off |
| 6 | `dth-hrh-s8rm` dth-hrh ArchiMate overlay | REQ-008 | sign-off |
| 7 | `dth-hrh-w5sp` Complete the `l2-wiring.md` template | REQ-004 | 6 |
| 8 | `dth-hrh-4in2` Switch the folio to L2 | REQ-011 | smart-base#242 |
| 9 | `dth-hrh-6exs` Move blocks to typed fields | REQ-012 | smart-base#246, #242 |

#69 (REQ-009) and #70 (REQ-010) need no new work beyond bean 1: once current,
they go to the committee as they are.

Every bean that touches content stops at a draft PR plus a staging preview,
and the committee's decision is recorded in the review log before any merge
(REQ-014).
