import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 9,
  title: "Chapter 9. Registry within Ecosystem",
  label: "chap:ch09-registry-within-ecosystem",
  meta: {"part": "Part 2. Technical Design"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch09-lead",
      lead: true,
      blocks: ["p-ch09-part-purpose", "p-ch09-objectives", "p-ch09-key-messages"],
    }),
    section({
      title: "9.1 System landscape",
      label: "sec:9-1",
      blocks: ["p-ch09-system-landscape"],
    }),
    section({
      title: "9.2 Data flows",
      label: "sec:9-2",
      blocks: ["p-ch09-data-flows"],
    }),
    section({
      title: "9.3 Architecture examples",
      label: "sec:9-3",
      blocks: ["p-ch09-architecture-examples"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch09-planned",
      blocks: ["p-ch09-figures", "p-ch09-tools", "p-ch09-outputs"],
    }),
  ],
});
