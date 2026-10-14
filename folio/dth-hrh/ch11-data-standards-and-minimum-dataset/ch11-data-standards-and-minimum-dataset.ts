import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 11,
  title: "Chapter 11. Data Standards and Minimum Dataset",
  label: "chap:ch11-data-standards-and-minimum-dataset",
  meta: {"part": "Part 2. Technical Design"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch11-lead",
      lead: true,
      blocks: ["p-ch11-objectives", "p-ch11-key-messages"],
    }),
    section({
      title: "11.1 Core dataset",
      label: "sec:11-1",
      blocks: ["p-ch11-core-dataset", "de-identification-number", "de-name", "de-birth-history", "de-citizenship-and-language", "de-address", "de-contact-information", "de-professional-licence-and-certification", "de-employment-status", "de-employment-address", "de-data-submission-institution"],
    }),
    section({
      title: "11.2 Classifications",
      label: "sec:11-2",
      blocks: ["p-ch11-classifications"],
    }),
    section({
      title: "11.3 Metadata",
      label: "sec:11-3",
      blocks: ["p-ch11-metadata"],
    }),
    section({
      title: "11.4 NHWA mapping",
      label: "sec:11-4",
      blocks: ["p-ch11-nhwa-mapping"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch11-planned",
      blocks: ["p-ch11-figures", "p-ch11-tools", "p-ch11-outputs"],
    }),
  ],
});
