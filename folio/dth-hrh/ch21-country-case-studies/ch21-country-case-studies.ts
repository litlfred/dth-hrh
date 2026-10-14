import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 21,
  title: "Chapter 21. Country Case Studies",
  label: "chap:ch21-country-case-studies",
  meta: {"part": "Part 4. Examples and Resources"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch21-lead",
      lead: true,
      blocks: ["p-ch21-objectives", "p-ch21-key-messages"],
    }),
    section({
      title: "21.1 Centralized",
      label: "sec:21-1",
      blocks: ["p-ch21-centralized"],
    }),
    section({
      title: "21.2 Federated",
      label: "sec:21-2",
      blocks: ["p-ch21-federated"],
    }),
    section({
      title: "21.3 Fragile settings",
      label: "sec:21-3",
      blocks: ["p-ch21-fragile-settings"],
    }),
    section({
      title: "21.4 Lessons learned",
      label: "sec:21-4",
      blocks: ["p-ch21-lessons-learned"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch21-planned",
      blocks: ["p-ch21-figures", "p-ch21-tools", "p-ch21-outputs"],
    }),
  ],
});
