import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 8,
  title: "Chapter 8. Digital Architecture Principles",
  label: "chap:ch08-digital-architecture-principles",
  meta: {"part": "Part 1. Foundations"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch08-lead",
      lead: true,
      blocks: ["p-ch08-objectives", "p-ch08-key-messages"],
    }),
    section({
      title: "8.1 Architecture patterns",
      label: "sec:8-1",
      blocks: ["p-ch08-architecture-patterns"],
    }),
    section({
      title: "8.2 Federation",
      label: "sec:8-2",
      blocks: ["p-ch08-federation"],
    }),
    section({
      title: "8.3 Scalability",
      label: "sec:8-3",
      blocks: ["p-ch08-scalability"],
    }),
    section({
      title: "8.4 Technology neutrality",
      label: "sec:8-4",
      blocks: ["p-ch08-technology-neutrality"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch08-planned",
      blocks: ["p-ch08-figures", "p-ch08-tools", "p-ch08-outputs"],
    }),
  ],
});
