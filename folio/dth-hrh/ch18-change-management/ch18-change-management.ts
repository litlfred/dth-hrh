import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 18,
  title: "Chapter 18. Change Management",
  label: "chap:ch18-change-management",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch18-lead",
      lead: true,
      blocks: ["p-ch18-objectives", "p-ch18-key-messages"],
    }),
    section({
      title: "18.1 Communications",
      label: "sec:18-1",
      blocks: ["p-ch18-communications"],
    }),
    section({
      title: "18.2 Adoption",
      label: "sec:18-2",
      blocks: ["p-ch18-adoption"],
    }),
    section({
      title: "18.3 Capacity strengthening",
      label: "sec:18-3",
      blocks: ["p-ch18-capacity-strengthening"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch18-planned",
      blocks: ["p-ch18-figures", "p-ch18-tools", "p-ch18-outputs"],
    }),
  ],
});
