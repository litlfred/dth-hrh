import { chapter, section } from "../../schema/builders";

export default chapter({
  tabLabel: "D",
  title: "About this draft",
  label: "chap:about-this-draft",
  sections: [
    section({
      title: "About this draft",
      label: "sec:about-lead",
      lead: true,
      blocks: ["p-about"],
    }),
    section({
      title: "Questions for the TWG",
      label: "sec:about-questions",
      blocks: ["p-twg-questions"],
    }),
    section({
      title: "Points for discussion",
      label: "sec:about-discussion",
      blocks: ["r-discussion-one-registry-or-one-set-of-information", "r-discussion-boundary-with-hris", "r-discussion-minimum-data-set", "r-discussion-unique-health-worker-identification", "r-discussion-which-health-workers", "r-discussion-overlap-between-chapters", "r-discussion-step-by-step-or-modular", "r-discussion-case-studies"],
    }),
    section({
      title: "Handbook at a glance",
      label: "sec:about-glance",
      blocks: ["t-handbook-at-a-glance"],
    }),
  ],
});
