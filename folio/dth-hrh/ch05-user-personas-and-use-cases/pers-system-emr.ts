import { persona } from "../../schema/dak";

export default persona({
  label: "pers:system-emr",
  title: "Electronic medical record",
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed","issue":"litlfred/dth-hrh#47"},"roleId":"HRH-R-10","personaType":"system","smartBaseGenericPersona":"System.EMR","bpmnLanes":[{"process":"bp:hrh-bp-03-renew-licence-and-verify-status","processId":"HRH_BP_03","laneId":"Lane_BP03_EMR","bpmnFile":"folio/dth-hrh/ch05-user-personas-and-use-cases/bp-hrh-bp-03-renew-licence-and-verify-status.bpmn"}],"archimate":{"model":"smart-ra 0.2.0","basis":"agent-proposed by name, for working-group review (dth-hrh#47)","elements":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bd1011d76c843fa860255f00a6aa68f.jsonld","name":"Vendor EHR Product","type":"ApplicationComponent"}],"views":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld","name":"ALL High Level - Health Workforce"}]},"glossaryTerms":["https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/point-of-service-applications","https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/application-component"],"relatedBlocks":["bp:hrh-bp-03-renew-licence-and-verify-status"]},
});
