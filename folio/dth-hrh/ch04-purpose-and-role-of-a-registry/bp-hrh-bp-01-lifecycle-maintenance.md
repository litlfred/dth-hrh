Maintains a single authoritative registry record for a health worker from pre-service education through registration, active employment, payroll reconciliation and exit from the active workforce.

![Health worker lifecycle and registry record maintenance (HRH-BP-01)](media/bp-hrh-bp-01-lifecycle-maintenance.svg)

**Swimlanes (one lane per role):**

- [**Training institution registrar**](#pers:training-institution-registrar)
- [**Registration officer (regulatory body)**](#pers:registration-officer)
- [**Employer or facility HR manager**](#pers:employer-hr-manager)
- [**Payroll system**](#pers:system-payroll)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP01_01` | [Training institution registrar](#pers:training-institution-registrar) | Record student indexing, pre-service education completion and graduation confirmation. | [Health worker lifecycle](#prose:ch04-health-worker-lifecycle) | 4.3, 13.2 |
| `Task_BP01_02` | [Registration officer (regulatory body)](#pers:registration-officer) | Verify qualification, assign persistent health worker identifier and record initial registration and licence. | [FR-ID-01](#freq:FR-ID-01), Health worker registration eligibility and identifier assignment (HRH-DT-01) | 4.3, 7.1 |
| `Task_BP01_03` | [Employer or facility human resources manager](#pers:employer-hr-manager) | Record recruitment, appointment and facility posting against the worker's registry identifier. | [FR-REC-02](#freq:FR-REC-02), [FR-LC-01](#freq:FR-LC-01) | 4.3, 7.3 |
| `Task_BP01_04` | [Payroll system](#pers:system-payroll) | Reconcile payroll records periodically against active registry records to flag duplicate or ghost entries. | [Strategic uses](#prose:ch04-strategic-uses) | 1.2, 4.4, 13.3 |
| `Task_BP01_05` | [Registration officer (regulatory body)](#pers:registration-officer) | Record career progression, specialty qualification, CPD and periodic licence renewal. | [FR-LC-01](#freq:FR-LC-01), Health worker lifecycle and licence status transition (HRH-DT-02) | 4.3, 7.3 |
| `Task_BP01_06` | [Registration officer (regulatory body)](#pers:registration-officer) | Record exit from active workforce (retirement, emigration, suspension, revocation or death) while preserving historical audit trail. | [FR-LC-02](#freq:FR-LC-02), Health worker lifecycle and licence status transition (HRH-DT-02) | 4.3, 7.3 |

*ArchiMate (dpi-h-ra 0.2.0):* [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (application component); [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (application function); [Employment/ Facility Mapping](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-30440ab5646f46c9bc8cd4447152be26.jsonld) (application function); [Retention Management (Payroll, Benefits)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-a47752af90b9418e8832f41d54ec8e63.jsonld) (application function); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (view).

*Glossary terms:* [Health workforce registry](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-registry), [Pre-service education](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/pre-service-education), [Registration](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/registration), [Licensing](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [Recruitment](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/recruitment), [Attrition](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/attrition).
