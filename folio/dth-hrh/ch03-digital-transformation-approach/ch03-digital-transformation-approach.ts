import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 3,
  title: "Chapter 3. Digital Transformation Approach",
  label: "chap:ch03-digital-transformation-approach",
  meta: {"part": "Part 0. Introduction"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch03-lead",
      lead: true,
      blocks: ["p-ch03-objectives", "p-ch03-key-messages"],
    }),
    section({
      title: "3.1 DIIG alignment",
      label: "sec:3-1",
      blocks: ["p-ch03-diig-alignment", "f-diig-phases", "f-smart-guidelines-approach", "t-ch03-diig-mapping"],
    }),
    section({
      title: "3.2 Transformation principles",
      label: "sec:3-2",
      blocks: ["p-ch03-transformation-principles"],
    }),
    section({
      title: "3.3 Country pathway",
      label: "sec:3-3",
      blocks: ["p-ch03-country-pathway"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch03-planned",
      blocks: ["p-ch03-figures", "p-ch03-tools", "p-ch03-outputs"],
    }),
  ],
});
