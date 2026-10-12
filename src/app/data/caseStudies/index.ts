import glowy from "./glowy";
import urbanEscape from "./urbanEscape";
import museumApp from "./museumApp";
import type { CaseStudyData } from "./types";

// The key is the id used in the URL: /case-study/<key>
// To add a project: create a new file here, import it, and add one line below.
export const caseStudiesData: Record<string, CaseStudyData> = {
  "glowy-app": glowy,
  urbanEscapeTour: urbanEscape,
  museumApp,
  healthcare: {
    title: "New Project Coming Soon",
    category: "In Development",
    objective: "This case study is currently in development. Check back soon to see the complete project details and design process.",
    comingSoon: true,
    gallery: [],
  },
};

export type { CaseStudyData, Img } from "./types";
