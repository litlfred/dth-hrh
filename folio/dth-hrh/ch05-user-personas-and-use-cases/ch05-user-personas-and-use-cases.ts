import { chapter, section } from "../../schema/builders";

export default chapter({
  number: 5,
  title: "Chapter 5. User Personas and Use Cases",
  label: "chap:ch05-user-personas-and-use-cases",
  meta: {"part": "Part 1. Foundations"},
  sections: [
    section({
      title: "Objectives and key messages",
      label: "sec:ch05-lead",
      lead: true,
      blocks: ["p-ch05-objectives", "p-ch05-key-messages"],
    }),
    section({
      title: "5.1 Personas",
      label: "sec:5-1",
      blocks: ["p-ch05-personas", "pers-health-worker", "pers-registration-officer", "pers-employer-hr-manager", "pers-training-institution-registrar", "pers-workforce-planner", "pers-member-of-public", "pers-emergency-coordinator", "pers-system-hris", "pers-system-payroll", "pers-system-emr", "pers-system-facility-registry", "pers-system-national-id", "pers-system-nhwa-platform"],
    }),
    section({
      title: "5.2 Priority use cases",
      label: "sec:5-2",
      blocks: ["p-ch05-priority-use-cases", "scen-register-and-license-new-graduate", "scen-renew-licence", "scen-update-employment", "scen-verify-status", "scen-workforce-counts-and-nhwa-reporting"],
    }),
    section({
      title: "5.3 User stories",
      label: "sec:5-3",
      blocks: ["p-ch05-user-stories"],
    }),
    section({
      title: "5.4 Requirements derivation",
      label: "sec:5-4",
      blocks: ["p-ch05-requirements-derivation"],
    }),
    section({
      title: "Figures, tools and expected outputs",
      label: "sec:ch05-planned",
      blocks: ["p-ch05-figures", "p-ch05-tools", "p-ch05-outputs"],
    }),
  ],
});
