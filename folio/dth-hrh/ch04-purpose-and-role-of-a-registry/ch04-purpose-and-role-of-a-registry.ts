import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 4,
  title: "Chapter 4. Purpose and Role of a Registry",
  label: "chap:ch04-purpose-and-role-of-a-registry",
  meta: {"part": "Part 1. Foundations"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch04-lead",
      lead: true,
      blocks: ["p-ch04-part-purpose", "p-ch04-objectives", "p-ch04-key-messages"],
    }),
    section({
      title: "4.1 Definitions",
      label: "sec:4-1",
      blocks: ["p-ch04-definitions"],
    }),
    section({
      title: "4.2 Authoritative source",
      label: "sec:4-2",
      blocks: ["p-ch04-authoritative-source"],
    }),
    section({
      title: "4.3 Health worker lifecycle",
      label: "sec:4-3",
      blocks: ["p-ch04-health-worker-lifecycle"],
    }),
    section({
      title: "4.4 Strategic uses",
      label: "sec:4-4",
      blocks: ["p-ch04-strategic-uses"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch04-planned",
      blocks: ["p-ch04-figures", "p-ch04-tools", "p-ch04-outputs"],
    }),
  ],
});
