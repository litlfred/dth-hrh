import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:verification",
  title: "Verification",
  personas: ["pers:employer-hr-manager", "pers:member-of-public", "pers:system-emr", "pers:health-worker"],
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}},
});
