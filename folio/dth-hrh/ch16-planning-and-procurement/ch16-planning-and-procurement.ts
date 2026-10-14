import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 16,
  title: "Chapter 16. Planning and Procurement",
  label: "chap:ch16-planning-and-procurement",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch16-lead",
      lead: true,
      blocks: ["p-ch16-objectives", "p-ch16-key-messages"],
    }),
    section({
      title: "16.1 Options analysis",
      label: "sec:16-1",
      blocks: ["p-ch16-options-analysis"],
    }),
    section({
      title: "16.2 Procurement approaches",
      label: "sec:16-2",
      blocks: ["p-ch16-procurement-approaches"],
    }),
    section({
      title: "16.3 Risk management",
      label: "sec:16-3",
      blocks: ["p-ch16-risk-management"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch16-planned",
      blocks: ["p-ch16-figures", "p-ch16-tools", "p-ch16-outputs"],
    }),
  ],
});
