import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:cde-sex",
  title: "Sex",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-025-1-03-health-worker-distribution-by-age-group", "sec-026-1-04-health-worker-distribution-by-sex", "sec-031-1-09-annual-inflows-of-health-workers", "sec-032-1-10-annual-outflows-of-health-workers", "sec-039-2-04-ratio-of-graduates-to-stock"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "cde", "supportsIndicators": ["1-03", "1-04", "1-09", "1-10", "2-04"], "glossary": [{"iri": "https://litlfred.github.io/dth-hrh/v0/ns/glossary/dth-hrh-data-elements/sex", "name": "Sex"}]},
});
