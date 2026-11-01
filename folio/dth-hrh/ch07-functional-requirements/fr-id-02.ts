import { functionalRequirement } from "../../schema/dak";

export default functionalRequirement({
  label: "freq:FR-ID-02",
  title: "Search, match and merge duplicate records across source systems.",
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}, "requirementId": "FR-ID-02", "priority": "to-be-prioritized", "inspirationalReferences": {"source": "who-iris library/9789241549226-eng (WHO, Human resources for health information system: minimum data set for health workforce registry, 2015), system functional requirements only (who-iris#167)", "role": "inspirational, non-definitional: contributes to a definition, does not define it; the data set itself is not used (owner, 2026-11-01 23:42Z)", "basis": "agent-proposed by reading, for working-group review (dth-hrh#47)", "references": [{"iri": "https://litlfred.github.io/folio/library/9789241549226-eng/blocks/functional-requirement-sec-031-01", "item": "sec-031-01", "text": "In addition, a clear policy articulating rules-based algorithms for data validation and de-duplication must be in place. Necessary and sufficient data access controls must be instituted based on an agreed policy to address data privacy, security, confidentiality and meaningful use."}]}},
});
