# WHO SMART Guidelines — Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries

[![License: CC BY-IGO 3.0](https://licensebuttons.net/l/by-nc/3.0/igo/80x15.png)](https://creativecommons.org/licenses/by/3.0/igo)

An **L1** WHO SMART Guidelines document (a Digital Transformation Handbook, DTH)
on health workforce registries and planning, held as an editable working
document with its glossary and L1 structured assets (generic personas, user
scenarios, functional and non-functional requirements, minimum data set
elements). Built on the [smart-base](https://github.com/litlfred/smart-base)
harness and set up like [smart-ra](https://github.com/litlfred/smart-ra).

**Stage:** working draft, seeded from the TWG manuscript outline (2 October 2026)
and the TWG glossary workbook (29 September 2026).

- **Read the working document:** https://litlfred.github.io/dth-hrh/en/dth-hrh/ (once published)
- **Working-group comments dashboard:** https://litlfred.github.io/dth-hrh/en/folio-assistant-core/public-comments/folio/dth-hrh/ (once published)
- **Glossary** (machine-readable SKOS): [`glossary/`](glossary/); in the document as Annex 9

## Working-group review

There is no public comment period yet. The internal authoring and working
group's comments use the same process as the smart-ra public review, at a
smaller scale. The record is [`review/wg-comment/`](review/wg-comment/).

**Comment** on a block of the document (the *feedback* link beside it), or in
a GitHub issue. **Recommend or decide** in a conversation comment on any issue
or pull request:

```
pc: PC-0042
recommend: accepted-modified

Why, in as many lines as needed.
```

Use `decide:` instead of `recommend:` for the editor's decision. The codes are
`accepted`, `accepted-modified`, `not-accepted`, `noted` and `deferred`; every
code except `accepted` needs a reason. A recommendation is recorded from any
collaborator on this repository, and a decision from its owner; to change who
counts, add `committee` or `editors` login lists to
[`review/wg-comment/config.json`](review/wg-comment/config.json).

**Changes** are made on feature branches. Each answers one or more comments
grouped as a change set, and each branch gets a preview at
`https://litlfred.github.io/dth-hrh/STAGING/<branch>/`.

**Glossary terms** are reviewed the same way: each term in Annex 9 lists its
candidate definitions with sources. Comment on the term to prefer one, or to
propose an edited or new definition. When the group agrees, the adopted
definition is written into [`glossary/dth-hrh.glossary.json`](glossary/dth-hrh.glossary.json).

## Working on this repository

See [`AGENTS.md`](AGENTS.md). The platform is remote-mounted from the SHAs in
`index.lock.json`; the session-start hook mounts it.

This work is published under a Creative Commons IGO [licence](LICENSE.md).

<!-- Regions between a `folio:*:begin` / `folio:*:end` pair are generated:
     refresh them with `readme_sync` (MCP) or `bun run cat readme:sync` from the
     platform checkout. Edits inside a pair are overwritten; everything else in
     this file is yours and is never touched. `bun run cat readme:sections` lists
     the sections you can add. -->

## Contents

<!-- folio:toc:begin -->

### Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries

[`folio/dth-hrh/`](folio/dth-hrh/)

| # | Chapter | Source | PDF |
|---|---------|--------|-----|
| 0 | About this draft | [`about-this-draft/`](folio/dth-hrh/about-this-draft/) | — |
| 1 | Chapter 1. Why Digital Health Workforce Registries Matter | [`ch01-why-digital-health-workforce-registries/`](folio/dth-hrh/ch01-why-digital-health-workforce-registries/) | — |
| 2 | Chapter 2. Scope and Boundaries | [`ch02-scope-and-boundaries/`](folio/dth-hrh/ch02-scope-and-boundaries/) | — |
| 3 | Chapter 3. Digital Transformation Approach | [`ch03-digital-transformation-approach/`](folio/dth-hrh/ch03-digital-transformation-approach/) | — |
| 4 | Chapter 4. Purpose and Role of a Registry | [`ch04-purpose-and-role-of-a-registry/`](folio/dth-hrh/ch04-purpose-and-role-of-a-registry/) | — |
| 5 | Chapter 5. User Personas and Use Cases | [`ch05-user-personas-and-use-cases/`](folio/dth-hrh/ch05-user-personas-and-use-cases/) | — |
| 6 | Chapter 6. Governance and Stewardship | [`ch06-governance-and-stewardship/`](folio/dth-hrh/ch06-governance-and-stewardship/) | — |
| 7 | Chapter 7. Functional Requirements | [`ch07-functional-requirements/`](folio/dth-hrh/ch07-functional-requirements/) | — |
| 8 | Chapter 8. Digital Architecture Principles | [`ch08-digital-architecture-principles/`](folio/dth-hrh/ch08-digital-architecture-principles/) | — |
| 9 | Chapter 9. Registry within Ecosystem | [`ch09-registry-within-ecosystem/`](folio/dth-hrh/ch09-registry-within-ecosystem/) | — |
| 10 | Chapter 10. Interoperability | [`ch10-interoperability/`](folio/dth-hrh/ch10-interoperability/) | — |
| 11 | Chapter 11. Data Standards and Minimum Dataset | [`ch11-data-standards-and-minimum-dataset/`](folio/dth-hrh/ch11-data-standards-and-minimum-dataset/) | — |
| 12 | Chapter 12. Privacy, Security and Trust | [`ch12-privacy-security-and-trust/`](folio/dth-hrh/ch12-privacy-security-and-trust/) | — |
| 13 | Chapter 13. Data Quality Management | [`ch13-data-quality-management/`](folio/dth-hrh/ch13-data-quality-management/) | — |
| 14 | Chapter 14. Preparing for Transformation | [`ch14-preparing-for-transformation/`](folio/dth-hrh/ch14-preparing-for-transformation/) | — |
| 15 | Chapter 15. Business Process Redesign | [`ch15-business-process-redesign/`](folio/dth-hrh/ch15-business-process-redesign/) | — |
| 16 | Chapter 16. Planning and Procurement | [`ch16-planning-and-procurement/`](folio/dth-hrh/ch16-planning-and-procurement/) | — |
| 17 | Chapter 17. Implementation and Deployment | [`ch17-implementation-and-deployment/`](folio/dth-hrh/ch17-implementation-and-deployment/) | — |
| 18 | Chapter 18. Change Management | [`ch18-change-management/`](folio/dth-hrh/ch18-change-management/) | — |
| 19 | Chapter 19. Monitoring and Continuous Improvement | [`ch19-monitoring-and-continuous-improvement/`](folio/dth-hrh/ch19-monitoring-and-continuous-improvement/) | — |
| 20 | Chapter 20. Illustrative Use Cases | [`ch20-illustrative-use-cases/`](folio/dth-hrh/ch20-illustrative-use-cases/) | — |
| 21 | Chapter 21. Country Case Studies | [`ch21-country-case-studies/`](folio/dth-hrh/ch21-country-case-studies/) | — |
| 22 | Chapter 22. Tools and Templates | [`ch22-tools-and-templates/`](folio/dth-hrh/ch22-tools-and-templates/) | — |
| 23 | Annexes | [`annexes/`](folio/dth-hrh/annexes/) | — |
| 24 | Annex 9. Glossary | [`glossary/`](folio/dth-hrh/glossary/) | — |
| 25 | References | [`references/`](folio/dth-hrh/references/) | — |

> PDF links point at the published build on the `gh-pages` branch through github.com, so they resolve for anyone with access to this repository — public or private — and GitHub renders them inline. A chapter with no published PDF shows `—`.

<!-- folio:toc:end -->

## Workflows

<!-- folio:workflows:begin -->

| Workflow | Purpose |
|----------|---------|
| `qa-sweep-nightly.yml` | QA sweep nightly |
| `qa-sweep.yml` | QA sweep (all integration watchers) |
| `section-title-audit.yml` | Section-title + structure audit |
| `site-publish.yml` | Site publish (by hand) |
| `wg-comment-check.yml` | Working-group comment — change-set records and their issues agree |
| `wg-comment.yml` | Working-group comment — tags, change-sets and their issues |

<!-- folio:workflows:end -->
