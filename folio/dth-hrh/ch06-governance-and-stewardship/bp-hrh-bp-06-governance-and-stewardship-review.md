Governs inter-institutional data-sharing agreements and access tiers through the multi-stakeholder steering committee, enforces routine data quality and deduplication audits through the registry custodian, and resolves health worker record-correction requests with the authoritative source.

![Registry governance, data-sharing approval and record correction (HRH-BP-06)](media/bp-hrh-bp-06-governance-and-stewardship-review.svg)

**Swimlanes (one lane per role):**

- **Registry governance body (steering committee)**
- [**Health worker**](#pers:health-worker)
- **Registry operator and data custodian**
- [**Registration officer (regulatory body)**](#pers:registration-officer)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP06_01` | Registry governance body (steering committee) | Review and approve inter-institutional data-sharing agreements, field-level authoritative source matrix, and tiered disclosure policy. | [Institutions](#prose:ch06-institutions), [Legal foundations](#prose:ch06-legal-foundations), Verification service and tiered disclosure response (HRH-DT-03) | 6.1, 6.2, 12.1 |
| `Task_BP06_02` | Registry operator and data custodian | Enforce role-based access rules ([NFR-01](#nfreq:NFR-01)), maintain provenance and audit logs ([FR-REC-03](#freq:FR-REC-03)), and run periodic deduplication and completeness reviews ([FR-ID-02](#freq:FR-ID-02)). | [FR-ID-02](#freq:FR-ID-02), [FR-REC-03](#freq:FR-REC-03), [NFR-01](#nfreq:NFR-01) | 6.3, 7.1, 7.2, 12.2 |
| `Task_BP06_03` | [Health worker](#pers:health-worker) | Inspect own registry record and submit a request to correct inaccurate or outdated attributes. | [Data stewardship](#prose:ch06-data-stewardship) | 5.1, 6.3, 12.3 |
| `Task_BP06_04` | Registry operator and data custodian | Log the correction request and route it to the designated authoritative source custodian for the disputed data element. | [Data stewardship](#prose:ch06-data-stewardship), [FR-REC-03](#freq:FR-REC-03) | 6.3, 7.2 |
| `Task_BP06_05` | [Registration officer (regulatory body)](#pers:registration-officer) | Verify primary-source evidence and update the authoritative registration or qualification field with full audit trail. | [FR-REC-01](#freq:FR-REC-01), [FR-REC-03](#freq:FR-REC-03) | 6.3, 7.2, 12.3 |
| `Task_BP06_06` | Registry operator and data custodian | Record decision rationale when a change cannot be substantiated and notify the health worker of the outcome and appeal channel. | [Data stewardship](#prose:ch06-data-stewardship), [FR-REC-03](#freq:FR-REC-03) | 6.3, 12.3 |

*ArchiMate (dpi-h-ra 0.2.0):* [Owner](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-99b92fe529e94fcd8ceac04cb16aefd7.jsonld) (business role); [Logical Information Model Maintainer](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8b80d28cdd48418480cee878af495ac3.jsonld) (business role); [Ministry of Health](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-1c5c0bc9234e4282b654dbc71b9da706.jsonld) (business role); [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (business role); [Metadata Registry Governance](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-f7a5524bbac84f1a9cf424754750819d.jsonld) (view).

*Glossary terms:* [Stewardship](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/stewardship), [Health workforce registry](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-registry), [Data governance](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/data-governance), [Repository](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/repository).
