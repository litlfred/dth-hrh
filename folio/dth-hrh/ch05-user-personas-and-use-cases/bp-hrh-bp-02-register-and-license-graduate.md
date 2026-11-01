Registers and licenses a newly graduated health worker by verifying pre-service qualification with the training institution, checking foundational identity and deduplication rules, and issuing an authoritative registration and licence to practise.

![Register and license a new graduate (HRH-BP-02)](media/bp-hrh-bp-02-register-and-license-graduate.svg)

**Swimlanes (one lane per role):**

- `Lane_BP02_HealthWorker` — **Health worker** ([`pers:health-worker`](#pers:health-worker))
- `Lane_BP02_RegistrationOfficer` — **Registration officer (regulatory body)** ([`pers:registration-officer`](#pers:registration-officer))
- `Lane_BP02_TrainingRegistrar` — **Training institution registrar** ([`pers:training-institution-registrar`](#pers:training-institution-registrar))
- `Lane_BP02_NationalId` — **National identity system** ([`pers:system-national-id`](#pers:system-national-id))

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP02_01` | [`pers:health-worker`](#pers:health-worker) | Submit application for initial registration and licence to practise with identity and training details. | [`scen:register-and-license-new-graduate`](#scen:register-and-license-new-graduate) | 5.2, 20.1 |
| `Task_BP02_02` | [`pers:training-institution-registrar`](#pers:training-institution-registrar) | Confirm graduation and awarded qualification directly as primary source. | [`freq:FR-REC-01`](#freq:FR-REC-01) | 5.2, 13.2, 20.1 |
| `Task_BP02_03` | [`pers:system-national-id`](#pers:system-national-id) | Verify national identity number where available and lawful. | [`freq:FR-ID-01`](#freq:FR-ID-01) | 7.1, 13.2 |
| `Task_BP02_04` | [`pers:registration-officer`](#pers:registration-officer) | Run deduplication check ([`freq:FR-ID-02`](#freq:FR-ID-02)) and evaluate registration eligibility rules (`dt:hrh-dt-01-registration-eligibility`). | [`freq:FR-ID-01`](#freq:FR-ID-01), [`freq:FR-ID-02`](#freq:FR-ID-02), `dt:hrh-dt-01-registration-eligibility` | 7.1, 7.2 |
| `Task_BP02_05` | [`pers:registration-officer`](#pers:registration-officer) | Create or link persistent HWR identifier, record registration and active licence, and issue verifiable credential. | [`freq:FR-REC-01`](#freq:FR-REC-01), [`freq:FR-REC-02`](#freq:FR-REC-02), [`freq:FR-VER-03`](#freq:FR-VER-03) | 7.1, 7.2, 7.4 |
| `Task_BP02_06` | [`pers:registration-officer`](#pers:registration-officer) | Hold application for manual duplicate resolution or notify applicant of missing attestation/ineligibility. | [`freq:FR-ID-02`](#freq:FR-ID-02), `dt:hrh-dt-01-registration-eligibility` | 7.1 |
| `Task_BP02_07` | [`pers:health-worker`](#pers:health-worker) | Receive registration certificate and portable verifiable licence credential. | [`freq:FR-VER-03`](#freq:FR-VER-03) | 5.2, 20.1 |

*ArchiMate (dpi-h-ra 0.2.0):* [Academic & Training Institutions](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-82fc8a35ade94ff3a02acc9194490fc8.jsonld) (`BusinessRole`); [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (`BusinessRole`); [National ID Government Provider](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-10058e61afa048128fdb46dc0bcb884c.jsonld) (`BusinessRole`); [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (`ApplicationFunction`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:registration`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/registration), [`dth-hrh:licensing`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [`dth-hrh:certification`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/certification), [`dth-hrh:education-and-training-institution`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/education-and-training-institution), [`dth-hrh:professional-council`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/professional-council).
