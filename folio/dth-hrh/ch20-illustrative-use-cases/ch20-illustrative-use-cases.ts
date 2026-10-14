import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 20,
  title: "Chapter 20. Illustrative Use Cases",
  label: "chap:ch20-illustrative-use-cases",
  meta: {"part": "Part 4. Examples and Resources"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch20-lead",
      lead: true,
      blocks: ["p-ch20-part-purpose", "p-ch20-objectives", "p-ch20-key-messages"],
    }),
    section({
      title: "20.1 Licensing",
      label: "sec:20-1",
      blocks: ["scen-licensing"],
    }),
    section({
      title: "20.2 Verification",
      label: "sec:20-2",
      blocks: ["scen-verification"],
    }),
    section({
      title: "20.3 Emergency response",
      label: "sec:20-3",
      blocks: ["scen-emergency-response"],
    }),
    section({
      title: "20.4 Mobility",
      label: "sec:20-4",
      blocks: ["scen-mobility"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch20-planned",
      blocks: ["p-ch20-figures", "p-ch20-tools", "p-ch20-outputs"],
    }),
  ],
});
