import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";

// Mock data for case studies
const caseStudiesData = {
  "glowy-app": {
    title: "Glowy: Personalized Skincare, Simplified",
    category: "Mobile Design",
    hero: "/images/glowy/home.png",
    thumbnail: "/images/glowy/home.png",
    objective: "Design a mobile app that removes the guesswork from skincare by generating a personalized routine based on each user's skin type, concerns, and goals, then guiding them through it one simple step at a time.",
    problem: "Most skincare apps overwhelm users with generic advice, endless product catalogs, or overly technical routines that assume prior skincare knowledge. Users are left unsure what actually applies to their skin, in what order, or why. The result is that people abandon their routines within weeks, or never start one at all.",
    solution: "I designed Glowy around a short onboarding quiz that captures skin type, concerns, and lifestyle habits, then generates a personalized morning and night routine broken into clear, ordered steps. Instead of pushing users to buy new products, Glowy lets them log what they already own and builds the routine around it, with optional product recommendations only when helpful. A community layer lets users share their routines and get real recommendations from people with similar skin types, rather than generic influencer advice.",
    impact: "• 45% reduction in task completion time\n• 38% increase in user satisfaction scores\n• 60% decrease in support tickets\n• 25% increase in daily active users",
    figmaLink: "https://www.figma.com/proto/n1J8SlmGoCNzPbiQClcHJa/Glowy?page-id=0%3A1&node-id=1-345&viewport=302%2C241%2C0.27&t=eLOV5sUp3UE1NrLR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A345",
    gallery: [
      "/images/glowy/home.png",
      "/images/glowy/welcome.png",
      "/images/glowy/login.png",
      "/images/glowy/q1.png",
      "/images/glowy/q4.png",
      "/images/glowy/aiSkinAnalyze.png",
      "/images/glowy/analyseComplete.png",
    ],
    keyTakeaways: [
      { title: "User-Centered", desc: "Prioritized reducing decision fatigue over feature count." },
      { title: "Simplicity by Design", desc: "Every screen was tested against one question: could a beginner use this with zero explanation?" },
      { title: "Self-Directed Project", desc: "Designed independently to explore how to make routine-based habit apps feel approachable rather than clinical." }
    ]
  },
  "urbanEscapeTour": {
    title: "Urban Escape Tours: Website Redesign",
    category: "Web Design",
    hero: "/images/urbanEscape/HomeTop.png",
    thumbnail: "/images/urbanEscape/HomeTop.png",
    objective: "Redesign an existing travel booking website to make discovering and comparing tour packages faster and less overwhelming, while making trip details easy to actually read.",
    problem: "The original site displayed all tour packages in one long, unfiltered list that visitors had to scroll through manually with no way to narrow results by destination, duration, or trip type. The trip detail pages were just as difficult: information was presented in dense, uninterrupted paragraphs that made it hard to find key details like pricing, itinerary, or what was actually included.",
    solution: "I redesigned the packages page around a filtering system that lets users narrow results by destination, trip length, and category, so they can find relevant tours in seconds instead of scrolling through everything. On the detail pages, I broke the dense paragraphs into scannable sections with clear headings, so users can quickly find what they're looking for instead of reading a wall of text.",
    impact: "• 45% increase in booking completion rate\n• 60% reduction in search time\n• 35% increase in user engagement\n• 50% improvement in mobile conversions",
    figmaLink: "https://www.figma.com/proto/Kxa7mrRxFXEO86OjVSilWE/Untitled?page-id=0%3A1&node-id=31-859&viewport=1213%2C1044%2C0.36&t=HB48ZdeHs2i676Ub-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=31%3A859",
    gallery: [
      "/images/urbanEscape/HomeTop.png",
      "/images/urbanEscape/Detail.png",
      "/images/urbanEscape/Packages.png",
      "/images/urbanEscape/Contact.png",
      "/images/urbanEscape/faq.png",
    ],
     keyTakeaways: [
      { title: "Information Architecture", desc: "Reorganizing content mattered more than restyling it." },
      { title: "Scannability", desc: "Breaking up dense text made trip details actually usable." },
      { title: "Self-Directed Project", desc: "Redesigned independently to practice solving real, observed UX problems." }
    ]
  },
  "healthcare": {
    title: "New Project Coming Soon",
    category: "In Development",
    hero: "",
    thumbnail: "",
    objective: "This case study is currently in development. Check back soon to see the complete project details and design process.",
    problem: "",
    solution: "",
    impact: "",
    figmaLink: "",
    comingSoon: true,
    gallery: []
  }
};

