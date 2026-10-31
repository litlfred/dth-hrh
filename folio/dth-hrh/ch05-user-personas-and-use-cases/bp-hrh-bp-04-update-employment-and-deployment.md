Updates a health worker's employer, position, facility affiliation and emergency surge deployment in the registry while validating facility identifiers against the authoritative facility registry and synchronizing with the HRIS.

![Update employment, place of practice and surge deployment (HRH-BP-04)](media/bp-hrh-bp-04-update-employment-and-deployment.svg)

**Swimlanes (one lane per role):**

- `Lane_BP04_HealthWorker` — **Health worker** (`pers:health-worker`)
- `Lane_BP04_EmployerHR` — **Employer or facility HR manager** (`pers:employer-hr-manager`)
- `Lane_BP04_FacilityRegistry` — **Facility registry** (`pers:system-facility-registry`)
- `Lane_BP04_HRIS` — **Human resources information system (HRIS)** (`pers:system-hris`)
- `Lane_BP04_EmergencyCoord` — **Emergency coordinator** (`pers:emergency-coordinator`)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP04_01` | `pers:health-worker` | Notify change of practice location, dual-practice affiliation or transfer. | `scen:update-employment`, `freq:FR-LC-01` | 5.2, 7.3 |
| `Task_BP04_02` | `pers:employer-hr-manager` | Verify practitioner's current licence status and submit employment appointment, transfer or separation details. | `freq:FR-VER-02`, `freq:FR-LC-01` | 5.2, 7.3, 20.1 |
| `Task_BP04_03` | `pers:system-facility-registry` | Validate and resolve the authoritative facility identifier for each place of practice. | `freq:FR-REC-02` | 9.1, 11.1 |
| `Task_BP04_04` | `pers:system-hris` | Synchronize employment status, dual-practice links and facility posting between the HRIS and the registry. | `freq:FR-REC-02`, `freq:FR-LC-01` | 5.2, 9.1, 10.3 |
| `Task_BP04_05` | `pers:emergency-coordinator` | Identify qualified workers by skill and location, verify credentials of surge teams/volunteers, and record temporary deployment and return. | `freq:FR-VER-02`, `freq:FR-LC-01` | 5.1, 20.3 |

*ArchiMate (dpi-h-ra 0.2.0):* [Employment/ Facility Mapping](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-30440ab5646f46c9bc8cd4447152be26.jsonld) (`ApplicationFunction`); [DPI-H: Facility Registry](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-4e0767822dcf46409554156a133fbc67.jsonld) (`ApplicationComponent`); [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (`ApplicationComponent`); [Health Facility](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-9cecae7a982548e1960a36ed41713a7c.jsonld) (`BusinessRole`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:deployment`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/deployment), [`dth-hrh:distribution`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/distribution), [`dth-hrh:human-resources-for-health-information-system`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/human-resources-for-health-information-system), [`dth-hrh:employment-status-full-time-part-time-temporary-permanent`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/employment-status-full-time-part-time-temporary-permanent), [`dpi-h-ra:registry`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/registry).
