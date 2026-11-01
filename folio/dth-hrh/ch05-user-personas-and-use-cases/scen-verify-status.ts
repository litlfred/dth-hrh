import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:verify-status",
  title: "Verify a health worker's status",
  personas: ["pers:employer-hr-manager", "pers:member-of-public", "pers:system-emr", "pers:registration-officer"],
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed"},"relatedBlocks":["bp:hrh-bp-03-renew-licence-and-verify-status","dt:hrh-dt-03-verification-and-access-response"]},
});
