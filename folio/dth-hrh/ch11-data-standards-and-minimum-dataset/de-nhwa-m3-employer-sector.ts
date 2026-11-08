import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:nhwa-m3-employer-sector",
  title: "Employer sector",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-044-3-01-expenditure-on-compensation-of-health-worke", "sec-045-3-02-entry-level-wages-and-salaries"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "nhwa-m3", "supportsIndicators": ["3-01", "3-02"], "glossary": [{"iri": "https://litlfred.github.io/dth-hrh/v0/ns/glossary/dth-hrh-data-elements/employer-sector", "name": "Employer sector"}]},
});
