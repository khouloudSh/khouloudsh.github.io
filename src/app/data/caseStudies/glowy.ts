import type { CaseStudyData } from "./types";

// Glowy: skincare app case study
// Everything on this project's page lives in this file and is NOT shared with
// any other project. Replace the [bracketed] text. Delete a section's field
// to hide that section on the page.
const glowy: CaseStudyData = {
  title: "Glowy: Personalized Skincare, Simplified",
  category: "Mobile Design",
  overview: {
    date: "March 2026",
    role: [{ name: "UX Research" }, { name: "UX/UI Design" }],
    team: [{ name: "Self-directed" }, { name: "Solo concept project" }],
    deliverables: [{ name: "Mobile app (iOS)" }, { name: "Interactive prototype" }, { name: "User flows" }],
    tools: "",
    links: [{ label: "Figma prototype", href: "https://www.figma.com/proto/n1J8SlmGoCNzPbiQClcHJa/Glowy?page-id=0%3A1&node-id=1-345&viewport=302%2C241%2C0.27&t=eLOV5sUp3UE1NrLR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A345" }],
  },
  hero: "/images/glowy/welcomePage.png",
  thumbnail: "/images/glowy/home0.PNG",
  objective: "Design a mobile skincare app that provides personalized skin analysis, product recommendations, and tailored skincare routines.",
  problem: "Most skincare apps overwhelm users with generic advice, endless product catalogs, or overly technical routines that assume prior skincare knowledge. Users are left unsure what actually applies to their skin, in what order, or why. The result is that people abandon their routines within weeks, or never start one at all.",
  beforeAfter: {
    beforeLabel: "Typical skincare apps",
    afterLabel: "Glowy's approach",
    before: [
      "Generic product suggestions, not tailored to skin type",
      "No real insight into what the skin actually needs",
      "Overwhelming for beginners with no clear starting point",
      "No sense of progress, so routines get abandoned",
      "Pushes new products instead of using what you own",
    ],
    after: [
      "AI skin scan reveals actual skin type and needs",
      "Personalized routine, not generic advice",
      "Simple, step-by-step guidance built for beginners",
      "Progress tracking keeps users motivated",
      "Log products you already own — no forced purchases",
    ],
  },
  keyDecisions: [
    { decision: "A short onboarding quiz instead of a long profile setup", reason: "Reduces drop-off and lets users see value — their personalized routine — within seconds, instead of a lengthy setup before any payoff." },
    { decision: "Let users log products they already own instead of pushing new ones", reason: "Builds trust and avoids feeling like a sales funnel. The app works with what users have rather than assuming they'll buy something new." },
    { decision: "Added a community layer for real user recommendations", reason: "People with similar skin types are more credible than generic influencer advice, and it keeps users engaged beyond just following a routine alone." },
  ],
  solution: "I designed Glowy around a short onboarding quiz that captures skin type, concerns, and lifestyle habits, then generates a personalized morning and night routine broken into clear, ordered steps. Instead of pushing users to buy new products, Glowy lets them log what they already own and builds the routine around it, with optional product recommendations only when helpful. A community layer lets users share their routines and get real recommendations from people with similar skin types, rather than generic influencer advice.",
  figmaLink: "https://www.figma.com/proto/n1J8SlmGoCNzPbiQClcHJa/Glowy?page-id=0%3A1&node-id=1-345&viewport=302%2C241%2C0.27&t=eLOV5sUp3UE1NrLR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A345",
  gallery: [
    { src: "/images/glowy/login.PNG", alt: "Glowy login screen" },
    { src: "/images/glowy/q1.PNG", alt: "Onboarding quiz asking about skin type" },
    { src: "/images/glowy/q4.PNG", alt: "Onboarding quiz asking about skincare goals" },
    { src: "/images/glowy/aiSkinAnalyze.PNG", alt: "AI skin analysis results screen" },
    { src: "/images/glowy/aiscaning.PNG", alt: "AI skin scanning in progress" },
    { src: "/images/glowy/home1.PNG", alt: "Home screen showing personalized routine" },
    { src: "/images/glowy/home2.PNG", alt: "Home screen with routine progress tracking" },
    { src: "/images/glowy/morningRoutin.PNG", alt: "Morning skincare routine steps" },
    { src: "/images/glowy/nightRoutine.PNG", alt: "Night skincare routine steps" },
    { src: "/images/glowy/overlay.PNG", alt: "Routine step detail overlay" },
    { src: "/images/glowy/community.PNG", alt: "Community feed with user recommendations" },
    { src: "/images/glowy/diary.PNG", alt: "Skin diary tracking progress over time" },
  ],
  keyTakeaways: [
    { title: "User-Centered", desc: "Prioritized reducing decision fatigue over feature count." },
    { title: "Simplicity by Design", desc: "Every screen was tested against one question: could a beginner use this with zero explanation?" },
    { title: "Self-Directed Project", desc: "Designed independently to explore how to make routine-based habit apps feel approachable rather than clinical." },
  ],

  // ---- Sections ----
  summary: "Glowy is a self-initiated UX/UI design project focused on making skincare simpler and more accessible. The app helps users understand their skin’s needs through personalized skin analysis, recommends suitable skincare products, and creates customized routines. Designed for both beginners and experienced skincare users, Glowy aims to reduce confusion and make daily skincare easier to manage.",
  audience: "Glowy is designed for adults, including skincare beginners and experienced users. It targets people who want to better understand their skin, discover suitable products, and build personalized skincare routines. While beginners can use the app to navigate the overwhelming world of skincare, experienced users can rely on it to organize and maintain their daily routines.",
  challenges: [
    "Limited user research: Research was conducted through online surveys and feedback from friends and family, limiting the diversity of user perspectives.",
    "Different experience levels: Designing for both skincare beginners and experienced users required balancing simplicity with useful, personalized information.",

  ],
  research: {
    intro: "To better understand users’ skincare habits, challenges, and needs, I conducted online surveys and informal interviews with friends and family. The research focused on understanding their skincare knowledge, difficulties choosing suitable products, and challenges maintaining a consistent routine. These insights helped me identify common pain points and guide the design of a more personalized and user-friendly skincare experience.",
    survey: {
      image: "/images/glowy/survey-results.png",
      alt: "Eight donut charts showing survey results from 25 people on age, gender, skincare comfort, routines and interest in the app.",
      note: "I surveyed 25 people. Most are beginners or somewhere in between, 56% find it hard to choose products, and 76% would use the app or might.",
    },
    personas: [
      { src: "/images/glowy/persona-1-amara.png", alt: "Glowy login screen" },
      { src: "/images/glowy/persona-2-daniel.png", alt: "Onboarding quiz asking about skin type" },
      { src: "/images/glowy/persona-3-margaret.png", alt: "Onboarding quiz asking about skincare goals" }
    ],
    journey:
    {
      image: "/images/glowy/journey-amara-table.png",
      alt: "User journey table for Amara across five stages, with her tasks, feelings and design improvements.",
      note: "Amara’s journey is shown in full as the main example. The other two personas follow the same five stages, with different needs along the way. Daniel, who has low vision, finds the app through his wife’s suggestion. He relies on large text and strong contrast during the quiz and the skin summary, and he follows a short morning and night routine with simple check-offs. Margaret, who has arthritis, begins on her tablet with help from her granddaughter. She needs large tap targets, very few steps and one-tap check-offs to stay consistent, and she may need packaging tips for products she can open easily. Across all three personas, the app has to stay clear, simple and accessible at every step.",
    },
    empathy: {
      image: "",
      alt: "",
      note: "",
    },
  },
  problemStatement: {
    statement: "Skincare beginners need a simple, personalized routine they can follow one step at a time, because most apps give generic advice, assume prior knowledge and push new products, which leaves people unsure what to do and likely to give up.", painPoints: [
      "Advice is generic and doesn't take the person's actual skin type, concerns or goals into account",
      "Beginners don't know which products apply to them, in what order to use them, or why",
      "Routines and ingredient information are often technical and assume prior skincare knowledge",
      "Apps push new products instead of working with what people already own",
      "Without a clear plan or visible progress, people lose motivation and abandon their routine within weeks",
    ],
  },
  competitive: {
    intro: "I reviewed four skincare apps that sit closest to Glowy: SkinSort, Skin Bliss, Skincare Routine: BasicBeauty and Skan. Together they cover the main ways people look after their skin digitally: checking product ingredients, scanning the face with AI, and organizing a routine. I compared what each does well and where a beginner would still be left without a clear plan.",
    competitors: [
      {
        name: "SkinSort",
        strengths: "Detailed ingredient checker, product scanner and product comparison, plus a routine builder and a skincare community.",
        weaknesses: "Advanced features such as routine insights need a paid Premium plan, and free accounts get a limited number of product scans.",
      },
      {
        name: "Skin Bliss",
        strengths: "AI face scan, personalized routines, ingredient safety checks, photo-based progress tracking and a shelf analysis of products you own.",
        weaknesses: "The full experience is sold through several paid plans and programs.",
      },
      {
        name: "Skincare Routine: BasicBeauty",
        strengths: "Simple, free tool for creating and sticking to a routine, with a focus on privacy.",
        weaknesses: "Unlimited routines, unlimited products and progress tracking are premium features, and the listing describes a routine organizer, not a skin analysis.",
      },
      {
        name: "Skan",
        strengths: "Quick selfie scan that detects concerns like acne, hydration and wrinkles, with product recommendations.",
        weaknesses: "Offers paid Premium subscriptions, and the listing focuses on scan results and product recommendations, not a step-by-step routine.",
      },
    ],
    opportunity: "Skin Bliss is the closest competitor, combining an AI scan, personalized routines and a shelf analysis. Glowy aims to stand out through simplicity: a short quiz and scan that lead to one clear morning and night routine, shown one step at a time, built around the products people already own.",
  },
  //hmw: ["How might we [question 1]?", "How might we [question 2]?", "How might we [question 3]?"],
  ideation: {
    note: "With the How Might We questions as a guide, I worked out how Glowy could take a beginner from not knowing where to start to following a routine with confidence. I focused on three things: the first-time experience, the daily routine and staying motivated. For the first-time experience, I chose a short onboarding quiz and an AI skin scan over a long profile setup, so users see their personalized routine within seconds. For the daily routine, I broke it into clear, ordered morning and night steps that a beginner can follow without any prior knowledge. To avoid pushing purchases, I let people log the products they already own and built the routine around them. To keep people engaged, I added progress tracking and a community of people with similar skin types.",
    sketches: [],
  },
  sitemap: {
    note: "",
    image: "/images/glowy/glowy-sitemap.png",
    alt: "Sitemap of the app showing the main sections and how they connect.",
  },
  testing: {
    method: "I tested the Glowy prototype with four to five friends. Each of them tried it on their own and sent me their feedback, so the results are informal and reflect what they chose to tell me. I used their comments to decide what to change in the design, then shared the updated version with the same friends to try again.",
    insights: [
      "The brown color palette felt heavy and dark, some text was hard to read on it, and the overall look didn't feel like a skincare or wellness app.",
      "Friends wanted a faster way to sign in, so signing in with Google or Facebook was added alongside email.",
      "There was no way to recover a forgotten password.",
      "There was no clear way to sign up for people who didn't have an account yet.",
      "The bottom menu was hard to tell apart without icons.",
      "Friends wanted to know how the weather affects their skin, so UV index and humidity were added to the home screen.",
    ],
  },
  iterations: [
    {
      insight: "The brown palette felt heavy and dark, some text was hard to read on it, and it didn't feel like a skincare or wellness app.",
      change: "I replaced the brown palette with a soft green one that feels calmer and fresher, and made the text easier to read.",
      result: "The updated design reads more like a skincare app, and the text is clearer. The same friends tried this version again.",
      before: "/images/glowy/before-welcome.png",
      after: "/images/glowy/welcome.PNG",
    },
    {
      insight: "Friends wanted a faster way to sign in, couldn't recover a forgotten password, and had no clear way to sign up.",
      change: "I switched the login to email, added Google and Facebook sign-in, a Forgot Password link and a Sign Up link, and kept the Continue as Guest option.",
      result: "The login now covers the main ways people expect to get into an app. The same friends tried it again.",
      before: "/images/glowy/before-login.png",
      after: "/images/glowy/login.PNG",
    },
    {
      insight: "The bottom menu was hard to tell apart without icons, and friends wanted to know how weather affects their skin.",
      change: "I added icons to the bottom menu and placed UV index and humidity cards at the top of the home screen.",
      result: "Navigation is easier to scan, and the home screen now shows conditions that matter to skin care. The same friends tried it again.",
      before: "/images/glowy/before-home.png",
      after: "/images/glowy/home0.PNG",
    },
  ],
  designSystem: {
    note: "",
    image: [{ src: "/images/glowy/glowy-design-system.png", alt: "Glowy login screen" }],
  },
  results: {
    note: "Glowy is a mobile app concept that turns skincare into a simple, personalized routine a beginner can follow one step at a time. A short onboarding quiz and an AI skin scan lead to clear morning and night routines, built around the products people already own, with progress tracking and a community to keep them motivated. I tested the prototype with four to five friends, and their feedback shaped the final design: a calmer green palette that is easier to read and feels more like a skincare app, a more complete login with Google and Facebook sign-in and password recovery, and a clearer home screen with a labeled, icon-based menu and the UV index and humidity. When the same friends tried the updated version, the app had a clearer look and an easier path from the first screen to the daily routine.",
  },
  learnings: {
    note: "The biggest lesson from Glowy was that real feedback changes design decisions. My friends' comments led me to change the color palette, the login and the home screen, and none of those problems were obvious to me while I was designing. It also showed me why accessibility has to be part of the design from the start: some text was hard to read on the brown palette, and I only found that out after people tried the prototype. If I did this project again, I would test earlier, before polishing the visuals, so that problems like these show up while they are still quick and cheap to fix. From now on, I will keep accessibility in mind from the first sketch and bring in feedback sooner.",
    nextSteps: [
      "My next step for Glowy would be to develop the skin diary and progress tracking further, so people can see how their skin changes over time and stay motivated to keep following their routine.",
    ],
  },
};

export default glowy;
