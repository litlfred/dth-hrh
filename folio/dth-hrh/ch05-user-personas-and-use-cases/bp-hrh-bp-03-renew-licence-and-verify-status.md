Renews a health worker's licence to practise based on continuing professional development and good-standing rules, and serves tiered status verification responses to members of the public and point-of-care clinical systems.

![Renew a licence and verify registration status (HRH-BP-03)](media/bp-hrh-bp-03-renew-licence-and-verify-status.svg)

**Swimlanes (one lane per role):**

- [**Health worker**](#pers:health-worker)
- [**Registration officer (regulatory body)**](#pers:registration-officer)
- [**Member of the public**](#pers:member-of-public)
- [**Electronic medical record**](#pers:system-emr)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP03_01` | [Health worker](#pers:health-worker) | Submit licence renewal application and continuing professional development (CPD) completion records. | [Renew a licence](#scen:renew-licence), [FR-LC-01](#freq:FR-LC-01) | 5.2, 7.3 |
| `Task_BP03_02` | [Registration officer (regulatory body)](#pers:registration-officer) | Evaluate CPD completion, licence expiry and disciplinary standing via Health worker lifecycle and licence status transition (HRH-DT-02). | [FR-LC-01](#freq:FR-LC-01), [FR-LC-02](#freq:FR-LC-02), Health worker lifecycle and licence status transition (HRH-DT-02) | 7.3 |
| `Task_BP03_03` | [Registration officer (regulatory body)](#pers:registration-officer) | Record renewed licence validity period and issue updated digital verifiable credential. | [FR-LC-01](#freq:FR-LC-01), [FR-VER-03](#freq:FR-VER-03) | 7.3, 7.4 |
| `Task_BP03_04` | [Registration officer (regulatory body)](#pers:registration-officer) | Transition licence status to lapsed, suspended or revoked with timestamped audit trail and notify connected systems. | [FR-LC-02](#freq:FR-LC-02), Health worker lifecycle and licence status transition (HRH-DT-02) | 7.3, 20.2 |
| `Task_BP03_05` | [Member of the public](#pers:member-of-public) | Check practitioner registration and active licence status on the public lookup channel. | [Verify a health worker's status](#scen:verify-status), [FR-VER-01](#freq:FR-VER-01) | 5.2, 7.4, 12.1 |
| `Task_BP03_06` | [Electronic medical record](#pers:system-emr) | Query the registry via API at the point of care to confirm practitioner identity and prescribing/clinical authorization. | [Verify a health worker's status](#scen:verify-status), [FR-VER-02](#freq:FR-VER-02) | 4.4, 7.4, 20.2 |
| `Task_BP03_07` | [Registration officer (regulatory body)](#pers:registration-officer) | Apply tiered disclosure rules (Verification service and tiered disclosure response (HRH-DT-03)) and return public or authorized status payload. | [FR-VER-01](#freq:FR-VER-01), [FR-VER-02](#freq:FR-VER-02), Verification service and tiered disclosure response (HRH-DT-03) | 7.4, 12.1 |

*ArchiMate (dpi-h-ra 0.2.0):* [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (business role); [Vendor EHR Product](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bd1011d76c843fa860255f00a6aa68f.jsonld) (application component); [Patients](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-a2320dbc07e6450b94f3f0f3e03bb877.jsonld) (business role); [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (application function); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (view).

*Glossary terms:* [Licensing](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [In-service training](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/in-service-training), [Scope of practice](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/scope-of-practice), [Regulation](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/regulation), [Point of service applications](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/point-of-service-applications).
