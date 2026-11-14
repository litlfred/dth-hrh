import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:update-employment",
  title: "Update employment or place of practice",
  personas: ["pers:health-worker", "pers:employer-hr-manager", "pers:system-hris", "pers:system-facility-registry"],
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed"},"relatedBlocks":["bp:hrh-bp-04-update-employment-and-deployment","dt:hrh-dt-02-lifecycle-status-transition"]},
});
