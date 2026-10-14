import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 2,
  title: "Chapter 2. Scope and Boundaries",
  label: "chap:ch02-scope-and-boundaries",
  meta: {"part": "Part 0. Introduction"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch02-lead",
      lead: true,
      blocks: ["p-ch02-objectives", "p-ch02-key-messages"],
    }),
    section({
      title: "2.1 Included topics",
      label: "sec:2-1",
      blocks: ["p-ch02-included-topics"],
    }),
    section({
      title: "2.2 Excluded topics",
      label: "sec:2-2",
      blocks: ["p-ch02-excluded-topics"],
    }),
    section({
      title: "2.3 Target audiences",
      label: "sec:2-3",
      blocks: ["p-ch02-target-audiences"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch02-planned",
      blocks: ["p-ch02-figures", "p-ch02-tools", "p-ch02-outputs"],
    }),
  ],
});
