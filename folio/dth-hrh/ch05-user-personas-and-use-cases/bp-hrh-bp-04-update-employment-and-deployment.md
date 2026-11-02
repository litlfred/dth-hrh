Updates a health worker's employer, position, facility affiliation and emergency surge deployment in the registry while validating facility identifiers against the authoritative facility registry and synchronizing with the HRIS.

![Update employment, place of practice and surge deployment (HRH-BP-04)](media/bp-hrh-bp-04-update-employment-and-deployment.svg)

**Swimlanes (one lane per role):**

- [**Health worker**](#pers:health-worker)
- [**Employer or facility HR manager**](#pers:employer-hr-manager)
- [**Facility registry**](#pers:system-facility-registry)
- [**Human resources information system (HRIS)**](#pers:system-hris)
- [**Emergency coordinator**](#pers:emergency-coordinator)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP04_01` | [Health worker](#pers:health-worker) | Notify change of practice location, dual-practice affiliation or transfer. | [Update employment or place of practice](#scen:update-employment), [FR-LC-01](#freq:FR-LC-01) | 5.2, 7.3 |
| `Task_BP04_02` | [Employer or facility human resources manager](#pers:employer-hr-manager) | Verify practitioner's current licence status and submit employment appointment, transfer or separation details. | [FR-VER-02](#freq:FR-VER-02), [FR-LC-01](#freq:FR-LC-01) | 5.2, 7.3, 20.1 |
| `Task_BP04_03` | [Facility registry](#pers:system-facility-registry) | Validate and resolve the authoritative facility identifier for each place of practice. | [FR-REC-02](#freq:FR-REC-02) | 9.1, 11.1 |
| `Task_BP04_04` | [Human resources information system (HRIS)](#pers:system-hris) | Synchronize employment status, dual-practice links and facility posting between the HRIS and the registry. | [FR-REC-02](#freq:FR-REC-02), [FR-LC-01](#freq:FR-LC-01) | 5.2, 9.1, 10.3 |
| `Task_BP04_05` | [Emergency coordinator](#pers:emergency-coordinator) | Identify qualified workers by skill and location, verify credentials of surge teams/volunteers, and record temporary deployment and return. | [FR-VER-02](#freq:FR-VER-02), [FR-LC-01](#freq:FR-LC-01) | 5.1, 20.3 |

*ArchiMate (dpi-h-ra 0.2.0):* [Employment/ Facility Mapping](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-30440ab5646f46c9bc8cd4447152be26.jsonld) (application function); [DPI-H: Facility Registry](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-4e0767822dcf46409554156a133fbc67.jsonld) (application component); [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (application component); [Health Facility](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-9cecae7a982548e1960a36ed41713a7c.jsonld) (business role); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (view).

*Glossary terms:* [Deployment](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/deployment), [Distribution](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/distribution), [Human resources for health information system](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/human-resources-for-health-information-system), [Employment status: full-time, part-time, temporary, permanent](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/employment-status-full-time-part-time-temporary-permanent), [Registry](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/registry).
