import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 13,
  title: "Chapter 13. Data Quality Management",
  label: "chap:ch13-data-quality-management",
  meta: {"part": "Part 2. Technical Design"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch13-lead",
      lead: true,
      blocks: ["p-ch13-objectives", "p-ch13-key-messages"],
    }),
    section({
      title: "13.1 Quality dimensions",
      label: "sec:13-1",
      blocks: ["p-ch13-quality-dimensions"],
    }),
    section({
      title: "13.2 Validation",
      label: "sec:13-2",
      blocks: ["p-ch13-validation"],
    }),
    section({
      title: "13.3 Monitoring",
      label: "sec:13-3",
      blocks: ["p-ch13-monitoring"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch13-planned",
      blocks: ["p-ch13-figures", "p-ch13-tools", "p-ch13-outputs"],
    }),
  ],
});
