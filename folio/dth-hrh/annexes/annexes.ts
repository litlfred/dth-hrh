import { chapter, section } from "../../schema/builders";

export default chapter({
  tabLabel: "A",
  title: "Annexes",
  label: "chap:annexes",
  sections: [
    section({
      title: "Annexes",
      label: "sec:annexes-lead",
      lead: true,
      blocks: ["p-annexes"],
    }),
    section({
      title: "Annex 1. Minimum Data Set",
      label: "sec:annex-1",
      blocks: ["p-annex-1"],
    }),
    section({
      title: "Annex 2. Data Dictionary",
      label: "sec:annex-2",
      blocks: ["p-annex-2"],
    }),
    section({
      title: "Annex 3. Governance Template",
      label: "sec:annex-3",
      blocks: ["p-annex-3"],
    }),
    section({
      title: "Annex 4. User Personas",
      label: "sec:annex-4",
      blocks: ["p-annex-4"],
    }),
    section({
      title: "Annex 5. Functional Requirements Catalogue",
      label: "sec:annex-5",
      blocks: ["p-annex-5"],
    }),
    section({
      title: "Annex 6. Interoperability Models",
      label: "sec:annex-6",
      blocks: ["p-annex-6"],
    }),
    section({
      title: "Annex 7. Readiness Assessment",
      label: "sec:annex-7",
      blocks: ["p-annex-7"],
    }),
    section({
      title: "Annex 8. Maturity Model",
      label: "sec:annex-8",
      blocks: ["p-annex-8"],
    }),
    section({
      title: "Annex 10. NHWA Mapping",
      label: "sec:annex-10",
      blocks: ["p-annex-10"],
    }),
  ],
});
