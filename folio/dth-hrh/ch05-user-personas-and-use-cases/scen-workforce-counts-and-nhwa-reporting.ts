import { userScenario } from "../../schema/dak";

export default userScenario({
  label: "scen:workforce-counts-and-nhwa-reporting",
  title: "Produce workforce counts and distribution for planning and NHWA reporting",
  personas: ["pers:workforce-planner", "pers:system-nhwa-platform"],
  uses: [],
  meta: {"source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}},
});
