import { chapter, section } from "../../schema/builders";

export default chapter({
  tabLabel: "R",
  title: "References",
  label: "chap:references",
  sections: [
    section({
      title: "References",
      label: "sec:references-lead",
      lead: true,
      blocks: ["p-references"],
    }),
  ],
});
