Decision table **HRH-DT-01** (`Decision_HRH_DT_01`, hit policy `FIRST`) formalizes the rules in **Section 7.1 (Identity management)** and **Section 7.2 (Records)** governing when a registration application creates a new persistent health worker identifier (`freq:FR-ID-01`), reuses an existing identifier across cadres or specialties, holds a candidate duplicate for manual adjudication (`freq:FR-ID-02`), or rejects an application lacking primary-source qualification attestation (`freq:FR-REC-01`, `freq:FR-REC-02`).

*Source passages cited:* `prose:ch07-identity-management`, `freq:FR-ID-01`, `freq:FR-ID-02`, `freq:FR-REC-01`, `freq:FR-REC-02`, and `scen:register-and-license-new-graduate`. Qualitative states come strictly from the source text; no numeric matching scores or day thresholds are invented.

| Rule | `identityStatus` (`freq:FR-ID-01`) | `qualificationAttestation` (`freq:FR-REC-01`, `freq:FR-REC-02`) | `duplicateMatch` (`freq:FR-ID-02`) | `regulatoryStanding` (`freq:FR-REC-02`) | `registrationDecision` | `identifierAction` | Source basis |
|---|---|---|---|---|---|---|
| `Rule_DT01_01` | `-` | `-` | `-` | `"revoked", "disqualified"` | `"reject-disqualified"` | `"none"` | `freq:FR-REC-02` (7.2) |
| `Rule_DT01_02` | `"rejected"` | `-` | `-` | `-` | `"reject-unverified-identity"` | `"none"` | `freq:FR-ID-01` (7.1) |
| `Rule_DT01_03` | `-` | `"rejected"` | `-` | `-` | `"reject-unverified-qualification"` | `"none"` | `freq:FR-REC-01`, `freq:FR-REC-02` (7.2) |
| `Rule_DT01_04` | `"verified", "verified-without-national-id"` | `"attested"` | `"candidate-duplicate"` | `"good-standing", "new-graduate"` | `"hold-duplicate-review"` | `"review-candidate-match"` | `freq:FR-ID-02` (7.1, 13.3) |
| `Rule_DT01_05` | `"verified", "verified-without-national-id"` | `"attested"` | `"existing-confirmed"` | `"good-standing", "new-graduate"` | `"register-and-license"` | `"reuse-existing-hwr-id"` | `freq:FR-ID-01`, `freq:FR-ID-02` (7.1) |
| `Rule_DT01_06` | `"verified", "verified-without-national-id"` | `"attested"` | `"none"` | `"good-standing", "new-graduate"` | `"register-and-license"` | `"assign-new-hwr-id"` | `freq:FR-ID-01`, `freq:FR-REC-01`, `freq:FR-REC-02` (5.2, 7.1, 7.2) |
| `Rule_DT01_07` | `"pending", "unknown"` | `-` | `-` | `-` | `"hold-pending-verification"` | `"none"` | Third state: pending/unknown source check (`freq:FR-ID-01`) |
| `Rule_DT01_08` | `-` | `-` | `-` | `-` | `"hold-pending-verification"` | `"none"` | Catch-all fallback (`freq:FR-ID-02`) |

*Companion DMN 1.3 file:* `dt-hrh-dt-01-registration-eligibility.dmn`.

*ArchiMate (dpi-h-ra 0.2.0):* [Credential & License](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-3bc59974bc1e4e5d8e795cdc1606587e.jsonld) (`ApplicationFunction`); [Identity Management Service](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-646c18afcfc54f4fb33ae93110e02c2c.jsonld) (`ApplicationService`); [DPI-H Health Workforce Registry (HWR)](https://litlfred.github.io/smart-ra/archimate/0.2.0/elements/id-350840520ae44f658b6ad3b3762e382e.jsonld) (`ApplicationComponent`); [ALL High Level - Health Workforce](https://litlfred.github.io/smart-ra/archimate/0.2.0/views/id-19be800d18a34a618d6e1955cf58e956.jsonld) (`View`).

*Glossary terms:* [`dth-hrh:registration`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/registration), [`dth-hrh:licensing`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/licensing), [`dth-hrh:certification`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/certification), [`dth-hrh:professional-council`](https://litlfred.github.io/dth-hrh/v0/ns#glossary/dth-hrh/professional-council).
