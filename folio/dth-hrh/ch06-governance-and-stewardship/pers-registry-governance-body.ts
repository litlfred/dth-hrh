import { persona } from "../../schema/dak";

export default persona({
  label: "pers:registry-governance-body",
  title: "Registry governance body (steering committee)",
  uses: [],
  meta: {"source":{"library":"twg-outline-2026-10-02","file":"library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md","method":"outline-seed","issue":"litlfred/dth-hrh#47"},"roleId":"HRH-R-14","personaType":"person","smartBaseGenericPersona":"HealthSystemManager","bpmnLanes":[{"process":"bp:hrh-bp-06-governance-and-stewardship-review","processId":"HRH_BP_06","laneId":"Lane_BP06_GovernanceBody","bpmnFile":"folio/dth-hrh/ch06-governance-and-stewardship/bp-hrh-bp-06-governance-and-stewardship-review.bpmn"}],"archimate":{"model":"smart-ra 0.2.0","basis":"agent-proposed by name, for working-group review (dth-hrh#47)","elements":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-99b92fe529e94fcd8ceac04cb16aefd7.jsonld","name":"Owner","type":"BusinessRole"},{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-1c5c0bc9234e4282b654dbc71b9da706.jsonld","name":"Ministry of Health","type":"BusinessRole"}],"views":[{"iri":"https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-f7a5524bbac84f1a9cf424754750819d.jsonld","name":"Metadata Registry Governance"}]},"glossaryTerms":["https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/stewardship","https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/data-governance"],"relatedBlocks":["bp:hrh-bp-06-governance-and-stewardship-review"]},
});
