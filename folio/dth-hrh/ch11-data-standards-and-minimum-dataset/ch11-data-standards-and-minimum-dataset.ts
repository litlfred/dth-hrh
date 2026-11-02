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
      title: "11.1 Core data elements (CDE-HRH)",
      label: "sec:11-1",
      blocks: ["p-ch11-core-dataset", "de-identification-number", "de-name", "de-birth-history", "de-cde-sex", "de-citizenship-and-language", "de-address", "de-contact-information", "de-cde-occupation", "de-professional-licence-and-certification", "de-employment-status", "de-employment-address", "de-data-submission-institution"],
    }),
    section({
      title: "11.2 NHWA Module 1: Stock and flow",
      label: "sec:11-2",
      blocks: ["p-ch11-nhwa-m1", "de-nhwa-m1-activity-level", "de-nhwa-m1-subnational-unit", "de-nhwa-m1-facility-ownership", "de-nhwa-m1-facility-type", "de-nhwa-m1-place-of-training", "de-nhwa-m1-entry-date", "de-nhwa-m1-exit", "de-nhwa-m1-type-of-contract"],
    }),
    section({
      title: "11.3 NHWA Module 2: Education",
      label: "sec:11-3",
      blocks: ["p-ch11-nhwa-m2", "de-nhwa-m2-qualification", "de-nhwa-m2-training-institution"],
    }),
    section({
      title: "11.4 NHWA Module 3: Finance and expenditures",
      label: "sec:11-4",
      blocks: ["p-ch11-nhwa-m3", "de-nhwa-m3-employer-sector", "de-nhwa-m3-entry-salary-grade"],
    }),
    section({
      title: "11.5 NHWA Module 4: Working conditions, governance and leadership",
      label: "sec:11-5",
      blocks: ["p-ch11-nhwa-m4", "de-nhwa-m4-leadership-position"],
    }),
    section({
      title: "11.6 Classifications",
      label: "sec:11-6",
      blocks: ["p-ch11-classifications"],
    }),
    section({
      title: "11.7 Metadata",
      label: "sec:11-7",
      blocks: ["p-ch11-metadata"],
    }),
    section({
      title: "11.8 NHWA mapping",
      label: "sec:11-8",
      blocks: ["p-ch11-nhwa-mapping"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch11-planned",
      blocks: ["p-ch11-figures", "p-ch11-tools", "p-ch11-outputs"],
    }),
  ],
});
