import { indicator } from "../../schema/dak";

export default indicator({
  label: "ind:nhwa-1-07",
  title: "1-07 Health worker distribution by place of birth",
  uses: [],
  meta: {"indicatorId": "1-07", "module": "Module 1: Stock and flow", "abbreviatedName": "Health worker distribution by place of birth", "name": "Percentage of active health workers by their place of birth", "numerator": "Number of active health workers by place of birth", "denominator": "Total number of active health workers, defined in headcounts", "disaggregation": "By occupation", "definition": "Percentage of active health workers by their place of birth.\nPlace of birth is defined as national-born or foreign-born.\nThis indicator will capture the information on the health workers coming from abroad.", "glossary": "Active health worker; Occupation; Place of birth", "reportingFrequency": "Annual", "reportingFrameworks": "WHO Global Code of Practice on the International Recruitment of Health Personnel, Global Strategic Directions for Nursing and Midwifery (SDNM)", "dataSources": "Health workforce registry or database; Professional council/chamber/association registers; Health facility data; Population census data", "furtherInformation": "(31, 48, 49, 51, 59, 60)", "dataElements": "de:cde-birth-history; de:cde-occupation; de:cde-citizenship-and-language", "programIndicatorId": "NHWA.1-07", "source": {"library": "who-iris:9789240081291-eng", "node": "library/9789240081291-eng/blocks/indicator-sec-029-01", "pages": "58", "method": "indicator-extraction", "verbatim": true}, "status": "draft"},
});
