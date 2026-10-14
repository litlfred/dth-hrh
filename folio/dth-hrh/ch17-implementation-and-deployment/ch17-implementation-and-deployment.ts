import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 17,
  title: "Chapter 17. Implementation and Deployment",
  label: "chap:ch17-implementation-and-deployment",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch17-lead",
      lead: true,
      blocks: ["p-ch17-objectives", "p-ch17-key-messages"],
    }),
    section({
      title: "17.1 Migration",
      label: "sec:17-1",
      blocks: ["p-ch17-migration"],
    }),
    section({
      title: "17.2 Testing",
      label: "sec:17-2",
      blocks: ["p-ch17-testing"],
    }),
    section({
      title: "17.3 Rollout",
      label: "sec:17-3",
      blocks: ["p-ch17-rollout"],
    }),
    section({
      title: "17.4 Operations",
      label: "sec:17-4",
      blocks: ["p-ch17-operations"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch17-planned",
      blocks: ["p-ch17-figures", "p-ch17-tools", "p-ch17-outputs"],
    }),
  ],
});
