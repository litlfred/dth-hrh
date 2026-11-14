import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:nhwa-m2-training-institution",
  title: "Training institution and year of graduation",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-039-2-04-ratio-of-graduates-to-stock"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "nhwa-m2", "supportsIndicators": ["2-04"], "glossary": [{"iri": "https://litlfred.github.io/dth-hrh/v0/ns/glossary/dth-hrh-data-elements/training-institution-and-year-of-graduation", "name": "Training institution and year of graduation"}]},
});
