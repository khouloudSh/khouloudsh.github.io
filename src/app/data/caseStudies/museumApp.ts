import type { CaseStudyData } from "./types";

// Museum App case study (skeleton, ready to fill in)
// Everything on this project's page lives in this file and is NOT shared with
// any other project. Replace the [bracketed] text. Delete a section's field
// to hide that section on the page.
const museumApp: CaseStudyData = {
  title: "Museum App",
  comingSoon: true,
  comingSoonNote: "I'm designing a mobile app that helps museum visitors explore and enjoy their visit. This case study is a work in progress, and the design is still underway. Check back soon to see the full process.",
  category: "Mobile Design",
  overview: {
    date: "October 2026",
    role: [{ name: "UX Research" }, { name: "UX/UI Design" }],
    team: [{ name: "Self-directed" }, { name: "Solo concept project" }],
    deliverables: [{ name: "Mobile app" }, { name: "Interactive prototype" }, { name: "User flows" }],
    tools: "",
    //links: [{ label: "Figma prototype", href: "" }], // add your prototype URL (or delete this line)
  },
  heroPhones: ["", "", ""], // add 3 screen image paths for the hero
  hero: "",
  thumbnail: "",
  objective: "[Project goal: what this app should help people do.]",
  problem: "[The problem: what is wrong today, and who it affects.]",
  beforeAfter: {
    beforeLabel: "[Before: how it works today]",
    afterLabel: "[After: the new experience]",
    before: ["[Before point 1]", "[Before point 2]", "[Before point 3]"],
    after: ["[After point 1]", "[After point 2]", "[After point 3]"],
  },
  solution: "[Final design: describe the solution in 3-4 sentences.]",
  keyDecisions: [
    { decision: "[Decision 1]", reason: "[Why you made it.]" },
    { decision: "[Decision 2]", reason: "[Why you made it.]" },
    { decision: "[Decision 3]", reason: "[Why you made it.]" },
  ],
  figmaLink: "",
  gallery: [], // add { src: "/images/museum/home.png", alt: "..." } items
  keyTakeaways: [
    { title: "[Takeaway 1]", desc: "[One sentence.]" },
    { title: "[Takeaway 2]", desc: "[One sentence.]" },
    { title: "[Takeaway 3]", desc: "[One sentence.]" },
  ],

  // ---- Sections ----
  summary: "[3-4 lines: the problem, what you did, and the result.]",
  audience: "[Who you designed for: age range, context, goals, experience level.]",
  challenges: [
    "[Constraint 1: e.g. 4-week timeline, solo designer]",
    "[Constraint 2: e.g. no access to real user data]",
    "[Constraint 3: e.g. beginners with no prior knowledge]",
  ],
  research: {
    intro: "[How you researched: interviews, surveys, reading reviews. How many people?]",
    personas: [

    ],
    journey: { image: "", alt: "User journey map", note: "[One sentence: biggest insight from the journey map.]" },
    empathy: { image: "", alt: "Empathy map", note: "[One sentence: what the empathy map revealed.]" },
  },
  problemStatement: {
    statement: "[User] needs [need] because [insight].",
    painPoints: ["[Pain point 1]", "[Pain point 2]", "[Pain point 3]"],
  },
  competitive: {
    intro: "[Which products you compared and why.]",
    competitors: [
      { name: "[Competitor A]", strengths: "[What they do well]", weaknesses: "[Where they fall short]" },
      { name: "[Competitor B]", strengths: "[What they do well]", weaknesses: "[Where they fall short]" },
    ],
    opportunity: "[The gap your design can fill.]",
  },
  hmw: ["How might we [question 1]?", "How might we [question 2]?", "How might we [question 3]?"],
  ideation: {
    note: "[How you explored ideas: rapid sketching, Crazy 8s, etc.]",
    sketches: [],
    storyboard: { image: "", alt: "Storyboard", note: "[What the storyboard shows.]" },
  },
  sitemap: {
    note: "Short explanation of how the app is organized and why.",
    image: "/images/glowy/sitemap.png",
    alt: "Sitemap of the app showing the main sections and how they connect.",
  },
  wireframes: {
    note: "[Low-fi or mid-fi? What did you focus on?]",
    images: [],
  },
  testing: {
    method: "[Usability study: how many participants, remote or in person, which tasks.]",
    insights: ["[Insight 1]", "[Insight 2]", "[Insight 3]"],
  },
  iterations: [
    { insight: "[What testing showed]", change: "[What you changed]", result: "[What improved]", before: "", after: "" },
  ],
  designSystem: {
    note: "[Brief note on the system's principles.]",
    image: [],
  },
  results: {
    note: "[Short closing paragraph: what the project achieved.]",
  },
  learnings: {
    note: "",
    nextSteps: ["[Next step 1]", "[Next step 2]"],
  },
};

export default museumApp;
