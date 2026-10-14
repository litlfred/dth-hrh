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
<!-- folio:toc:end -->

## Workflows

<!-- folio:workflows:begin -->
<!-- folio:workflows:end -->
