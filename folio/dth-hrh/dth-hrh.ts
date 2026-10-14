import { paper, chapterRef } from "../schema/builders";

/**
 * Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries
 *
 * The document manifest. `chapters` is an ORDERED list — its order is the
 * reading order, and it is the only place that order is recorded. To move a
 * chapter, move its entry here; never rename the directory to encode position,
 * because labels, uses[], feedback and QA sidecars all key on names.
 *
 * Seeded from the TWG manuscript outline (2026-10-02) by
 * tools/folio/build_from_outline.py; edited by hand from then on.
 */
export default paper({
  title: "Digital Transformation Handbook: Planning for Human Resources for Health and Health Worker Registries",
  authors: ["World Health Organization"],
  date: "2026-10-14",
  meta: {
    documentKind: "smart-base:dth",
    level: "L1",
    status: "working draft (TWG outline stage)",
  },
  chapters: [
    chapterRef({ dir: "about-this-draft" }),
    chapterRef({ dir: "ch01-why-digital-health-workforce-registries" }),
    chapterRef({ dir: "ch02-scope-and-boundaries" }),
    chapterRef({ dir: "ch03-digital-transformation-approach" }),
    chapterRef({ dir: "ch04-purpose-and-role-of-a-registry" }),
    chapterRef({ dir: "ch05-user-personas-and-use-cases" }),
    chapterRef({ dir: "ch06-governance-and-stewardship" }),
    chapterRef({ dir: "ch07-functional-requirements" }),
    chapterRef({ dir: "ch08-digital-architecture-principles" }),
    chapterRef({ dir: "ch09-registry-within-ecosystem" }),
    chapterRef({ dir: "ch10-interoperability" }),
    chapterRef({ dir: "ch11-data-standards-and-minimum-dataset" }),
    chapterRef({ dir: "ch12-privacy-security-and-trust" }),
    chapterRef({ dir: "ch13-data-quality-management" }),
    chapterRef({ dir: "ch14-preparing-for-transformation" }),
    chapterRef({ dir: "ch15-business-process-redesign" }),
    chapterRef({ dir: "ch16-planning-and-procurement" }),
    chapterRef({ dir: "ch17-implementation-and-deployment" }),
    chapterRef({ dir: "ch18-change-management" }),
    chapterRef({ dir: "ch19-monitoring-and-continuous-improvement" }),
    chapterRef({ dir: "ch20-illustrative-use-cases" }),
    chapterRef({ dir: "ch21-country-case-studies" }),
    chapterRef({ dir: "ch22-tools-and-templates" }),
    chapterRef({ dir: "annexes" }),
    chapterRef({ dir: "glossary" }),
    chapterRef({ dir: "references" }),
  ],
});
