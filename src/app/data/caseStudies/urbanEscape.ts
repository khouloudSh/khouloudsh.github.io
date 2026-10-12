import type { CaseStudyData } from "./types";

// Urban Escape Tours: website redesign case study
// Everything on this project's page lives in this file and is NOT shared with
// any other project. Replace the [bracketed] text. Delete a section's field
// to hide that section on the page.
const urbanEscape: CaseStudyData = {
  title: "Urban Escape Tours: Website Redesign",
  category: "Web Design",
  overview: {
    date: "January 2026",
    role: [{ name: "UX Research" }, { name: "UX/UI Design" }, { name: "Prototyping" }],
    team: [{ name: "Self-directed" }, { name: "Solo concept project" }],
    deliverables: [{ name: "Website redesign" }, { name: "Responsive layouts" }, { name: "Interactive prototype" }],
    tools: "",
    links: [{ label: "Figma prototype", href: "https://www.figma.com/proto/Kxa7mrRxFXEO86OjVSilWE/Untitled?page-id=0%3A1&node-id=31-859&viewport=1213%2C1044%2C0.36&t=HB48ZdeHs2i676Ub-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A859" }],
  },
  hero: "/images/urbanEscape/HomeTop.png",
  thumbnail: "/images/urbanEscape/HomeTop.png",
  objective: "Redesign an existing travel booking website to make discovering and comparing tour packages faster and less overwhelming, while making trip details easy to actually read.",
  beforeAfter: {
    beforeLabel: "The original site",
    afterLabel: "The redesigned experience",
    before: [
      "All tour packages dumped in one long, unorganized list",
      "No filtering by destination, trip length, or category",
      "Required excessive scrolling to compare options",
      "Pricing was often inaccurate or unclear",
      "Trip details written in dense, uninterrupted paragraphs with no day-by-day structure",
    ],
    after: [
      "Homepage highlights only the most popular packages, with a clear link to the full list",
      "Dedicated packages page with filters for destination, trip length, and category",
      "Each package shown as a card with image, title, duration, and destination at a glance",
      "Trip details broken into day-by-day tabs (Day 1, Day 2, Day 3...) instead of long paragraphs",
      "Key details and photos highlighted per day, making the itinerary easy to scan",
    ],
  },
  solution: "I redesigned the packages page around a filtering system that lets users narrow results by destination, trip length, and category, so they can find relevant tours in seconds instead of scrolling through everything. On the detail pages, I broke the dense paragraphs into scannable sections with clear headings, so users can quickly find what they're looking for instead of reading a wall of text.",
  keyDecisions: [
    { decision: "Highlighted only the most popular packages on the homepage", reason: "The original homepage overwhelmed users with every package at once. Surfacing the most relevant options first reduces decision fatigue, while a clear link still leads to the full list." },
    { decision: "Added filters for destination, trip length, and category", reason: "Lets users narrow results to what actually matters to them instead of scrolling through unrelated packages." },
    { decision: "Broke trip details into day-by-day tabs instead of long paragraphs", reason: "Dense writing made it hard to know what each day involved. Tabs make the itinerary scannable and let users quickly find the information they care about." },
  ],
  figmaLink: "https://www.figma.com/proto/Kxa7mrRxFXEO86OjVSilWE/Untitled?page-id=0%3A1&node-id=31-859&viewport=1213%2C1044%2C0.36&t=HB48ZdeHs2i676Ub-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A859",
  gallery: [
    { src: "/images/urbanEscape/HomeTop.png", alt: "Homepage showing highlighted popular tour packages" },
    { src: "/images/urbanEscape/Detail.png", alt: "Trip detail page with day-by-day tabs" },
    { src: "/images/urbanEscape/Packages.png", alt: "Packages page with filtering by destination and trip length" },
    { src: "/images/urbanEscape/Contact.png", alt: "Contact page" },
    { src: "/images/urbanEscape/faq.png", alt: "Frequently asked questions page" },
  ],
  keyTakeaways: [
    { title: "Information Architecture", desc: "Reorganizing content mattered more than restyling it." },
    { title: "Scannability", desc: "Breaking up dense text made trip details actually usable." },
    { title: "Self-Directed Project", desc: "Redesigned independently to practice solving real, observed UX problems." },
  ],

  // ---- Sections ----
  summary: "Urban Escape Tours is a travel booking website where visitors had to scroll through one long, unfiltered list of tour packages, and trip details were buried in dense paragraphs. I redesigned the site as a self-directed concept project to make finding and comparing tours faster. I added filters for destination, trip length and category, highlighted only the most popular packages on the homepage, and split each itinerary into clear day-by-day tabs. The result is a site where visitors can find a relevant trip in seconds and read its details at a glance.",
  audience: "Urban Escape Tours is for travelers who book guided trips online and compare several options before choosing. They are mostly adults planning a short getaway or a group trip, from first-time tour bookers to experienced travelers. They usually have a few things in mind, such as a destination, how many days they have, or the kind of trip they want. Most of them browse on both desktop and mobile. What they have in common is that they want to compare packages quickly and understand what each trip includes, without scrolling through long lists or reading dense paragraphs.",
  challenges: [
    "Solo concept project: I handled research, design and prototyping myself, so I had to decide which problems mattered most and not try to fix everything.",
    "No access to the company's analytics or customers, so I based my decisions on what I could observe on the original site and on common traveler behavior.",
    "Many packages and a lot of text: I had to fit a long list of tours and long itineraries into a layout that stays easy to scan.",
    "Filtering without overwhelming: the filters for destination, trip length and category had to help people narrow results without making the page more complicated.",
  ],
  research: {
    intro: "To understand the problem before designing, I used three types of research. First, I went through the original Urban Escape Tours website step by step, the way a visitor planning a trip would, and noted where finding and comparing tours became difficult. Second, I reviewed five competitor travel and booking sites to see how they handle filtering, pricing and trip details. Third, I had informal conversations with six people who book trips online. The same frustrations came up again and again: too many options with no way to filter them, unclear prices and what is included, and long, dense trip descriptions. The competitor sites handled these better. They showed clear pricing and inclusions, offered filters or search, and kept text short so visitors could find what they needed quickly. These findings shaped the three personas, the user journey and the empathy map below.",
    personas: [
      { src: "/images/urbanEscape/persona-maya.png", alt: "Persona: Maya Thompson, 29, marketing coordinator" },
      { src: "/images/urbanEscape/persona-daniel.png", alt: "Persona: Daniel Okafor, 42, accountant" },
      { src: "/images/urbanEscape/persona-linda.png", alt: "Persona: Linda Chen, 58, retired teacher" },
    ],
    journey: {
      image: "/images/urbanEscape/user-journey-maya.png",
      alt: "User journey map for Maya, from opening the site to deciding whether to book",
      note: "Maya's journey shows the biggest drop-off between browsing and comparing. With no filters and no summary on each package, she has to open page after page just to find the basics. Daniel's journey is similar but stalls at the \"Read details\" stage, where the long paragraphs hide what is included. Linda's journey gets stuck earlier, at \"Browse\", because she feels overwhelmed by too many packages at once.",
    },
    empathy: {
      image: "/images/urbanEscape/empathy-map-aggregated.png",
      alt: "Aggregated empathy map from conversations with friends and family who book trips online",
      note: "I combined what friends and family told me about booking trips online into one aggregated empathy map. Most of them felt overwhelmed by the number of options, confused about what was included in the price, and impatient with long descriptions, and they felt relieved whenever the information was clear. This shaped the filters, the trip cards and the day-by-day tabs.",
    },
  },
  problemStatement: {
    statement: "Travelers who want to book a guided trip online need to find and compare suitable tours quickly and understand exactly what each one includes, because the original site makes them scroll through every package and read dense text to find the basics.",
    painPoints: [
      "Every package appears in one long list with no filters for destination, trip length or category",
      "Prices and what is included are unclear or hard to find",
      "Trip details are written in dense paragraphs with no day-by-day structure",
      "Comparing tours means opening many pages and keeping track of them manually",
    ],
  },
  /*competitive: {
    intro: "[Which products you compared and why.]",
    competitors: [
      { name: "[Competitor A]", strengths: "[What they do well]", weaknesses: "[Where they fall short]" },
      { name: "[Competitor B]", strengths: "[What they do well]", weaknesses: "[Where they fall short]" },
    ],
    opportunity: "[The gap your design can fill.]",
  },
  */
  hmw: [
    "How might we help visitors find a tour that fits their destination and trip length without scrolling through every package?",
    "How might we show the most important details of each tour at a glance, so comparing options is quick?",
    "How might we make prices and what is included easy to find?",
    "How might we turn long trip descriptions into a plan that is easy to scan, day by day?",
    "How might we help visitors feel confident about their choice, so they book instead of leaving for another site?",
  ],
  ideation: {
    note: "With the How Might We questions as a guide, I explored ideas for the three screens where visitors struggled most: the homepage, the packages page and the trip detail page. For the packages page, I compared a few ways to filter tours, such as a sidebar, a row of dropdowns and a filter bar at the top. For the trip details, I compared breaking the itinerary into sections with breaking it into day-by-day tabs. I chose the options that made it quickest to find a tour and read its plan: a filter bar for destination, trip length and category, and day-by-day tabs.",
  },
 /* wireframes: {
    note: "",
    images: [],
  },*/
  sitemap: {
  note: "",
  image: "/images/urbanEscape/sitemap-urban-escape-tours.png",
  alt: "Sitemap of the app showing the main sections and how they connect.",
},

  /*
  testing: {
    method: "[Usability study: how many participants, remote or in person, which tasks.]",
    insights: ["[Insight 1]", "[Insight 2]", "[Insight 3]"],
  },*/
  /*
  iterations: [
    { insight: "[What testing showed]", change: "[What you changed]", result: "[What improved]", before: "", after: "" },
  ],*/
  designSystem: {
    note: "I built a design system in Figma to keep the whole site consistent and to make changes quick. I created variables for the colors and spacing, and built all the components the site needs, such as buttons, cards, filters and navigation. The color palette was chosen to feel calm and trustworthy while still fitting the spirit of travel and adventure: the cool tones bring a sense of serenity, which helps visitors relax while they browse and compare trips. Because every color, spacing value and component is defined once and reused, the design stays consistent from the homepage to the trip detail pages and is easy to update.",
    image: [
      { src: "/images/urbanEscape/colors.png", alt: "Color palette with token names, hex codes and usage." },
      { src: "/images/urbanEscape/typography-compact.png", alt: "Typography scale showing Hahmlet headings, Figtree body text and captions." },
      { src: "/images/urbanEscape/buttons-badges-icons-compact.png", alt: "UI components including buttons, badges and icons." },
    ],
  },
  results: {
    note: "The redesign transforms the travel website into a more organized and user-friendly experience, helping travelers discover relevant packages and understand trip details more easily.",
  },
  learnings: {
    note: "This project taught me how information architecture and content hierarchy can influence the user experience. I learned that improving usability isn't just about visual design; it's also about presenting the right information at the right time.",
    nextSteps: ["I would conduct usability testing to evaluate how easily users can find relevant packages, compare tours, and understand itineraries. Their feedback would help validate my design decisions and identify further improvements."],
  },
};

export default urbanEscape;
