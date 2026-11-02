Registers and licenses a newly graduated health worker by verifying pre-service qualification with the training institution, checking foundational identity and deduplication rules, and issuing an authoritative registration and licence to practise.

![Register and license a new graduate (HRH-BP-02)](media/bp-hrh-bp-02-register-and-license-graduate.svg)

**Swimlanes (one lane per role):**

- [**Health worker**](#pers:health-worker)
- [**Registration officer (regulatory body)**](#pers:registration-officer)
- [**Training institution registrar**](#pers:training-institution-registrar)
- [**National identity system**](#pers:system-national-id)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP02_01` | [Health worker](#pers:health-worker) | Submit application for initial registration and licence to practise with identity and training details. | [Register and license a new graduate](#scen:register-and-license-new-graduate) | 5.2, 20.1 |
| `Task_BP02_02` | [Training institution registrar](#pers:training-institution-registrar) | Confirm graduation and awarded qualification directly as primary source. | [FR-REC-01](#freq:FR-REC-01) | 5.2, 13.2, 20.1 |
| `Task_BP02_03` | [National identity system](#pers:system-national-id) | Verify national identity number where available and lawful. | [FR-ID-01](#freq:FR-ID-01) | 7.1, 13.2 |
| `Task_BP02_04` | [Registration officer (regulatory body)](#pers:registration-officer) | Run deduplication check ([FR-ID-02](#freq:FR-ID-02)) and evaluate registration eligibility rules (Health worker registration eligibility and identifier assignment (HRH-DT-01)). | [FR-ID-01](#freq:FR-ID-01), [FR-ID-02](#freq:FR-ID-02), Health worker registration eligibility and identifier assignment (HRH-DT-01) | 7.1, 7.2 |
| `Task_BP02_05` | [Registration officer (regulatory body)](#pers:registration-officer) | Create or link persistent HWR identifier, record registration and active licence, and issue verifiable credential. | [FR-REC-01](#freq:FR-REC-01), [FR-REC-02](#freq:FR-REC-02), [FR-VER-03](#freq:FR-VER-03) | 7.1, 7.2, 7.4 |
| `Task_BP02_06` | [Registration officer (regulatory body)](#pers:registration-officer) | Hold application for manual duplicate resolution or notify applicant of missing attestation/ineligibility. | [FR-ID-02](#freq:FR-ID-02), Health worker registration eligibility and identifier assignment (HRH-DT-01) | 7.1 |
| `Task_BP02_07` | [Health worker](#pers:health-worker) | Receive registration certificate and portable verifiable licence credential. | [FR-VER-03](#freq:FR-VER-03) | 5.2, 20.1 |

*ArchiMate (dpi-h-ra 0.2.0):* [Academic & Training Institutions](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-82fc8a35ade94ff3a02acc9194490fc8.jsonld) (business role); [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (business role); [National ID Government Provider](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-10058e61afa048128fdb46dc0bcb884c.jsonld) (business role); [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (application function); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (view).

*Glossary terms:* [Registration](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/registration), [Licensing](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [Certification](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/certification), [Education and training institution (Health workforce)](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/education-and-training-institution), [Professional council](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/professional-council).
