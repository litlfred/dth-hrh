import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 14,
  title: "Chapter 14. Preparing for Transformation",
  label: "chap:ch14-preparing-for-transformation",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch14-lead",
      lead: true,
      blocks: ["p-ch14-part-purpose", "p-ch14-objectives", "p-ch14-key-messages"],
    }),
    section({
      title: "14.1 Leadership",
      label: "sec:14-1",
      blocks: ["p-ch14-leadership"],
    }),
    section({
      title: "14.2 Teams",
      label: "sec:14-2",
      blocks: ["p-ch14-teams"],
    }),
    section({
      title: "14.3 Readiness",
      label: "sec:14-3",
      blocks: ["p-ch14-readiness"],
    }),
    section({
      title: "14.4 Stakeholder engagement",
      label: "sec:14-4",
      blocks: ["p-ch14-stakeholder-engagement"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch14-planned",
      blocks: ["p-ch14-figures", "p-ch14-tools", "p-ch14-outputs"],
    }),
  ],
});
