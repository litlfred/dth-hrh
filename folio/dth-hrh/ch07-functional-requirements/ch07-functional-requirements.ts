import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 7,
  title: "Chapter 7. Functional Requirements",
  label: "chap:ch07-functional-requirements",
  meta: {"part": "Part 1. Foundations"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch07-lead",
      lead: true,
      blocks: ["p-ch07-objectives", "p-ch07-key-messages"],
    }),
    section({
      title: "7.1 Identity management",
      label: "sec:7-1",
      blocks: ["p-ch07-identity-management", "fr-id-01", "fr-id-02", "fr-id-03"],
    }),
    section({
      title: "7.2 Records",
      label: "sec:7-2",
      blocks: ["p-ch07-records", "fr-rec-01", "fr-rec-02", "fr-rec-03"],
    }),
    section({
      title: "7.3 Lifecycle management",
      label: "sec:7-3",
      blocks: ["p-ch07-lifecycle-management", "fr-lc-01", "fr-lc-02", "fr-lc-03"],
    }),
    section({
      title: "7.4 Verification services",
      label: "sec:7-4",
      blocks: ["p-ch07-verification-services", "fr-ver-01", "fr-ver-02", "fr-ver-03"],
    }),
    section({
      title: "7.5 Analytics",
      label: "sec:7-5",
      blocks: ["p-ch07-analytics", "f-nhwa-poster", "f-nhwa-hwr", "fr-an-01", "fr-an-02", "fr-an-03"],
    }),
    section({
      title: "Non-functional requirements",
      label: "sec:7-nfr",
      blocks: ["p-ch07-nfr-intro", "nfr-security", "nfr-availability", "nfr-offline-use", "nfr-languages", "nfr-testability"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch07-planned",
      blocks: ["p-ch07-figures", "p-ch07-tools", "p-ch07-outputs"],
    }),
  ],
});
