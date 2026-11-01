Decision table **HRH-DT-02** (`Decision_HRH_DT_02`, hit policy `FIRST`) formalizes the rules in **Section 7.3 (Lifecycle management)** and **Section 4.3 (Health worker lifecycle)** for transitioning a practitioner's registration and licence status across renewal, employment updates, suspension, revocation, reinstatement, retirement/emigration and death (`freq:FR-LC-01`), while preserving all historical states without overwriting prior records (`freq:FR-LC-02`).

*Source passages cited:* `prose:ch07-lifecycle-management`, `freq:FR-LC-01`, `freq:FR-LC-02`, `scen:renew-licence`, `scen:update-employment`, and `prose:ch04-health-worker-lifecycle`. Only qualitative states named in the text are used; country-specific renewal intervals or CPD point thresholds are not hardcoded.

| Rule | `currentStatus` | `lifecycleEvent` (`freq:FR-LC-01`) | `evidenceStatus` | `targetStatus` | `historyAction` (`freq:FR-LC-02`) | Source basis |
|---|---|---|---|---|---|---|
| `Rule_DT02_01` | `-` | `"death"` | `"confirmed"` | `"deceased"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (4.3, 7.3) |
| `Rule_DT02_02` | `-` | `"revocation"` | `"confirmed"` | `"revoked"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (7.3) |
| `Rule_DT02_03` | `"active", "lapsed"` | `"suspension"` | `"confirmed"` | `"suspended"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (5.2, 7.3) |
| `Rule_DT02_04` | `"active", "lapsed"` | `"retirement", "emigration"` | `"confirmed"` | `"retired-or-exited"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (4.3, 7.3) |
| `Rule_DT02_05` | `"active", "lapsed"` | `"licence-renewal"` | `"confirmed"` | `"active"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `scen:renew-licence` (5.2, 7.3) |
| `Rule_DT02_06` | `"active"` | `"licence-expiry", "licence-renewal"` | `"deficient", "expired"` | `"lapsed"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (7.3) |
| `Rule_DT02_07` | `"suspended"` | `"reinstatement"` | `"confirmed"` | `"active"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02` (5.1, 7.3) |
| `Rule_DT02_08` | `"active"` | `"employment-update", "emergency-deployment"` | `"confirmed"` | `"active"` | `"append-state-preserve-history"` | `freq:FR-LC-01`, `freq:FR-LC-02`, `scen:update-employment` (5.2, 7.3) |
| `Rule_DT02_09` | `-` | `-` | `"pending", "unknown"` | `"hold-pending-verification"` | `"log-pending-review-no-overwrite"` | Third state: unconfirmed evidence (`freq:FR-LC-02`) |
| `Rule_DT02_10` | `-` | `-` | `-` | `"hold-pending-verification"` | `"log-pending-review-no-overwrite"` | Catch-all fallback (`freq:FR-LC-02`) |

*Companion DMN 1.3 file:* `dt-hrh-dt-02-lifecycle-status-transition.dmn`.

*ArchiMate (dpi-h-ra 0.2.0):* [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (`ApplicationFunction`); [Employment/ Facility Mapping](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-30440ab5646f46c9bc8cd4447152be26.jsonld) (`ApplicationFunction`); [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (`ApplicationComponent`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:licensing`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [`dth-hrh:in-service-training`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/in-service-training), [`dth-hrh:attrition`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/attrition), [`dpi-h-ra:repository`](https://litlfred.github.io/smart-ra/v0/ns#glossary/dpi-h-ra/repository).
