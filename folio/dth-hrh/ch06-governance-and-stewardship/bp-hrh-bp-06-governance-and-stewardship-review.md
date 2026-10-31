Governs inter-institutional data-sharing agreements and access tiers through the multi-stakeholder steering committee, enforces routine data quality and deduplication audits through the registry custodian, and resolves health worker record-correction requests with the authoritative source.

![Registry governance, data-sharing approval and record correction (HRH-BP-06)](media/bp-hrh-bp-06-governance-and-stewardship-review.svg)

**Swimlanes (one lane per role):**

- `Lane_BP06_GovernanceBody` — **Registry governance body (steering committee)** (`pers:registry-governance-body`)
- `Lane_BP06_HealthWorker` — **Health worker** (`pers:health-worker`)
- `Lane_BP06_Custodian` — **Registry operator and data custodian** (`pers:registry-custodian`)
- `Lane_BP06_RegistrationOfficer` — **Registration officer (regulatory body)** (`pers:registration-officer`)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP06_01` | `pers:registry-governance-body` | Review and approve inter-institutional data-sharing agreements, field-level authoritative source matrix, and tiered disclosure policy. | `prose:ch06-institutions`, `prose:ch06-legal-foundations`, `dt:hrh-dt-03-verification-and-access-response` | 6.1, 6.2, 12.1 |
| `Task_BP06_02` | `pers:registry-custodian` | Enforce role-based access rules (`nfreq:NFR-01`), maintain provenance and audit logs (`freq:FR-REC-03`), and run periodic deduplication and completeness reviews (`freq:FR-ID-02`). | `freq:FR-ID-02`, `freq:FR-REC-03`, `nfreq:NFR-01` | 6.3, 7.1, 7.2, 12.2 |
| `Task_BP06_03` | `pers:health-worker` | Inspect own registry record and submit a request to correct inaccurate or outdated attributes. | `prose:ch06-data-stewardship` | 5.1, 6.3, 12.3 |
| `Task_BP06_04` | `pers:registry-custodian` | Log the correction request and route it to the designated authoritative source custodian for the disputed data element. | `prose:ch06-data-stewardship`, `freq:FR-REC-03` | 6.3, 7.2 |
| `Task_BP06_05` | `pers:registration-officer` | Verify primary-source evidence and update the authoritative registration or qualification field with full audit trail. | `freq:FR-REC-01`, `freq:FR-REC-03` | 6.3, 7.2, 12.3 |
| `Task_BP06_06` | `pers:registry-custodian` | Record decision rationale when a change cannot be substantiated and notify the health worker of the outcome and appeal channel. | `prose:ch06-data-stewardship`, `freq:FR-REC-03` | 6.3, 12.3 |

*ArchiMate (dpi-h-ra 0.2.0):* [Owner](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-99b92fe529e94fcd8ceac04cb16aefd7.jsonld) (`BusinessRole`); [Logical Information Model Maintainer](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8b80d28cdd48418480cee878af495ac3.jsonld) (`BusinessRole`); [Ministry of Health](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-1c5c0bc9234e4282b654dbc71b9da706.jsonld) (`BusinessRole`); [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (`BusinessRole`); [Metadata Registry Governance](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-f7a5524bbac84f1a9cf424754750819d.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:stewardship`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/stewardship), [`dth-hrh:health-workforce-registry`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-registry), [`dpi-h-ra:data-governance`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/data-governance), [`dpi-h-ra:repository`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/repository).
