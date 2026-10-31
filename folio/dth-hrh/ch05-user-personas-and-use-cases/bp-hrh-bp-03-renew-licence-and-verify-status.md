Renews a health worker's licence to practise based on continuing professional development and good-standing rules, and serves tiered status verification responses to members of the public and point-of-care clinical systems.

![Renew a licence and verify registration status (HRH-BP-03)](media/bp-hrh-bp-03-renew-licence-and-verify-status.svg)

**Swimlanes (one lane per role):**

- `Lane_BP03_HealthWorker` — **Health worker** (`pers:health-worker`)
- `Lane_BP03_RegistrationOfficer` — **Registration officer (regulatory body)** (`pers:registration-officer`)
- `Lane_BP03_Public` — **Member of the public** (`pers:member-of-public`)
- `Lane_BP03_EMR` — **Electronic medical record** (`pers:system-emr`)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP03_01` | `pers:health-worker` | Submit licence renewal application and continuing professional development (CPD) completion records. | `scen:renew-licence`, `freq:FR-LC-01` | 5.2, 7.3 |
| `Task_BP03_02` | `pers:registration-officer` | Evaluate CPD completion, licence expiry and disciplinary standing via `dt:hrh-dt-02-lifecycle-status-transition`. | `freq:FR-LC-01`, `freq:FR-LC-02`, `dt:hrh-dt-02-lifecycle-status-transition` | 7.3 |
| `Task_BP03_03` | `pers:registration-officer` | Record renewed licence validity period and issue updated digital verifiable credential. | `freq:FR-LC-01`, `freq:FR-VER-03` | 7.3, 7.4 |
| `Task_BP03_04` | `pers:registration-officer` | Transition licence status to lapsed, suspended or revoked with timestamped audit trail and notify connected systems. | `freq:FR-LC-02`, `dt:hrh-dt-02-lifecycle-status-transition` | 7.3, 20.2 |
| `Task_BP03_05` | `pers:member-of-public` | Check practitioner registration and active licence status on the public lookup channel. | `scen:verify-status`, `freq:FR-VER-01` | 5.2, 7.4, 12.1 |
| `Task_BP03_06` | `pers:system-emr` | Query the registry via API at the point of care to confirm practitioner identity and prescribing/clinical authorization. | `scen:verify-status`, `freq:FR-VER-02` | 4.4, 7.4, 20.2 |
| `Task_BP03_07` | `pers:registration-officer` | Apply tiered disclosure rules (`dt:hrh-dt-03-verification-and-access-response`) and return public or authorized status payload. | `freq:FR-VER-01`, `freq:FR-VER-02`, `dt:hrh-dt-03-verification-and-access-response` | 7.4, 12.1 |

*ArchiMate (dpi-h-ra 0.2.0):* [Licensing Bodies](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-63c448813aea4067bb68281f7926fd2b.jsonld) (`BusinessRole`); [Vendor EHR Product](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bd1011d76c843fa860255f00a6aa68f.jsonld) (`ApplicationComponent`); [Patients](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-a2320dbc07e6450b94f3f0f3e03bb877.jsonld) (`BusinessRole`); [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (`ApplicationFunction`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:licensing`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [`dth-hrh:in-service-training`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/in-service-training), [`dth-hrh:scope-of-practice`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/scope-of-practice), [`dth-hrh:regulation`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/regulation), [`dpi-h-ra:point-of-service-applications`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/point-of-service-applications).
