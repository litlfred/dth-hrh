import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 6,
  title: "Chapter 6. Governance and Stewardship",
  label: "chap:ch06-governance-and-stewardship",
  meta: {"part": "Part 1. Foundations"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch06-lead",
      lead: true,
      blocks: ["p-ch06-objectives", "p-ch06-key-messages"],
    }),
    section({
      title: "6.1 Institutions",
      label: "sec:6-1",
      blocks: ["p-ch06-institutions"],
    }),
    section({
      title: "6.2 Legal foundations",
      label: "sec:6-2",
      blocks: ["p-ch06-legal-foundations"],
    }),
    section({
      title: "6.3 Data stewardship",
      label: "sec:6-3",
      blocks: ["p-ch06-data-stewardship", "bp-hrh-bp-06-governance-and-stewardship-review"],
    }),
    section({
      title: "6.4 Sustainability",
      label: "sec:6-4",
      blocks: ["p-ch06-sustainability"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch06-planned",
      blocks: ["p-ch06-figures", "p-ch06-tools", "p-ch06-outputs"],
    }),
  ],
});
