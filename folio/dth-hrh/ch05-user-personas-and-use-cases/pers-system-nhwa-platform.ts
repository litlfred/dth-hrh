import { persona } from "../../schema/dak";

export default persona({
  label: "pers:system-nhwa-platform",
  title: "NHWA platform",
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed","issue":"litlfred/dth-hrh#47"},"roleId":"HRH-R-13","personaType":"system","smartBaseGenericPersona":"System.HMIS","bpmnLanes":[{"process":"bp:hrh-bp-05-workforce-analytics-and-nhwa-reporting","processId":"HRH_BP_05","laneId":"Lane_BP05_NHWAPlatform","bpmnFile":"folio/dth-hrh/ch05-user-personas-and-use-cases/bp-hrh-bp-05-workforce-analytics-and-nhwa-reporting.bpmn"}],"archimate":{"model":"smart-ra 0.2.0","basis":"agent-proposed by name, for working-group review (dth-hrh#47)","elements":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-bbd18f65be45490fbbaf02346511ae5e.jsonld","name":"Reporting Module","type":"ApplicationFunction"},{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3fd92d497ca040c8a436f355c0b68770.jsonld","name":"Analytics & Reporting Platform","type":"ApplicationComponent"}],"views":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld","name":"ALL High Level - Health Workforce"}]},"glossaryTerms":["https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/national-health-workforce-accounts","https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/application-component"],"relatedBlocks":["bp:hrh-bp-05-workforce-analytics-and-nhwa-reporting"]},
});
