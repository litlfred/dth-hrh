---
# dth-hrh-s8rm
$schema: bean/1.0.0
title: 'dth-hrh ArchiMate overlay'
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

Delivers: REQ-008

Follow the dth-phc#3 / dth-sfp#8 pattern (scripts/archimate/extract_overlay.py, archimate/README.md, overlay tags). Never add elements to smart-ra; a real conflict is an issue on smart-ra and on dth-hrh.

## Done when
- [ ] REQ-008/SC-1 (test) check:dth-glossary validates the overlay tags
- [ ] REQ-008/SC-2 (inspection) no new element is added to smart-ra; conflicts are filed on both repos
