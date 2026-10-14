import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 10,
  title: "Chapter 10. Interoperability",
  label: "chap:ch10-interoperability",
  meta: {"part": "Part 2. Technical Design"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch10-lead",
      lead: true,
      blocks: ["p-ch10-objectives", "p-ch10-key-messages"],
    }),
    section({
      title: "10.1 Standards",
      label: "sec:10-1",
      blocks: ["p-ch10-standards"],
    }),
    section({
      title: "10.2 APIs",
      label: "sec:10-2",
      blocks: ["p-ch10-apis"],
    }),
    section({
      title: "10.3 Data exchange patterns",
      label: "sec:10-3",
      blocks: ["p-ch10-data-exchange-patterns"],
    }),
    section({
      title: "10.4 Governance",
      label: "sec:10-4",
      blocks: ["p-ch10-governance"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch10-planned",
      blocks: ["p-ch10-figures", "p-ch10-tools", "p-ch10-outputs"],
    }),
  ],
});
