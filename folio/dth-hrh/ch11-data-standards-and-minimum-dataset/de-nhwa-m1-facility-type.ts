import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:nhwa-m1-facility-type",
  title: "Facility type",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-028-1-06-health-worker-distribution-by-facility-type"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "nhwa-m1", "supportsIndicators": ["1-06"], "glossary": [{"iri": "https://litlfred.github.io/dth-hrh/v0/ns/glossary/dth-hrh-data-elements/facility-type", "name": "Facility type"}]},
});
