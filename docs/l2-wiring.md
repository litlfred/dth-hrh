# Wiring a DTH to smart-ra (L2 pilot)

dth-hrh is the pilot for Digital Transformation Handbooks that depend on
[smart-ra](https://github.com/litlfred/smart-ra) (owner decision 2026-10-31,
option A; dth-hrh#47). dth-phc, dth-sc, dth-pc and dth-sfp copy these steps.
The general skill for this is smart-base's `dth-l1-to-l2-ingest`
(smart-base#249); this page is the worked example it can point to.

## 1. Mount smart-ra, two directories only

smart-ra's instance is named **`dpi-h-ra`**, not smart-ra. Mount only its
`glossary` and `archimate` directories, and skip the layers it shares with
the DTH, so the DTH's own pins win:

```sh
echo "<where the owner said yes>" | bun run cat mount:remote \
  --seed dpi-h-ra=litlfred/smart-ra@<40-char sha> --consent-by <owner>
bun run cat mount:remote --choose dpi-h-ra --directories glossary,archimate
```

Then, in `index.config.json`, add `"<layer>": { "skip": true }` under the
`dpi-h-ra` entry's `overrides` for every layer the DTH already mounts
(who-iris, smart-base, fhir-harness, folio-assistant-core, cat-harness,
cat-harness-tools, bootstrap, bootstrap-tools). Without the skips the plan
mounts nothing. Then `bun run cat mount:remote` writes `index.lock.json`, and
`dpi-h-ra/` is gitignored.

## 2. Declare the dependency

In `<dth>.json`, `needs` becomes `["smart-base", "dpi-h-ra"]`. Keep
smart-base: the DAK block kinds (persona, user scenario, business process,
decision table, requirements, data elements) reach a DTH through smart-base's
`content-adapters/dak.json`.

## 3. Glossary links

A DTH term links to a smart-ra concept with a SKOS match on the term in the
DTH's consolidated scheme, never by copying a definition:

```json
"broadMatch": ["https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/registry"]
```

The namespace is `instanceNs` of the mounted declaration. Use `broadMatch`
when the smart-ra concept is wider (the RA's Registry covers facility,
product and workforce registries), `exactMatch` only when both definitions
are adopted and the same. Both sides are still candidates, so a match is a
proposal for the working group. If the scheme is generated (dth-hrh's
`build_glossary.py`), the generator must keep the matches on a re-run.

## 4. ArchiMate links

A narrative, persona, business-process, decision-table or requirement block
that names an architecture element carries the element's IRI in its
manifest's `meta.archimate`:

```json
"archimate": {
  "model": "smart-ra 0.2.0",
  "basis": "agent-proposed by name, for working-group review (dth-hrh#47)",
  "elements": [{ "iri": "https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-….jsonld", "name": "…" }],
  "views": [{ "iri": "https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-….jsonld", "name": "…" }]
}
```

IRIs use Archi's own ids, which stay stable across model versions. Then
`bun run kg:blocks` so the block JSON-LD carries the links.

## 5. Structured content: Personas, BPMN 2.0 processes, and DMN decision tables

- **Personas (`smart-base:Persona`):** The 13 Chapter 5 personas (`HRH-R-01`
  to `HRH-R-13`) and 2 Chapter 6 governance/stewardship personas
  (`pers-registry-governance-body` / `HRH-R-14`, and
  `pers-registry-custodian` / `HRH-R-15`) link via `uses` and `meta` to:
  1. their BPMN 2.0 swimlane(s) (`meta.bpmnLanes`),
  2. a `dpi-h-ra` ArchiMate Business Role, Business Actor or Application
     Component (`meta.archimate.elements`), and
  3. a glossary term in `dth-hrh` or `dpi-h-ra` (`meta.glossaryTerms`).
- **BPMN 2.0 business processes (`smart-base:BusinessProcess`):** Each process
  (`bp-hrh-bp-01-lifecycle-maintenance` in Chapter 4;
  `bp-hrh-bp-02-register-and-license-graduate`,
  `bp-hrh-bp-03-renew-licence-and-verify-status`,
  `bp-hrh-bp-04-update-employment-and-deployment`, and
  `bp-hrh-bp-05-workforce-analytics-and-nhwa-reporting` in Chapter 5; and
  `bp-hrh-bp-06-governance-and-stewardship-review` in Chapter 6) has a `.bpmn`
  companion with one `<bpmn:lane partitionElementRef="pers:…">` per role, a
  rendered SVG in `folio/dth-hrh/media/bp-….svg`, and a structured step table
  in its `.md` companion.
- **DMN decision tables (`smart-base:DecisionTable`):** The Chapter 7 rules
  (`dt-hrh-dt-01-registration-eligibility` in Section 7.1,
  `dt-hrh-dt-02-lifecycle-status-transition` in Section 7.3, and
  `dt-hrh-dt-03-verification-and-access-response` in Section 7.4) follow
  `cat-harness` `dmn-authoring` (`hitPolicy="FIRST"`, supported FEEL subset,
  explicit third-state handling, and catch-all rule), cite their source
  blocks, and use only qualitative states from the source text.

## 6. Check

`bun run check:dth-glossary` checks the glossary schema, every `related`
link, every SKOS match into `dpi-h-ra`, every `meta.archimate` and
`meta.glossaryTerms` IRI against the mounted model and glossaries, every
persona-to-lane binding, every BPMN process (`dak-companion-present`,
`dak-bpmn-has-process`), and every DMN decision table
(`dak-dmn-has-decision-table`, `loadDecisionTable`, `unreadableExpressions`).
