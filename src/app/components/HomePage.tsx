import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Linkedin, ExternalLink, ArrowDown, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const projects = [
    {
      id: "mobile-banking",
      title: "Glowy: Skincare App Design",
      description: "Complete redesign of a banking app focused on accessibility and user-friendly financial management.",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      image: "/src/images/glowy/Post.png",
      screenshots: [
        "/src/images/glowy/welcome.png",
        "/src/images/glowy/Post.png",
        "/src/images/glowy/home.png",
      ]
    },
    {
      id: "urbanEscapeTour",
      title: "Urban Escape Tours: Website Redesign",
      description: "Modern travel platform with intuitive search and booking flow, increasing conversions by 45%.",
      tags: ["Web Design", "UI/UX", "Responsive Design"],
      image: "/src/images/urbanEscape/HomeTop.png",
      video: "/src/images/urbanEscape/intoVideo.mp4",
      screenshots: [
        "/src/images/urbanEscape/HomeTop.png",
        "/src/images/urbanEscape/Detail.png",
        "/src/images/urbanEscape/Packages.png",
      ]
    }
  ];

  const skills = [
    "Figma", "HTML", "CSS", "Photoshop", "Illustrator",
    "User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems",
    "Information Architecture", "Interaction Design", "Visual Design", "Typography", "Color Theory"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#08111E] border-b border-slate-900/80 shadow-lg shadow-slate-950/20 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-xl text-white">Khouloud Shabou</h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="#about" className="hover:text-cyan-200 transition-colors text-slate-200">About</a>
            <a href="#projects" className="hover:text-cyan-200 transition-colors text-slate-200">Projects</a>
            <a href="#skills" className="hover:text-cyan-200 transition-colors text-slate-200">Skills</a>
            <a href="#contact" className="hover:text-cyan-200 transition-colors text-slate-200">Contact</a>
          </div>
        </div>
      </nav>

      {/* Creative Landing Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020814]">
        {/* Static background layers */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${25 + i * 20}% ${30 + i * 15}%, rgba(6, 182, 212, 0.08), transparent 45%)`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(at 0% 0%, rgba(20, 184, 166, 0.25) 0%, transparent 55%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.25) 0%, transparent 55%)' }} />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(160)].map((_, i) => {
            const left = 2 + Math.random() * 96;
            const top = 4 + Math.random() * 92;
            const size = 2 + Math.random() * 6;
            const opacity = 0.12 + Math.random() * 0.55;
            const duration = 2.2 + Math.random() * 2.2;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: 'rgba(45, 212, 191, 0.42)',
                  opacity,
                }}
                animate={{
                  y: [0, -4, 0],
                  opacity: [opacity * 0.25, opacity, opacity * 0.25],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Top Label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
            </div>

            {/* Main Heading */}
            <div className="text-center mb-6">
              <div className="overflow-hidden">
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none">
                  <span className="block bg-gradient-to-r from-cyan-100 via-teal-300 to-cyan-100 bg-clip-text text-transparent" style={{ textShadow: '0 0 80px rgba(20, 184, 166, 0.3)' }}>
                    DESIGN
                  </span>
                </h1>
              </div>

              <div className="overflow-hidden">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                  <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 30px rgba(20, 184, 166, 0.6))' }}>
                    THAT MATTERS
                  </span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              UX/UI Designer with a software development background creating intuitive accessible products that solve real user problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full font-semibold text-white"
              >
                <span className="flex items-center gap-2">
                  Explore Work
                  <span>→</span>
                </span>
              </a>

              <Link
                to="/resume"
                className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center justify-center"
                style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', borderColor: 'rgba(20, 184, 166, 0.3)', borderWidth: '2px' }}
              >
                Resume
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll to Discover</span>
              <div className="w-6 h-10 border-2 border-teal-500/30 rounded-full flex justify-center p-1">
                <motion.div
                  className="w-1.5 h-1.5 bg-teal-400 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl font-bold mb-6 text-slate-900">
                UI/UX Designer
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Former software developer turned UX/UI designer. I build interfaces that are as functional as they are enjoyable to use.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-700 hover:bg-slate-50">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-[-24px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.35),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.2),transparent_48%)] blur-xl" />
              <div className="absolute inset-[-6px] rounded-full border border-cyan-100/80" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-4 ring-cyan-100/80">
                <ImageWithFallback
                  src="/src/images/unnamed.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-slate-900">A Bit About Me</h3>
          <div className="max-w-5xl mx-auto text-left md:text-center">
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              I'm a UI/UX designer with a background in software development, and that shift shapes how I work. I understand what's technically feasible, which means I can design with engineers instead of just handing off to them, and speak their language when it matters.</p>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">
              For me, good design starts with the problem, not the interface. I spend time understanding what's actually causing friction for users before I design a solution, then test and refine until it genuinely works. The polish matters, but only once the problem is truly solved.</p>
            <p className="text-slate-700 text-lg leading-relaxed">
              My process blends user research, iterative design, and continuous testing, grounded in the problem-solving instincts I built as a developer. I love collaborating with teams to turn ideas into experiences that are functional, intuitive, and genuinely fun to use.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-8 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/case-study/${project.id}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 bg-white h-full relative cursor-pointer">
                    {/* Decorative Corner Element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-200/50 to-transparent rounded-bl-full z-0" />

                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                      {project.comingSoon ? (
                        // Coming Soon Display
                        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
                          <div className="text-center z-10">
                            <motion.div
                              className="text-6xl mb-4"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              ✨
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                            <p className="text-slate-300 text-sm">New project in development</p>
                          </div>

                          {/* Animated Background Elements */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute rounded-full bg-teal-400/10"
                              style={{
                                width: `${60 + Math.random() * 120}px`,
                                height: `${60 + Math.random() * 120}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                              animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2,
                              }}
                            />
                          ))}
                        </div>
                      ) : project.id === "mobile-banking" ? (
                        <div className="relative w-full h-full">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full"
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain bg-white"
                            />
                          </motion.div>

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <motion.div
                            className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full p-3 shadow-lg"
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>
                        </div>
                      ) : project.id === "urbanEscapeTour" ? (
                        <div className="relative w-full h-full overflow-hidden bg-slate-900">
                          <video
                            className="h-full w-full object-cover"
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-900/20" />
                          <motion.div
                            className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full p-3 shadow-lg z-10"
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>
                        </div>
                      ) : (
                        // Single Image Fallback
                        <>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full"
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Floating Icon */}
                          <motion.div
                            className="absolute top-4 right-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full p-3 shadow-lg"
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>


                        </>
                      )}
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-slate-900 text-xl group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200/50 hover:bg-teal-100 transition-all"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Bottom Accent Line */}
                      <motion.div
                        className="mt-6 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 sm:px-8 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-slate-300 text-slate-700 hover:bg-teal-50 hover:border-teal-400 hover:text-teal-700 transition-all">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Get In Touch</h3>
          <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="outline" size="lg" className="gap-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-[#24292F] text-[#24292F] hover:bg-[#24292F]/10">
              <Link to="/resume">
                <Eye className="w-5 h-5" />
                Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              <a href="https://www.linkedin.com/in/khouloud-shabou-09543b388/" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 px-6 sm:px-8 lg:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2026 Khouloud Shabou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
