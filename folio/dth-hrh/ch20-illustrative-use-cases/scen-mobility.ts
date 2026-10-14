import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:mobility",
  title: "Mobility",
  personas: ["pers:health-worker", "pers:registration-officer", "pers:workforce-planner"],
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}},
});
