*Person.* Designated operational and data-stewardship team that operates the health workforce registry, enforces role-based access and audit logging, runs routine data-quality and deduplication reviews, and routes record-correction requests to the authoritative source.

*Specialises the SMART Guidelines generic persona:* DataManager.

| | Draft for working-group review | Outline basis |
|---|---|---|
| **Goals** | High data completeness, timeliness and accuracy; zero unauthorized disclosures; clear provenance and audit trail for every record change. | 6.3, 7.2, 7.5, 12.2 |
| **Tasks** | Configure role-based access and tiered disclosure controls; maintain provenance and audit logs; run periodic deduplication and completeness checks; route health worker record-correction disputes to the authoritative source custodian. | 6.3, 7.1, 7.2, 7.5, 12.2, 12.3 |
| **Difficulties** | Inconsistent identifiers across source systems; resolving duplicate candidates across cadres and employers. | 1.1, 7.1, 13.3 |
| **Digital skills** | Technical and data-stewardship proficiency required. | 6.3, 18.2 |
| **Connectivity** | Operates connected registry infrastructure with support for offline sync/credential verification channels. | 7 (nfr), 8.3 |

*Role ID:* `HRH-R-15` | *BPMN lane(s):* `Lane_BP06_Custodian` in `bp:hrh-bp-06-governance-and-stewardship-review` (`HRH_BP_06`) | *ArchiMate (dpi-h-ra 0.2.0):* [Logical Information Model Maintainer](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8b80d28cdd48418480cee878af495ac3.jsonld) (`BusinessRole`); [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (`ApplicationComponent`) | *Glossary:* [`dth-hrh:health-workforce-registry`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-registry), [`dpi-h-ra:data-governance`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/data-governance).
