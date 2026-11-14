import { persona } from "../../schema/dak";

export default persona({
  label: "pers:workforce-planner",
  title: "Workforce planner",
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed","issue":"litlfred/dth-hrh#47"},"roleId":"HRH-R-05","personaType":"person","smartBaseGenericPersona":"HealthSystemManager; DataManager","bpmnLanes":[{"process":"bp:hrh-bp-05-workforce-analytics-and-nhwa-reporting","processId":"HRH_BP_05","laneId":"Lane_BP05_WorkforcePlanner","bpmnFile":"folio/dth-hrh/ch05-user-personas-and-use-cases/bp-hrh-bp-05-workforce-analytics-and-nhwa-reporting.bpmn"}],"archimate":{"model":"smart-ra 0.2.0","basis":"agent-proposed by name, for working-group review (dth-hrh#47)","elements":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-1c5c0bc9234e4282b654dbc71b9da706.jsonld","name":"Ministry of Health","type":"BusinessRole"},{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8852987c90c84071ae92ad3621548adf.jsonld","name":"Workforce Data Analytics","type":"ApplicationFunction"}],"views":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld","name":"ALL High Level - Health Workforce"}]},"glossaryTerms":["https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-planning","https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/national-health-workforce-accounts"],"relatedBlocks":["bp:hrh-bp-05-workforce-analytics-and-nhwa-reporting"]},
});