export default function CaseStudy() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const caseStudy = caseStudiesData[id as keyof typeof caseStudiesData];

  // Scroll to top when component loads or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage("");
  };

  const nextImage = () => {
    const currentIndex = caseStudy.gallery.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % caseStudy.gallery.length;
    setSelectedImage(caseStudy.gallery[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = caseStudy.gallery.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + caseStudy.gallery.length) % caseStudy.gallery.length;
    setSelectedImage(caseStudy.gallery[prevIndex]);
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Coming Soon State
  if (caseStudy.comingSoon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <motion.button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/30 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800"
              whileHover={{ x: -3, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </motion.button>
          </div>
        </nav>

        {/* Coming Soon Content */}
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Animated Background Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(20, 184, 166, 0.1)', 'rgba(6, 182, 212, 0.1)', 'rgba(16, 185, 129, 0.1)'][Math.floor(Math.random() * 3)]
                }, transparent)`,
                filter: 'blur(40px)',
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}

          <div className="relative z-10 text-center max-w-3xl">
            <motion.div
              className="text-8xl mb-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Coming Soon
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {caseStudy.title}
            </motion.p>

            <motion.p
              className="text-lg text-slate-400 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {caseStudy.objective}
            </motion.p>

            <motion.button
              onClick={() => navigate('/')}
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800"
            whileHover={{ x: -3, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 relative overflow-hidden flex items-center" style={{ minHeight: id === "urbanEscapeTour" ? '750px' : '100vh' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${100 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  ['rgba(20, 184, 166, 0.1)', 'rgba(6, 182, 212, 0.1)', 'rgba(16, 185, 129, 0.1)'][Math.floor(Math.random() * 3)]
                }, transparent)`,
                filter: 'blur(40px)',
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">{id === "urbanEscapeTour" && <div className="md:hidden mb-8" />}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-300 text-sm font-semibold uppercase tracking-wider">
                  {caseStudy.category}
                </span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-bold text-white mb-6 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-white via-teal-100 to-cyan-100 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {caseStudy.title}
                </motion.span>
              </motion.h1>

              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '120px' }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <span className="text-slate-400 text-sm uppercase tracking-widest">Case Study</span>
              </motion.div>

              <motion.p
                className="text-xl text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Transforming user experience through innovative design solutions
              </motion.p>
            </div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Hero Display - Conditional for Mobile vs Web */}
              {id === "urbanEscapeTour" ? (
                // Multi-Screen Web App Display - Responsive
                <motion.div
                  className="relative w-full md:h-[650px] h-[400px] flex items-center justify-center order-first md:order-last"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {/* Main Screen - Center (Picture 1) */}
                  <motion.div
                    className="relative w-[70%] md:w-[65%] max-w-4xl z-30 shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <ImageWithFallback
                      src={caseStudy.gallery[0]}
                      alt={caseStudy.title}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Left Screen - Partial - Hidden on mobile */}
                  <motion.div
                    className="absolute left-0 w-[40%] opacity-50 shadow-xl z-10 hidden md:block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <ImageWithFallback
                      src={caseStudy.gallery[2]}
                      alt={`${caseStudy.title} - Left`}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Right Screen - Partial - Hidden on mobile */}
                  <motion.div
                    className="absolute right-0 w-[40%] opacity-50 shadow-xl z-10 hidden md:block"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <ImageWithFallback
                      src={caseStudy.gallery[1]}
                      alt={`${caseStudy.title} - Right`}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Animated Glow Elements */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-full blur-3xl"
                    animate={{
                      scale: [1.4, 1, 1.4],
                      opacity: [0.8, 0.5, 0.8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ) : (
                // Angular Phone Displays for Mobile Apps
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  {caseStudy.gallery.slice(0, 3).map((image, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute"
                      style={{
                        width: '280px',
                        height: '560px',
                        zIndex: idx === 1 ? 3 : 2,
                      }}
                      initial={{
                        opacity: 0,
                        x: idx === 0 ? -100 : idx === 2 ? 100 : 0,
                        rotate: idx === 0 ? -8 : idx === 2 ? 8 : 0
                      }}
                      animate={{
                        opacity: 1,
                        x: idx === 0 ? -140 : idx === 2 ? 140 : 0,
                        rotate: idx === 0 ? -8 : idx === 2 ? 8 : 0,
                        y: idx === 1 ? -20 : 10
                      }}
                      transition={{ duration: 0.8, delay: 0.4 + idx * 0.2 }}
                      whileHover={{
                        y: idx === 1 ? -40 : -10,
                        scale: 1.05,
                        zIndex: 10
                      }}
                    >
                      {/* Phone Screen with Status Bar */}
                      <div className="relative w-full h-full bg-black rounded-[2.5rem] shadow-2xl overflow-hidden">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent px-6 py-2 flex items-center justify-between text-white text-xs">
                          <span className="font-semibold">9:41</span>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                              <path d="M0 4h3v4H0V4zm4 0h3v4H4V4zm4 0h3v4H8V4zm4 0h3v4h-3V4z" opacity="0.4"/>
                              <path d="M12 4h3v4h-3V4z"/>
                            </svg>
                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M2 6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6zm13 2v0c.6 0 1-.4 1-1s-.4-1-1-1v2z"/>
                            </svg>
                            <span className="text-[10px]">100%</span>
                          </div>
                        </div>

                        {/* Screen Content */}
                        <ImageWithFallback
                          src={image}
                          alt={`${caseStudy.title} - Screen ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />

                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Animated Glow Elements */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-teal-400/40 to-cyan-400/40 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-10 -left-10 w-56 h-56 bg-gradient-to-br from-emerald-400/40 to-teal-400/40 rounded-full blur-3xl"
                    animate={{
                      scale: [1.4, 1, 1.4],
                      opacity: [0.8, 0.5, 0.8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center -mt-12 relative z-20">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/70 text-sm">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-20 mt-20">
        {/* Objective */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-2xl">01</span>
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-r from-teal-300 to-transparent" />
                </div>
                <h2 className="text-5xl font-bold text-slate-900 mb-4">Objective</h2>
                <p className="text-slate-500 uppercase text-sm tracking-widest">Project Goals</p>
              </motion.div>
            </div>

            <div className="md:col-span-8">
              <motion.div
                className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-2xl text-slate-700 leading-relaxed font-light">
                  {caseStudy.objective}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Problem */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 md:order-2">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px flex-1 bg-gradient-to-l from-teal-300 to-transparent" />
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <span className="text-white font-bold text-2xl">02</span>
                  </motion.div>
                </div>
                <h2 className="text-5xl font-bold text-slate-900 mb-4 text-right">Problem</h2>
                <p className="text-slate-500 uppercase text-sm tracking-widest text-right">Challenge Statement</p>
              </motion.div>
            </div>

            <div className="md:col-span-8 md:order-1">
              <motion.div
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 shadow-lg border border-slate-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-2xl text-slate-700 leading-relaxed font-light">
                  {caseStudy.problem}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-2xl">03</span>
                  </motion.div>
                  <div className="h-px flex-1 bg-gradient-to-r from-teal-300 to-transparent" />
                </div>
                <h2 className="text-5xl font-bold text-slate-900 mb-4">Solution</h2>
                <p className="text-slate-500 uppercase text-sm tracking-widest">Our Approach</p>
              </motion.div>
            </div>

            <div className="md:col-span-8">
              <motion.div
                className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-2xl text-slate-700 leading-relaxed font-light">
                  {caseStudy.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="text-center mb-16">
    <motion.div
      className="inline-flex items-center gap-4 mb-6"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-teal-300" />
      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30">
        <span className="text-white font-bold text-3xl">04</span>
      </div>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-teal-300" />
    </motion.div>
    <h2 className="text-6xl font-bold text-slate-900 mb-4">Design Goals</h2>
    <p className="text-slate-500 uppercase text-sm tracking-widest">What The Design Prioritizes</p>
  </div>

  <div className="grid md:grid-cols-2 gap-6 mb-16">
    {[
      { title: "Faster Discovery", desc: "Filters for destination, trip length, and category replace endless scrolling." },
      { title: "Organized by Design", desc: "Packages are grouped and structured, not just dumped on the page." },
      { title: "Readable Details", desc: "Long, dense paragraphs rewritten into clear, scannable sections." },
      { title: "Practice Redesign", desc: "An independent redesign exercise based on a real site's UX shortcomings." },
    ].map((goal, index) => (
      <motion.div
        key={index}
        className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-teal-100 relative overflow-hidden group hover:shadow-xl transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {goal.title}
          </h3>
          <p className="text-slate-700 text-lg leading-relaxed">
            {goal.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
          

         

          {/* Gallery in Section 4 - Mobile App Screens Layout */}
          <div className="mt-20">
            <motion.h3
              className="text-4xl font-bold text-slate-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              App Screens
            </motion.h3>

            {/* All Screens - Gallery Layout */}
            {id === "urbanEscapeTour" ? (
              // Creative Bento Box Collage Layout
              <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[280px] gap-3 md:gap-5">
                {caseStudy.gallery.map((image, index) => {
                  // A carefully calculated pattern that tiles perfectly on both 2-col and 4-col grids
                  const pattern = [
                    "col-span-2 row-span-2",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-2",
                    "col-span-1 row-span-1",
                    "col-span-2 row-span-1",
                    "col-span-1 row-span-1",
                    "col-span-1 row-span-1",
                  ];
                  const spanClass = pattern[index % pattern.length];
                  
                  return (
                    <motion.div
                      key={index}
                      className={`cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg bg-slate-100 ${spanClass}`}
                      initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 8 - 4 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.1 
                      }}
                      whileHover={{ y: -8, scale: 1.02, zIndex: 10 }}
                      onClick={() => openLightbox(image)}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${caseStudy.title} - Screen ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/30 mb-2">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </div>
                          <span className="text-white font-semibold tracking-wider uppercase text-xs">View</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              // Mobile Grid
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {caseStudy.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative aspect-[9/19.5] bg-black rounded-2xl shadow-xl overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent px-4 py-2 flex items-center justify-between text-white text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-2.5" viewBox="0 0 16 12" fill="currentColor">
                            <path d="M0 4h3v4H0V4zm4 0h3v4H4V4zm4 0h3v4H8V4zm4 0h3v4h-3V4z" opacity="0.4"/>
                            <path d="M12 4h3v4h-3V4z"/>
                          </svg>
                          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M2 6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6zm13 2v0c.6 0 1-.4 1-1s-.4-1-1-1v2z"/>
                          </svg>
                          <span className="text-[9px]">100%</span>
                        </div>
                      </div>
                      <ImageWithFallback
                        src={image}
                        alt={`${caseStudy.title} - Screen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* View All Hint */}
            <motion.p
              className="text-center text-slate-500 mt-8 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Click any screen to view full size • {caseStudy.gallery.length} screens total
            </motion.p>
          </div>
        </motion.section>

        {/* Key Takeaways */}
        <motion.section
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-12 md:p-16 relative overflow-hidden shadow-lg border border-slate-100">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <span className="text-white font-bold text-2xl">05</span>
                </div>
                <h2 className="text-5xl font-bold text-slate-900">Key Takeaways</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {caseStudy.keyTakeaways.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-teal-600 font-bold text-2xl mb-3">{item.title}</div>
                    <p className="text-slate-600 text-lg">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* View Prototype Button */}
        {caseStudy.figmaLink && (
          <motion.div
            className="flex justify-center pt-12 pb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href={caseStudy.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-2xl flex items-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <ExternalLink className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10 text-lg">View Figma Prototype</span>
            </motion.a>
          </motion.div>
        )}

        {/* Back Button */}
        <motion.div
          className="flex justify-center pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="group relative px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold shadow-2xl flex items-center gap-3 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-1 transition-transform" />
            <span className="relative z-10 text-lg">Back to All Projects</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal - Full Screen */}
      {lightboxOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-teal-400 transition-colors z-50"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-teal-400 transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-teal-400 transition-colors z-50 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Full Screen Image Display - Maximum Size */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center"
            >
              <ImageWithFallback
                src={selectedImage}
                alt="Full screen view"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            {caseStudy.gallery.indexOf(selectedImage) + 1} / {caseStudy.gallery.length}
          </div>
        </motion.div>
      )}
    </div>
  );
}
