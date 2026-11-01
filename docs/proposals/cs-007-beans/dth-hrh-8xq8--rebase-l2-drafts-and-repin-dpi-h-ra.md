---
# dth-hrh-8xq8
$schema: bean/1.0.0
title: 'Rebase #64, #69, #70 on main, bump #69 pins, re-pin dpi-h-ra'
status: todo
type: task
priority: normal
tags:
    - cs-007
    - l2-pilot
created_at: 2026-11-01T19:15:00Z
updated_at: 2026-11-01T19:15:00Z
---

Plan: docs/proposals/cs-007-l2-pilot-plan.md (CS-007, dth-hrh#47). Waits for sign-off of the plan on #47.

Delivers: REQ-013, REQ-009 SC-1

#64 is 1 commit behind main, #69 (stacked on #64) 1, #70 3. Since #72, check:dth-glossary is core's glossary-validate.ts, so re-run every check #64 and #69 claim. #69's pins can move now: core#412 and smart-ra#198 merged on 2026-10-31. Move dpi-h-ra from 6c60711 to smart-ra main and list which linked elements changed (a re-pin is a review step). No content edits; no merges.

## Done when
- [ ] REQ-013/SC-1 (test) #64, #69, #70 are 0 commits behind main and pass the full checks
- [ ] REQ-013/SC-2 (inspection) dpi-h-ra pin is current smart-ra main, with a note of changed linked elements
- [ ] REQ-009/SC-1 (test) check:dth-glossary passes on #69 with core and smart-ra past core#412 and smart-ra#198
