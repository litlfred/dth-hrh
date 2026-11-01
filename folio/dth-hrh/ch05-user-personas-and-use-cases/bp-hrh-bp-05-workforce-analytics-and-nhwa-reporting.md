Produces de-identified workforce stock, distribution, skill-mix, attrition and migration indicators from the registry and submits validated aggregate extracts to the National Health Workforce Accounts (NHWA) platform.

![Workforce counts and NHWA reporting (HRH-BP-05)](media/bp-hrh-bp-05-workforce-analytics-and-nhwa-reporting.svg)

**Swimlanes (one lane per role):**

- `Lane_BP05_WorkforcePlanner` — **Workforce planner** ([`pers:workforce-planner`](#pers:workforce-planner))
- `Lane_BP05_NHWAPlatform` — **NHWA platform** ([`pers:system-nhwa-platform`](#pers:system-nhwa-platform))

| Step ID | Lane (persona) | Activity | Linked requirement / decision table | Outline basis |
|---|---|---|---|---|
| `Task_BP05_01` | [`pers:workforce-planner`](#pers:workforce-planner) | Define reporting parameters by occupation (ISCO-08), sector, facility type, subnational geography and demographic breakdown. | [`scen:workforce-counts-and-nhwa-reporting`](#scen:workforce-counts-and-nhwa-reporting), [`freq:FR-AN-01`](#freq:FR-AN-01) | 5.2, 7.5, 11.2 |
| `Task_BP05_02` | [`pers:workforce-planner`](#pers:workforce-planner) | Generate de-identified aggregate counts of active stock, entries, exits, migration flows and distribution ([`freq:FR-AN-01`](#freq:FR-AN-01), [`freq:FR-AN-03`](#freq:FR-AN-03)). | [`freq:FR-AN-01`](#freq:FR-AN-01), [`freq:FR-AN-03`](#freq:FR-AN-03), `dt:hrh-dt-03-verification-and-access-response` | 7.5, 20.4 |
| `Task_BP05_03` | [`pers:workforce-planner`](#pers:workforce-planner) | Document coverage completeness (such as private-sector or community health worker inclusion) and source provenance metadata. | [`freq:FR-AN-02`](#freq:FR-AN-02) | 7.5, 11.4, 13.1 |
| `Task_BP05_04` | [`pers:system-nhwa-platform`](#pers:system-nhwa-platform) | Receive and validate periodic aggregate indicator extracts mapped to National Health Workforce Accounts (NHWA) indicators. | [`freq:FR-AN-02`](#freq:FR-AN-02) | 7.5, 10.3, 11.4 |

*ArchiMate (dpi-h-ra 0.2.0):* [Workforce Data Analytics](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-8852987c90c84071ae92ad3621548adf.jsonld) (`ApplicationFunction`); [Reporting Module](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-bbd18f65be45490fbbaf02346511ae5e.jsonld) (`ApplicationFunction`); [Analytics & Reporting Platform](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3fd92d497ca040c8a436f355c0b68770.jsonld) (`ApplicationComponent`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:health-workforce-planning`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/health-workforce-planning), [`dth-hrh:national-health-workforce-accounts`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/national-health-workforce-accounts), [`dth-hrh:international-standard-classification-of-occupations`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/international-standard-classification-of-occupations), [`dth-hrh:distribution`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/distribution), [`dth-hrh:stock`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/stock), [`dth-hrh:attrition`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/attrition).
