import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 19,
  title: "Chapter 19. Monitoring and Continuous Improvement",
  label: "chap:ch19-monitoring-and-continuous-improvement",
  meta: {"part": "Part 3. Country Implementation"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch19-lead",
      lead: true,
      blocks: ["p-ch19-objectives", "p-ch19-key-messages"],
    }),
    section({
      title: "19.1 KPIs",
      label: "sec:19-1",
      blocks: ["p-ch19-kpis"],
    }),
    section({
      title: "19.2 Maturity",
      label: "sec:19-2",
      blocks: ["p-ch19-maturity"],
    }),
    section({
      title: "19.3 Evaluation",
      label: "sec:19-3",
      blocks: ["p-ch19-evaluation"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch19-planned",
      blocks: ["p-ch19-figures", "p-ch19-tools", "p-ch19-outputs"],
    }),
  ],
});
