export type Img = { src: string; alt: string };

export interface CaseStudyData {
  title: string;
  category: string;
  hero?: string;
  thumbnail?: string;
  heroPhones?: string[];
  figmaLink?: string;
  comingSoon?: boolean;

  overview?: {
    date: string;
    role: string | { role?: string; name: string }[];
    team: { role?: string; name: string }[];
    deliverables: string | { role?: string; name: string }[];
    tools?: string;
    links?: { label: string; href: string }[];
  };
  summary?: string;
  objective: string;
  audience?: string;
  challenges?: string[];
  research?: {
    intro?: string;
    survey?: { image: string; alt: string; note?: string };
    personas?: Img[];
    journey?: { image: string; alt: string; note: string };
    empathy?: { image: string; alt: string; note: string };
  };
  problem?: string;
  problemStatement?: { statement: string; painPoints: string[] };
  competitive?: {
    intro: string;
    competitors: { name: string; strengths: string; weaknesses: string }[];
    opportunity?: string;
  };
  hmw?: string[];
  ideation?: { note: string; sketches?: Img[]; storyboard?: { image: string; alt: string; note: string } };
  sitemap?: { note: string; image: string; alt: string };
  wireframes?: { note: string; images: Img[] };
  testing?: { method: string; insights: string[] };
  iterations?: { insight: string; change: string; result: string; before: string; after: string }[];
  designSystem?: {
    note: string;
    image?: Img[];
  };
  solution?: string;
  keyDecisions?: { decision: string; reason: string }[];
  beforeAfter?: { beforeLabel: string; afterLabel: string; before: string[]; after: string[] };
  gallery: Img[];
  results?: { note: string };
  keyTakeaways?: { title: string; desc: string }[];
  learnings?: { note: string; nextSteps: string[] };
  comingSoonNote?: string;
}