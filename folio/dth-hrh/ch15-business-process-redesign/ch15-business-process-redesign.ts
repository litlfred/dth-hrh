import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 15,
  title: "Chapter 15. Business Process Redesign",
  label: "chap:ch15-business-process-redesign",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch15-lead",
      lead: true,
      blocks: ["p-ch15-objectives", "p-ch15-key-messages"],
    }),
    section({
      title: "15.1 Current state mapping",
      label: "sec:15-1",
      blocks: ["p-ch15-current-state-mapping"],
    }),
    section({
      title: "15.2 Future workflows",
      label: "sec:15-2",
      blocks: ["p-ch15-future-workflows"],
    }),
    section({
      title: "15.3 Requirements",
      label: "sec:15-3",
      blocks: ["p-ch15-requirements"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch15-planned",
      blocks: ["p-ch15-figures", "p-ch15-tools", "p-ch15-outputs"],
    }),
  ],
});
