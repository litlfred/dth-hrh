import { prose } from "../../schema/builders";

export default prose({
  label: "prose:references",
  uses: [],
  // The References chapter's entries, in chapter order, as KG reference nodes (references/<key>.json).
  // The chapter's .md is generated from them: `bun run cat references:render --instance .` (meta.referenceList).
  cites: [
    "who-workforce-2030-2016",
    "9789240081291-eng",
    "who-global-code-recruitment-2010",
    "who-health-practitioner-regulation-2024",
    "9789240010567-eng",
    "9789240093362-eng",
    "9789240101197-eng",
    "9789240116191-eng",
    "who-dpi-h-reference-architecture-draft-v1",
    "9789240081949-eng",
    "who-global-strategy-digital-health-2020-2025",
    "who-smart-guidelines",
    "hl7-fhir-ihe-mcsd",
    "ilo-isco-08-unesco-isced",
  ],
  meta: {"referenceList": {"style": "short", "list": "bullet"}, "source": {"library": "twg-outline-2026-10-02", "file": "library/twg-outline-2026-10-02/HWF_Registry_DTH_Outline.md", "method": "outline-seed"}, "title": "References"},
});
