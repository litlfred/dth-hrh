import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 22,
  title: "Chapter 22. Tools and Templates",
  label: "chap:ch22-tools-and-templates",
  meta: {"part": "Part 4. Examples and Resources"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch22-lead",
      lead: true,
      blocks: ["p-ch22-objectives", "p-ch22-key-messages"],
    }),
    section({
      title: "22.1 Checklists",
      label: "sec:22-1",
      blocks: ["p-ch22-checklists"],
    }),
    section({
      title: "22.2 Roadmaps",
      label: "sec:22-2",
      blocks: ["p-ch22-roadmaps"],
    }),
    section({
      title: "22.3 Assessment tools",
      label: "sec:22-3",
      blocks: ["p-ch22-assessment-tools"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch22-planned",
      blocks: ["p-ch22-figures", "p-ch22-tools", "p-ch22-outputs"],
    }),
  ],
});
