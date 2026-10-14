import { table } from "../../schema/builders";

export default table({
  label: "tbl:ch03-diig-mapping",
  caption: "Handbook chapters mapped to the DIIG chapters (proposed, for TWG review)",
  uses: ["fig:diig-phases"],
  meta: {"source": {"diig": "smart-base/methodologies/diig.md", "library": "9789240010567-eng", "method": "authored-draft"}, "status": "proposed"},
});
