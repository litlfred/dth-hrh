import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:register-and-license-new-graduate",
  title: "Register and license a new graduate",
  personas: ["pers:health-worker", "pers:training-institution-registrar", "pers:registration-officer"],
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}},
});
