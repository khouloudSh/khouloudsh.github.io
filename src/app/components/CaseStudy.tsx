import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, ReactNode, useMemo, memo } from "react";
import Footer from "./Footer";

import { caseStudiesData } from "../data/caseStudies";
import type { Img } from "../data/caseStudies/types";

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                              */
/* ------------------------------------------------------------------ */
const BLOB_COLORS = [
  "rgba(20, 184, 166, 0.1)",
  "rgba(6, 182, 212, 0.1)",
  "rgba(16, 185, 129, 0.1)",
];

const Blobs = memo(({ count, size }: { count: number; size: number }) => {
  // Random values are created once, so the blobs stay in place on re-render
  const blobs = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        w: 100 + Math.random() * size,
        h: 100 + Math.random() * size,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
        dx: Math.random() * 100 - 50,
        dy: Math.random() * 100 - 50,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    [count, size]
  );

  return (
    <>
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${b.w}px`,
            height: `${b.h}px`,
            left: `${b.left}%`,
            top: `${b.top}%`,
            background: `radial-gradient(circle, ${b.color}, transparent)`,
            filter: "blur(40px)",
          }}
          animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
        />
      ))}
    </>
  );
});

/** Shows the image if a path is set, otherwise a dashed "add image" slot. */
const Pic = ({ src, alt, hint, onClick, className = "" }: { src?: string; alt: string; hint?: string; onClick?: () => void; className?: string }) =>
  src ? (
    <button type="button" onClick={onClick} className={`block w-full overflow-hidden rounded-xl  ${className}`}>
      <ImageWithFallback src={src} alt={alt} className="w-full h-auto" />
    </button>
  ) : (
    <div className={`flex min-h-[180px] items-center justify-center rounded-xl border-2 border-dashed border-slate-300 p-6 text-center text-sm text-slate-400 ${className}`}>
      {hint || `Add image: ${alt}`}
    </div>
  );

type Line = { role?: string; name: string };
const Lines = ({ items }: { items?: string | Line[] }) =>
  typeof items === "string" ? (
    <div>{items}</div>
  ) : (
    <div className="space-y-1">
      {items?.map((m, i) => (
        <div key={i}>
          {m.role && (
            <>
              <span className="font-bold">{m.role}</span> | {" "}
            </>
          )}
          {m.name}
        </div>
      ))}
    </div>
  );

const Sub = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-4 mt-12 text-2xl font-bold text-slate-900 first:mt-0">{children}</h3>
);

const Note = ({ children }: { children: ReactNode }) => (
  <p className="mt-3 text-lg leading-relaxed text-slate-700">{children}</p>
);

const Body = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`text-xl leading-relaxed text-slate-700 ${className}`}>{children}</p>
);

const Figure = ({
  title,
  image,
  alt,
  note,
  onOpen,
}: {
  title: string;
  image?: string;
  alt: string;
  note?: string;
  onOpen: (src: string, alt: string) => void;
}) => (
  <>
    <Sub>{title}</Sub>
    <Pic src={image} alt={alt} onClick={() => image && onOpen(image, alt)} />
    {note && <Note>{note}</Note>}
  </>
);

/** A grid of clickable images that open in the lightbox as one group. */
const ImageGrid = ({
  images,
  cols = "sm:grid-cols-2",
  className = "",
  onOpen,
}: {
  images: Img[];
  cols?: string;
  className?: string;
  onOpen: (image: Img, list: Img[]) => void;
}) => (
  <div className={`grid grid-cols-1 gap-4 ${cols} ${className}`}>
    {images.map((im) => (
      <Pic key={im.src} src={im.src} alt={im.alt} onClick={() => onOpen(im, images)} />
    ))}
  </div>
);

const Bullets = ({ items, dot = "text-teal-600" }: { items?: string[] | string; dot?: string }) => {
  const list = Array.isArray(items) ? items : items ? [items] : [];
  return (
    <ul className="space-y-2">
      {list.map((t, i) => (
        <li key={i} className="flex gap-2 text-lg text-slate-700">
          <span className={dot}>•</span>
          <span className="flex-1 text-justify">{t}</span>
        </li>
      ))}
    </ul>
  );
};

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** A numbered chapter: title on top, content underneath (single column). */
const Chapter = ({ n, title, label, children }: { n: string; title: string; label: string; children: ReactNode }) => (
  <motion.section
    id={slug(title)}
    data-chapter
    className="mb-24 scroll-mt-28"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-8 flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/30">
        <span className="text-xl font-bold text-white">{n}</span>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
        <p className="text-sm text-slate-500">{label}</p>
      </div>
    </div>
    <div className="min-w-0">{children}</div>
  </motion.section>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function CaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Img | null>(null);
  const [lightboxList, setLightboxList] = useState<Img[]>([]);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const caseStudy: any = caseStudiesData[id as string];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Highlights the section currently on screen in the side navigation.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-chapter]"));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-25% 0px -65% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [id]);

  // Closes the small-screen sections menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Opens the lightbox for any image, with a list so prev/next works per group.
  const openLightbox = (image: Img, list: Img[] = caseStudy?.gallery || []) => {
    setLightboxList(list.length ? list : [image]);
    setSelectedImage(image);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };
  const step = (dir: 1 | -1) => {
    const i = lightboxList.findIndex((img) => img.src === selectedImage?.src);
    setSelectedImage(lightboxList[(i + dir + lightboxList.length) % lightboxList.length]);
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <button onClick={() => navigate("/")} className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- Coming soon ---------------- */
  if (caseStudy.comingSoon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <motion.button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/30 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800"
              whileHover={{ x: -3, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </motion.button>
          </div>
        </nav>
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <Blobs count={20} size={200} />
          <div className="relative z-10 text-center max-w-3xl">
            <motion.div className="text-8xl mb-8" animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              ✨
            </motion.div>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Work in Progress
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-slate-300 mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              {caseStudy.title}
            </motion.p>
            <motion.p className="text-lg text-slate-400 mb-12 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              {caseStudy.comingSoonNote ?? caseStudy.objective}
            </motion.p>
            <motion.button
              onClick={() => navigate("/")}
              className="px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold shadow-2xl flex items-center gap-3 mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg">View Other Projects</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- Full case study ---------------- */
  const cs = caseStudy;
  const isWeb = id === "urbanEscapeTour";
  // Titles shown in the side navigation (must match the Chapter titles below).
  const toc = [
    cs.overview && "Overview",
    "Project goal",
    cs.audience && "Target audience",
    cs.challenges?.length > 0 && "Challenges & constraints",
    cs.research && "Research",
    cs.competitive && "Competitive analysis",
    "The problem",
    cs.hmw?.length > 0 && "How might we",
    cs.ideation && "Ideation",
    cs.sitemap && "Sitemap",
    cs.wireframes && "Wireframes",
    cs.testing && "Testing & insights",
    cs.iterations?.length > 0 && "Iterations",
    cs.designSystem && "Design system",
    "Final design",
    cs.results && "Results",
    cs.learnings && "Learnings & next steps",
  ].filter(Boolean) as string[];
  const goTo = (t: string) => document.getElementById(slug(t))?.scrollIntoView({ behavior: "smooth", block: "start" });
  let count = 0;
  const num = () => String(++count).padStart(2, "0");
  const open = (src: string, alt: string) => openLightbox({ src, alt }, [{ src, alt }]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-50/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            whileHover={{ x: -3, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.button>

          {/* Burger menu: only on screens smaller than lg, on the right */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close sections menu" : "Open sections menu"}
            aria-expanded={menuOpen}
            aria-controls="sections-menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 shadow-sm transition-colors hover:bg-slate-100"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Dropdown list of sections (same items as the left menu) */}
        {menuOpen && (
          <div id="sections-menu" className="lg:hidden max-h-[70vh] overflow-y-auto border-t border-slate-200 bg-slate-50 px-6 py-4">
            <p className="mb-3 text-sm font-semibold text-slate-900">On this page</p>
            <ul className="space-y-1 border-l border-slate-200">
              {toc.map((t) => {
                const active = activeId === slug(t);
                return (
                  <li key={t}>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        goTo(t);
                      }}
                      className={`-ml-px w-full border-l-2 py-2 pl-4 text-left text-base transition-colors ${active ? "border-teal-600 font-semibold text-teal-700" : "border-transparent text-slate-600 hover:text-slate-900"}`}
                    >
                      {t}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 relative overflow-hidden flex items-center" style={{ minHeight: isWeb ? "750px" : "100vh" }}>
        <div className="absolute inset-0">
          <Blobs count={15} size={300} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {isWeb && <div className="md:hidden mb-8" />}
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-300 text-sm font-semibold uppercase tracking-wider">{cs.category}</span>
              </div>
              <motion.h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <motion.span
                  className="bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  {cs.title}
                </motion.span>
              </motion.h1>
              <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <motion.div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 rounded-full" initial={{ width: 0 }} animate={{ width: "120px" }} transition={{ duration: 1, delay: 0.6 }} />
                <span className="text-slate-400 text-sm uppercase tracking-widest">Case Study</span>
              </motion.div>
              <motion.p className="text-xl text-slate-300 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                Transforming user experience through innovative design solutions
              </motion.p>
            </div>

            <motion.div className="relative flex items-center justify-center min-w-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}>
              {isWeb ? (
                <div className="relative w-full md:h-[650px] h-[400px] flex items-center justify-center order-first md:order-last">
                  <motion.div className="relative w-[70%] md:w-[65%] max-w-4xl z-30 shadow-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                    <ImageWithFallback src={cs.gallery[0].src} alt={cs.gallery[0].alt} className="w-full h-auto" />
                  </motion.div>
                  <motion.div className="absolute left-0 w-[40%] shadow-xl z-10 hidden md:block" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 0.5, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                    <ImageWithFallback src={cs.gallery[2].src} alt={cs.gallery[2].alt} className="w-full h-auto" />
                  </motion.div>
                  <motion.div className="absolute right-0 w-[40%] shadow-xl z-10 hidden md:block" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 0.5, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
                    <ImageWithFallback src={cs.gallery[1].src} alt={cs.gallery[1].alt} className="w-full h-auto" />
                  </motion.div>
                  <motion.div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 rounded-full blur-3xl" animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                  <motion.div className="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-full blur-3xl" animate={{ scale: [1.4, 1, 1.4], opacity: [0.8, 0.5, 0.8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
                </div>
              ) : (
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  {(cs.heroPhones ?? ["/images/glowy/phone1.png", "/images/glowy/phone2.png", "/images/glowy/phone3.png"]).map((image: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="absolute"
                      style={{ width: "260px", zIndex: idx === 1 ? 3 : 2 }}
                      initial={{ opacity: 0, x: idx === 0 ? -100 : idx === 2 ? 100 : 0 }}
                      animate={{ opacity: 1, x: idx === 0 ? -140 : idx === 2 ? 140 : 0, y: idx === 1 ? -20 : 10 }}
                      transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                      whileHover={{ y: idx === 1 ? -40 : -10, scale: 1.05, zIndex: 10 }}
                    >
                      {image ? (
                        <ImageWithFallback src={image} alt={`${cs.title} - Screen ${idx + 1}`} className="w-full h-auto" />
                      ) : (
                        <div className="flex aspect-[9/19.5] items-center justify-center rounded-3xl border-2 border-dashed border-white/30 bg-white/5 text-sm text-white/50">
                          Add screen {idx + 1}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center -mt-12 relative z-20">
        <motion.div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span className="text-white/70 text-sm">Scroll to explore</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 mt-20 lg:flex lg:gap-14">
        {/* Side navigation */}
        <aside className="hidden lg:block lg:w-56 lg:shrink-0">
          <nav aria-label="Case study sections" className="sticky top-28">
            <p className="mb-3 text-sm font-semibold text-slate-900">On this page</p>
            <ul className="space-y-1 border-l border-slate-200">
              {toc.map((t) => {
                const active = activeId === slug(t);
                return (
                  <li key={t}>
                    <button
                      onClick={() => goTo(t)}
                      className={`-ml-px w-full border-l-2 py-1.5 pl-4 text-left text-sm transition-colors ${active ? "border-teal-600 font-semibold text-teal-700" : "border-transparent text-slate-500 hover:text-slate-900"}`}
                    >
                      {t}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 max-w-4xl flex-1 [&_p]:text-justify">
          {/* Overview + Summary (not numbered) */}
          {cs.overview && (
            <section id="overview" data-chapter className="mb-24 scroll-mt-28">
              <dl className="grid gap-x-10 gap-y-8 border-b border-slate-200 pb-10 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Date", <div key="d">{cs.overview.date}</div>],
                  ["Role", <Lines key="r" items={cs.overview.role} />],
                  ["Team", <Lines key="t" items={cs.overview.team} />],
                  [
                    "Deliverables",
                    <div key="x" className="space-y-3">
                      <Lines items={cs.overview.deliverables} />
                      {cs.overview.links?.map((l: { label: string; href: string }) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-teal-700 underline-offset-4 hover:text-teal-900 hover:underline">
                          <ExternalLink className="h-4 w-4" />
                          {l.label}
                        </a>
                      ))}
                    </div>,
                  ],
                ].map(([label, value]) => (
                  <div key={label as string}>
                    <dt className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                      {label} <span className="ml-1 font-normal text-teal-600">↓</span>
                    </dt>
                    <dd className="text-base leading-relaxed text-slate-500">{value}</dd>
                  </div>
                ))}
              </dl>
              {cs.overview.tools && <p className="mt-6 text-slate-500">Tools: {cs.overview.tools}</p>}
              {cs.summary && (
                <div className="mt-10 max-w-4xl">
                  <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Summary</h2>
                  <Body>{cs.summary}</Body>
                </div>
              )}
            </section>
          )}

          {/* Project goal */}
          <Chapter n={num()} title="Project goal" label="What I set out to do">
            <Body>{cs.objective}</Body>
          </Chapter>

          {/* Target audience */}
          {cs.audience && (
            <Chapter n={num()} title="Target audience" label="Who I designed for">
              <Body>{cs.audience}</Body>
            </Chapter>
          )}

          {/* Challenges & constraints */}
          {cs.challenges?.length > 0 && (
            <Chapter n={num()} title="Challenges & constraints" label="What shaped the work">
              <ul className="space-y-4">
                {(Array.isArray(cs.challenges) ? cs.challenges : [cs.challenges]).map((t: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xl font-normal leading-relaxed text-slate-700">
                    <span className="text-teal-600">•</span>
                    <span className="flex-1 text-justify">{t}</span>
                  </li>
                ))}
              </ul>
            </Chapter>
          )}

          {/* Research */}
          {cs.research && (
            <Chapter n={num()} title="Research" label="Understanding the users">
              {cs.research.intro && <Body className="mb-8">{cs.research.intro}</Body>}

              {cs.research.survey?.image && <Figure title="Survey results" {...cs.research.survey} onOpen={open} />}

              <Sub>Personas</Sub>
              <ImageGrid images={cs.research.personas} cols="sm:grid-cols-3" onOpen={openLightbox} />

              {cs.research.journey && <Figure title="User journey" {...cs.research.journey} onOpen={open} />}

              {cs.research.empathy?.image && <Figure title="Empathy map" {...cs.research.empathy} onOpen={open} />}
            </Chapter>
          )}

          {/* Competitive analysis */}
          {cs.competitive && (
            <Chapter n={num()} title="Competitive analysis" label="What already exists">
              <Body className="mb-6">{cs.competitive.intro}</Body>

              <div className="overflow-x-auto rounded-2xl border border-slate-300 shadow-md">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                      <th className="w-1/5 px-6 py-4 text-sm font-semibold uppercase tracking-wider">Competitor</th>
                      <th className="w-2/5 px-6 py-4 text-sm font-semibold uppercase tracking-wider">Strengths</th>
                      <th className="w-2/5 px-6 py-4 text-sm font-semibold uppercase tracking-wider">Weaknesses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cs.competitive.competitors.map((c: any, i: number) => (
                      <tr key={i} className={`border-t border-slate-300 align-top ${i % 2 === 1 ? "bg-slate-100/70" : ""}`}>
                        <th scope="row" className="border-r border-slate-300 px-6 py-5 text-left text-lg font-bold text-slate-900">
                          {c.name}
                        </th>
                        <td className="border-r border-slate-300 px-6 py-5 text-lg leading-relaxed text-slate-700">
                          <span className="mr-2 font-bold text-teal-600">+</span>
                          {c.strengths}
                        </td>
                        <td className="px-6 py-5 text-lg leading-relaxed text-slate-700">
                          <span className="mr-2 font-bold text-rose-500">−</span>
                          {c.weaknesses}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {cs.competitive.opportunity && (
                <div className="mt-8 border-l-4 border-teal-500 pl-6">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-teal-700">The opportunity</p>
                  <p className="text-xl leading-relaxed text-slate-700">{cs.competitive.opportunity}</p>
                </div>
              )}
            </Chapter>
          )}

          {/* The problem */}
          <Chapter n={num()} title="The problem" label="What the research pointed to">

            <Body>{cs.problem}</Body>
            {cs.problemStatement && (
              <>
                <Sub>Problem statement</Sub>
                <p className="border-l-4 border-teal-500 pl-6 text-xl font-medium leading-relaxed text-slate-900">{cs.problemStatement.statement}</p>
                <Sub>Pain points</Sub>
                <Bullets items={cs.problemStatement.painPoints} dot="text-slate-400" />
              </>
            )}
          </Chapter>

          {/* How might we */}
          {cs.hmw?.length > 0 && (
            <Chapter n={num()} title="How might we" label="Turning problems into questions">
              <ol className="space-y-5">
                {cs.hmw.map((q: string, i: number) => (
                  <li key={i} className="flex gap-4 text-xl leading-relaxed text-slate-700">
                    <span className="w-6 shrink-0 font-semibold text-teal-600">{i + 1}.</span>
                    <span className="flex-1 text-justify">{q}</span>
                  </li>
                ))}
              </ol>
            </Chapter>
          )}

          {/* Ideation */}
          {cs.ideation && (
            <Chapter n={num()} title="Ideation" label="Exploring ideas">
              <Body>{cs.ideation.note}</Body>

              {cs.ideation.sketches?.length > 0 && (
                <>
                  <Sub>Rapid sketches</Sub>
                  <ImageGrid images={cs.ideation.sketches} onOpen={openLightbox} />
                </>
              )}

              {cs.ideation.storyboard && <Figure title="Storyboard" {...cs.ideation.storyboard} onOpen={open} />}
            </Chapter>
          )}

          {/* Sitemap */}
          {cs.sitemap && (
            <Chapter n={num()} title="Sitemap" label="How the app is organized">
              <Body className="mb-6">{cs.sitemap.note}</Body>
              <Pic
                src={cs.sitemap.image}
                alt={cs.sitemap.alt}
                onClick={() => open(cs.sitemap.image, cs.sitemap.alt)}
              />
            </Chapter>
          )}

          {/* Wireframes */}
          {cs.wireframes && (
            <Chapter n={num()} title="Wireframes" label="Structure before style">
              <Body className="mb-6">{cs.wireframes.note}</Body>
              {cs.wireframes.images.length > 0 ? (
                <ImageGrid images={cs.wireframes.images} onOpen={openLightbox} />
              ) : (
                <Pic alt="Wireframes" hint="Add wireframe images to wireframes.images" />
              )}
            </Chapter>
          )}

          {/* Testing & insights */}
          {cs.testing && (
            <Chapter n={num()} title="Testing & insights" label="What users showed me">
              <Body className="mb-6">{cs.testing.method}</Body>
              <div className="grid gap-4">
                {cs.testing.insights.map((t: string, i: number) => (
                  <div key={i} className="p-6">
                    <p className="mb-1 text-sm font-semibold text-teal-700">Insight {i + 1}</p>
                    <p className="text-lg text-slate-700">{t}</p>
                  </div>
                ))}
              </div>
            </Chapter>
          )}

          {/* Iterations */}
          {cs.iterations?.length > 0 && (
            <Chapter n={num()} title="Iterations" label="What I changed, and why">
              <div className="space-y-8">
                {cs.iterations.map((it: any, i: number) => (
                  <div key={i}>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[["Insight", it.insight], ["Change", it.change], ["Result", it.result]].map(([k, v]) => (
                        <div key={k}>
                          <p className="mb-1 text-sm font-semibold text-teal-700">{k}</p>
                          <p className="text-slate-700">{v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-6">
                      {[["Before", it.before], ["After", it.after]].map(([label, src]) => (
                        <div key={label}>
                          <p className="mb-2 text-sm text-slate-500">{label}</p>
                          <button
                            type="button"
                            onClick={() => open(src, `${label}: ${it.change}`)}
                            className="flex h-72 w-full items-center justify-center overflow-hidden rounded-xl sm:h-96"
                          >
                            <ImageWithFallback src={src} alt={`${label}: ${it.change}`} className="max-h-full max-w-full object-contain" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Chapter>
          )}

          {/* Design system */}
          {cs.designSystem && (
            <Chapter n={num()} title="Design system" label="Colors, type, components">
              <Body>{cs.designSystem.note}</Body>
              <ImageGrid images={cs.designSystem.image ?? []} cols="" className="mt-6" onOpen={openLightbox} />
            </Chapter>
          )}

          {/* Final design */}
          <Chapter n={num()} title="Final design" label="The solution">

            <Body>{cs.solution}</Body>

            {/* All screens */}
            <Sub>{isWeb ? "Web screens" : "App screens"}</Sub>
            {cs.gallery.length === 0 ? (
              <Pic alt="Screens" hint="Add your final screens to gallery" />
            ) : isWeb ? (
              <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
                {cs.gallery.map((image: Img, index: number) => {
                  const pattern = ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"];
                  return (
                    <motion.div
                      key={index}
                      className={`cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg ${pattern[index % pattern.length]}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.08 }}
                      whileHover={{ y: -6, zIndex: 10 }}
                      onClick={() => openLightbox(image)}
                    >
                      <ImageWithFallback src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 flex items-center justify-center bg-teal-900/60 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="text-sm font-semibold text-white">View full size</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                {cs.gallery.map((item: Img, index: number) => (
                  <motion.div key={index} className="cursor-pointer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.06 }} whileHover={{ scale: 1.05 }} onClick={() => openLightbox(item)}>
                    <div className="relative aspect-[9/19.5] bg-black rounded-2xl shadow-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent px-4 py-2 flex items-center justify-between text-white text-xs">
                        <span className="font-semibold">9:41</span>
                        <span className="text-[9px]">100%</span>
                      </div>
                      <ImageWithFallback src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {cs.gallery.length > 0 && (
              <p className="mt-6 text-center text-sm text-slate-500">Click any screen to view full size • {cs.gallery.length} screens total</p>
            )}

            {/* Key decisions */}
            {cs.keyDecisions && (
              <>
                <Sub>Key decisions</Sub>
                <div className="space-y-4">
                  {cs.keyDecisions.map((k: any, i: number) => (
                    <div key={i} className="p-6">
                      <h4 className="mb-1 text-lg font-bold text-slate-900">{k.decision}</h4>
                      <Body>{k.reason}</Body>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* Before & after */}
            {cs.beforeAfter && (
              <>
                <Sub>Before & after</Sub>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr>
                        <th scope="col" className="w-1/2 bg-slate-50 px-6 py-4 align-top">
                          <p className="text-sm font-semibold text-slate-500">Before</p>
                          <p className="text-lg font-bold text-slate-900">{cs.beforeAfter.beforeLabel}</p>
                        </th>
                        <th scope="col" className="w-1/2 bg-teal-50 px-6 py-4 align-top">
                          <p className="text-sm font-semibold text-teal-700">After</p>
                          <p className="text-lg font-bold text-slate-900">{cs.beforeAfter.afterLabel}</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cs.beforeAfter.before.map((item: string, i: number) => (
                        <tr key={i} className="border-t border-slate-200">
                          <td className="px-6 py-4 align-top text-slate-600">{item}</td>
                          <td className="bg-teal-50/40 px-6 py-4 align-top font-medium text-slate-900">
                            {cs.beforeAfter.after[i]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </Chapter>

          {/* Results */}
          {cs.results && (
            <Chapter n={num()} title="Results" label="What it achieved">
              <Body className="mb-6">{cs.results.note}</Body>
            </Chapter>
          )}

          {/* Learnings & next steps */}
          {cs.learnings && (
            <Chapter n={num()} title="Learnings & next steps" label="Looking back, looking ahead">
              <Body className="mb-6">{cs.learnings.note}</Body>
              <Sub>Next steps</Sub>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">{cs.learnings.nextSteps[0]}</p>
            </Chapter>
          )}

          {/* Back button */}
          <div className="flex justify-center pt-4">
            <motion.button
              onClick={() => {
                navigate("/");
                setTimeout(() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }), 100);
              }}
              className="group px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold shadow-2xl flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg">Back to All Projects</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <motion.div className="fixed inset-0 bg-black z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-50">
            <X className="w-10 h-10" />
          </button>
          {lightboxList.length > 1 && (
            <>
              <button onClick={() => step(-1)} aria-label="Previous" className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-teal-400 z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-sm">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={() => step(1)} aria-label="Next" className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-teal-400 z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-sm">
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          <div className="w-full h-full flex items-center justify-center p-8">
            <ImageWithFallback src={selectedImage.src} alt={selectedImage.alt} className="w-full h-full object-contain" />
          </div>
          {lightboxList.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              {lightboxList.findIndex((img) => img.src === selectedImage.src) + 1} / {lightboxList.length}
            </div>
          )}
        </motion.div>
      )}
      <Footer />
    </div>
  );
}