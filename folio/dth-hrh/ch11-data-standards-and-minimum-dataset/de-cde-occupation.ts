import { dataElement } from "../../schema/dak";

export default dataElement({
  label: "de:cde-occupation",
  title: "Occupation",
  uses: [],
  meta: {"source": {"library": "who-iris:9789240081291-eng", "sections": ["sec-023-1-01-health-worker-density", "sec-024-1-02-health-worker-density-at-subnational-level", "sec-025-1-03-health-worker-distribution-by-age-group", "sec-026-1-04-health-worker-distribution-by-sex", "sec-027-1-05-health-worker-distribution-by-facility-owne", "sec-028-1-06-health-worker-distribution-by-facility-type", "sec-029-1-07-health-worker-distribution-by-place-of-birt", "sec-030-1-08-health-worker-distribution-by-place-of-trai", "sec-031-1-09-annual-inflows-of-health-workers", "sec-032-1-10-annual-outflows-of-health-workers", "sec-034-1-12-health-worker-distribution-by-type-of-contr", "sec-045-3-02-entry-level-wages-and-salaries"], "method": "nhwa-indicator-disaggregation"}, "definitionStatus": "working", "glossarySource": "twg-glossary-2026-09-29", "elementSet": "cde", "supportsIndicators": ["1-01", "1-02", "1-03", "1-04", "1-05", "1-06", "1-07", "1-08", "1-09", "1-10", "1-12", "3-02"]},
});
