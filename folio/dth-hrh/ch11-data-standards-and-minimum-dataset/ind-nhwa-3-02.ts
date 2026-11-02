import { indicator } from "../../schema/dak";

export default indicator({
  label: "ind:nhwa-3-02",
  title: "3-02 Entry-level wages and salaries",
  uses: [],
  meta: {"indicatorId": "3-02", "module": "Module 3: Finance and expenditures", "abbreviatedName": "Entry-level wages and salaries", "name": "Average entry-level wage and salary excluding social contributions", "disaggregation": "By occupation, by occupation and public/private", "definition": "Average wage or salary in US$ received by health workers when entering the active health\nlabour market, excluding social contributions.\nDisaggregation by public vs private source is suggested, although often only the source from\nthe public sector is available.", "glossary": "Active health worker; Occupation; Remuneration; Wage and salary", "reportingFrequency": "Annual", "reportingFrameworks": "Global Strategic Directions for Nursing and Midwifery (SDNM)", "dataSources": "Ministry of Health records; Ministry of Finance records; Payroll data; Income tax data; General labour force surveys; Specific health worker surveys", "furtherInformation": "(6, 54, 58, 61)", "dataElements": "de:cde-occupation; de:nhwa-m3-employer-sector; de:nhwa-m3-entry-salary-grade", "gaps": "numerator; denominator", "programIndicatorId": "NHWA.3-02", "source": {"library": "who-iris:9789240081291-eng", "node": "library/9789240081291-eng/blocks/indicator-sec-045-01", "pages": "77", "method": "indicator-extraction", "verbatim": true}, "status": "draft"},
});
