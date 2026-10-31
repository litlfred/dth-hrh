import { persona } from "../../schema/dak";

export default persona({
  label: "pers:system-facility-registry",
  title: "Facility registry",
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed","issue":"litlfred/dth-hrh#47"},"roleId":"HRH-R-11","personaType":"system","bpmnLanes":[{"process":"bp:hrh-bp-04-update-employment-and-deployment","processId":"HRH_BP_04","laneId":"Lane_BP04_FacilityRegistry","bpmnFile":"folio/dth-hrh/ch05-user-personas-and-use-cases/bp-hrh-bp-04-update-employment-and-deployment.bpmn"}],"archimate":{"model":"smart-ra 0.2.0","basis":"agent-proposed by name, for working-group review (dth-hrh#47)","elements":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-4e0767822dcf46409554156a133fbc67.jsonld","name":"DPI-H: Facility Registry","type":"ApplicationComponent"},{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-5f6d9b9678824b37b95952735420ae8d.jsonld","name":"Facility registry","type":"ApplicationComponent"}],"views":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld","name":"ALL High Level - Health Workforce"}]},"glossaryTerms":["https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/registry","https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/application-component"],"relatedBlocks":["bp:hrh-bp-04-update-employment-and-deployment"]},
});
