import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
    Headphones,
    Plane,
    Dumbbell,
    Palette,
    Scissors,
    Music,
    ChefHat,
} from "lucide-react";

export default function AboutPage() {

    const interests = [
        { icon: Headphones, label: "Music", color: "from-teal-500 to-teal-400", glow: "shadow-teal-500/30" },
        { icon: Music, label: "Guitar", color: "from-indigo-500 to-violet-400", glow: "shadow-indigo-500/30" },
        { icon: Plane, label: "Travel", color: "from-sky-500 to-cyan-400", glow: "shadow-sky-500/30" },
        { icon: Dumbbell, label: "Sport", color: "from-emerald-500 to-teal-400", glow: "shadow-emerald-500/30" },
        { icon: Palette, label: "Painting", color: "from-violet-500 to-indigo-400", glow: "shadow-violet-500/30" },
        { icon: Scissors, label: "Crafting", color: "from-cyan-500 to-sky-400", glow: "shadow-cyan-500/30" },
        { icon: ChefHat, label: "Cooking", color: "from-blue-500 to-sky-400", glow: "shadow-blue-500/30" },
    ];


    // Always start at the top when opening this page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const strengths = [
        {
            title: "I speak engineering",
            text: "After 6+ years building applications at Oracle, I know what is easy, hard, or risky to build. My designs are ready for handoff because I think about feasibility from the start.",
        },
        {
            title: "I think in systems",
            text: "Developers learn to see how every piece connects. I bring that to design systems, flows, and edge cases, so the whole experience holds together, not just the main screen.",
        },
        {
            title: "I close the loop",
            text: "I have seen what happens after launch: bugs, support tickets, and confused users. That is why I test early and design for the moments where things go wrong.",
        },
    ];

    const journey = [
        {
            period: "Today",
            title: "UX/UI Designer",
            text: "Designing web and mobile experiences from research to prototype to testing, combining my developer background with a user-first approach. See my projects.",
            current: true,
        },
        {
            period: "2026 · In progress",
            title: "Google UX Design Professional Certificate",
            text: "Learning the full UX process through hands-on projects: empathizing with users, defining problems, ideating, prototyping, and testing.",
            progress: { done: 4, total: 8 },
            current: true,
        },
        {
            period: "Jan 2026 – Mar 2026",
            title: "UI/UX Design Certificate, Concordia University",
            text: "Developed a foundation in user-centered design, visual design, interaction design, wireframing, and prototyping to create intuitive digital experiences.]",
        },
        {
            period: "Jan 2020 – Apr 2026",
            title: "Application Developer, Oracle",
            text: "Worked on enterprise applications at Oracle, solving technical problems and gaining a strong understanding of how technology works from both a technical and user perspective.",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Dark hero */}
            <section className="relative overflow-hidden bg-[#020814] pt-36 pb-24 px-6 sm:px-8 lg:px-10">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background:
                            "radial-gradient(at 0% 0%, rgba(20, 184, 166, 0.25) 0%, transparent 55%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.25) 0%, transparent 55%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 25% 30%, rgba(6, 182, 212, 0.08), transparent 45%)",
                    }}
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span
                            className="bg-gradient-to-r from-cyan-100 via-teal-300 to-cyan-100 bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 80px rgba(20, 184, 166, 0.3)" }}
                        >
                            From code to
                        </span>
                        <br />
                        <span
                            className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
                            style={{ filter: "drop-shadow(0 0 30px rgba(20, 184, 166, 0.6))" }}
                        >
                            user experience
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mt-8 leading-relaxed">
                        I spent 6+ years building software. Now I design it, with the people who use it at the center.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 px-6 sm:px-8 lg:px-10 bg-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                        <div className="flex-shrink-0 relative">
                            <div className="absolute inset-[-24px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.35),transparent_42%),radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.2),transparent_48%)] blur-xl" />
                            <div className="absolute inset-[-6px] rounded-full border border-cyan-100/80" />
                            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-4 ring-cyan-100/80">
                                <ImageWithFallback
                                    src="/images/aboutMePic.png"
                                    alt="Khouloud Shabou"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center md:text-left">
                                My story
                            </h2>

                            {/* REPLACE the bracketed text with your own words */}
                            <p className="text-slate-700 text-lg leading-relaxed mb-5">
                                I’ve always had an eye for design. Even before I knew I wanted to work in UX, I would notice the little , when a button felt out of place, when colors didn’t feel right, or when an interface simply felt off.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed mb-5">
                                As a developer, I became increasingly interested in what happens beyond making something work: how it feels to use it. When I discovered UX design, it immediately felt natural to me. It brought together my technical background and my passion for creating thoughtful, meaningful experiences.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                I decided to build on that interest through UI/UX training at Concordia University and the Google UX Design Certificate. Through projects like Glowy and Urban Escape Tours, I learned to approach design through research, testing, and iteration rather than assumptions.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed mb-5">
                                Today, I design with one simple goal: to create experiences that feel intuitive, easy to use, and genuinely enjoyable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What I bring */}
            {/*
      <section className="py-20 px-6 sm:px-8 lg:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-center text-slate-900">
            What my developer years give my design
          </h3>
          <p className="text-slate-600 text-lg text-center max-w-2xl mx-auto mb-12">
            My first career is not something I left behind. It is how I work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {strengths.map((item) => (
              <Card
                key={item.title}
                className="relative overflow-hidden border-0 bg-white h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-200/50 to-transparent rounded-bl-full" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-slate-900 text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  <div className="mt-6 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

            {/* Journey */}
            <section className="py-20 px-6 sm:px-8 lg:px-10 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-12 text-center text-slate-900">My journey</h3>

                    <div className="relative border-l-2 border-teal-200 pl-8 space-y-10">
                        {journey.map((step) => (
                            <div key={step.title} className="relative">
                                <span
                                    className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 ring-4 ring-white ${step.current ? "animate-pulse" : ""
                                        }`}
                                />
                                <Badge
                                    variant="secondary"
                                    className={`mb-2 border ${step.current
                                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-transparent"
                                        : "bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border-teal-200/50"
                                        }`}
                                >
                                    {step.period}
                                </Badge>
                                <h4 className="text-xl font-semibold text-slate-900 mb-1">{step.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{step.text}</p>

                                {step.progress && (
                                    <div className="mt-4">
                                        <div className="flex gap-1.5 max-w-xs">
                                            {Array.from({ length: step.progress.total }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-2 flex-1 rounded-full ${i < step.progress.done
                                                        ? "bg-gradient-to-r from-teal-500 to-cyan-500"
                                                        : "bg-slate-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-2 text-sm text-slate-500">
                                            {step.progress.done} of {step.progress.total} courses completed
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* My Design Philosophy Section */}
            <section id="about" className="py-20 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6 text-slate-900">My Design Philosophy</h3>
                    <p className="text-2xl md:text-3xl font-semibold text-teal-700 max-w-3xl mx-auto mb-10 leading-snug">
                        "Good design starts with the problem, not the interface."
                    </p>

                    <div className="max-w-5xl mx-auto text-left md:text-center">
                        <p className="text-slate-700 text-lg leading-relaxed mb-5">
                            I'm a UI/UX designer with a background in software development, and that shift shapes how I work. I understand what's technically feasible, which means I can design with engineers instead of just handing off to them, and speak their language when it matters.</p>
                        <p className="text-slate-700 text-lg leading-relaxed mb-5">
                            I spend time understanding what's actually causing friction for users before I design a solution, then test and refine until it genuinely works. The polish matters, but only once the problem is truly solved.</p>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            My process blends user research, iterative design, and continuous testing, grounded in the problem-solving instincts I built as a developer. I love collaborating with teams to turn ideas into experiences that are functional, intuitive, and genuinely fun to use.</p>
                    </div>
                </div>
            </section>

            {/* Beyond the screen 
<section className="py-20 px-6 sm:px-8 lg:px-10 bg-gradient-to-br from-slate-50 to-slate-100">
  <div className="max-w-5xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-4 text-slate-900">Beyond the screen</h3>
    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
      What I do outside of work shapes how I see design: with curiosity, with my hands, and with a bit of rhythm.
    </p>

    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
      {interests.map((item) => (
        <div key={item.label} className="group flex flex-col items-center gap-3 w-24">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg ${item.glow} transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110`}
          >
            <item.icon className="h-9 w-9" />
          </div>
          <span className="text-base font-medium text-slate-700 group-hover:text-teal-700 transition-colors">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>*/}

            {/* Call to action */}
            <section className="py-20 px-6 sm:px-8 lg:px-10 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4 text-slate-900">Let's work together</h3>
                    <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
                        See how I approach real problems in my case studies, or get in touch.
                    </p>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg"
                        >
                            <Link to="/#projects">View my work</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2 border-teal-600 text-teal-700 hover:bg-teal-50"
                        >
                            <a href="mailto:shabou.khouloud@gmail.com">
                                <Mail className="w-5 h-5" />
                                Email
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                            <a href="https://www.linkedin.com/in/khouloudshabou" target="_blank" rel="noreferrer">
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </Button>

                        {/* Put your PDF in the public folder, e.g. public/Khouloud-Shabou-Resume.pdf */}
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="gap-2 border-slate-700 text-slate-700 hover:bg-slate-50"
                        >
                            <a href="/Khouloud-Shabou-Resume.pdf" download>
                                <Download className="w-5 h-5" />
                                Download resume
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}