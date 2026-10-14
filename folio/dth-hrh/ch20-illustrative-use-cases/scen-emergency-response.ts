import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:emergency-response",
  title: "Emergency response",
  personas: ["pers:emergency-coordinator", "pers:health-worker", "pers:registration-officer"],
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}},
});
