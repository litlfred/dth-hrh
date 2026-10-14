import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 12,
  title: "Chapter 12. Privacy, Security and Trust",
  label: "chap:ch12-privacy-security-and-trust",
  meta: {"part": "Part 2. Technical Design"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch12-lead",
      lead: true,
      blocks: ["p-ch12-objectives", "p-ch12-key-messages"],
    }),
    section({
      title: "12.1 Privacy by design",
      label: "sec:12-1",
      blocks: ["p-ch12-privacy-by-design"],
    }),
    section({
      title: "12.2 Cybersecurity",
      label: "sec:12-2",
      blocks: ["p-ch12-cybersecurity"],
    }),
    section({
      title: "12.3 Access control",
      label: "sec:12-3",
      blocks: ["p-ch12-access-control"],
    }),
    section({
      title: "12.4 Audit trails",
      label: "sec:12-4",
      blocks: ["p-ch12-audit-trails"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch12-planned",
      blocks: ["p-ch12-figures", "p-ch12-tools", "p-ch12-outputs"],
    }),
  ],
});
