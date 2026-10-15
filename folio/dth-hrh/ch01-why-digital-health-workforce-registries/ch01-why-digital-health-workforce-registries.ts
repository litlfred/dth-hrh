import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 1,
  title: "Chapter 1. Why Digital Health Workforce Registries Matter",
  label: "chap:ch01-why-digital-health-workforce-registries",
  meta: {"part": "Part 0. Introduction"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch01-lead",
      lead: true,
      blocks: ["p-ch01-part-purpose", "p-ch01-objectives", "p-ch01-key-messages"],
    }),
    section({
      title: "1.1 Global challenges",
      label: "sec:1-1",
      blocks: ["p-ch01-global-challenges"],
    }),
    section({
      title: "1.2 Value proposition",
      label: "sec:1-2",
      blocks: ["p-ch01-value-proposition"],
    }),
    section({
      title: "1.3 Registry as digital public infrastructure",
      label: "sec:1-3",
      blocks: ["p-ch01-registry-as-digital-public-infrastructur", "p-ch01-register-not-registry"],
    }),
    section({
      title: "1.4 Benefits and outcomes",
      label: "sec:1-4",
      blocks: ["p-ch01-benefits-and-outcomes"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch01-planned",
      blocks: ["p-ch01-outputs", "p-ch01-tools"],
    }),
  ],
});
