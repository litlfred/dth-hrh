Produces de-identified workforce stock, distribution, skill-mix, attrition and migration indicators from the registry and submits validated aggregate extracts to the National Health Workforce Accounts (NHWA) platform.

![Workforce counts and NHWA reporting (HRH-BP-05)](media/bp-hrh-bp-05-workforce-analytics-and-nhwa-reporting.svg)

**Swimlanes (one lane per role):**

- [**Workforce planner**](#pers:workforce-planner)
- [**NHWA platform**](#pers:system-nhwa-platform)

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP05_01` | [Workforce planner](#pers:workforce-planner) | Define reporting parameters by occupation (ISCO-08), sector, facility type, subnational geography and demographic breakdown. | [Produce workforce counts and distribution for planning and NHWA reporting](#scen:workforce-counts-and-nhwa-reporting), [FR-AN-01](#freq:FR-AN-01) | 5.2, 7.5, 11.2 |
| `Task_BP05_02` | [Workforce planner](#pers:workforce-planner) | Generate de-identified aggregate counts of active stock, entries, exits, migration flows and distribution ([FR-AN-01](#freq:FR-AN-01), [FR-AN-03](#freq:FR-AN-03)). | [FR-AN-01](#freq:FR-AN-01), [FR-AN-03](#freq:FR-AN-03), Verification service and tiered disclosure response (HRH-DT-03) | 7.5, 20.4 |
| `Task_BP05_03` | [Workforce planner](#pers:workforce-planner) | Document coverage completeness (such as private-sector or community health worker inclusion) and source provenance metadata. | [FR-AN-02](#freq:FR-AN-02) | 7.5, 11.4, 13.1 |
| `Task_BP05_04` | [NHWA platform](#pers:system-nhwa-platform) | Receive and validate periodic aggregate indicator extracts mapped to National Health Workforce Accounts (NHWA) indicators. | [FR-AN-02](#freq:FR-AN-02) | 7.5, 10.3, 11.4 |

*ArchiMate (dpi-h-ra 0.2.0):* [Workforce Data Analytics](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8852987c90c84071ae92ad3621548adf.jsonld) (application function); [Reporting Module](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-bbd18f65be45490fbbaf02346511ae5e.jsonld) (application function); [Analytics & Reporting Platform](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3fd92d497ca040c8a436f355c0b68770.jsonld) (application component); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (view).

*Glossary terms:* [Health workforce planning](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-planning), [National Health Workforce Accounts (NHWA)](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/national-health-workforce-accounts), [International Standard Classification of Occupations (ISCO)](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/international-standard-classification-of-occupations), [Distribution](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/distribution), [Stock (of health workers)](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/stock), [Attrition](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/attrition).
