import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:nhwa-m1-entry-date",
  title: "Date of entry into the active workforce",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-031-1-09-annual-inflows-of-health-workers"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "nhwa-m1", "supportsIndicators": ["1-09"]},
});
