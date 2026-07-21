import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft, Mail, Linkedin, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-700">
      <header className="fixed top-0 w-full bg-[#f7f9fc]/95 border-b border-slate-200 shadow-sm shadow-slate-200/60 z-50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 font-semibold">Resume</p>
            <h1 className="text-2xl font-semibold mt-1 text-slate-900">Khouloud Shabou</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/src/files/ui_ux_khouloudShabou_en.pdf"
              download="ui_ux_khouloudShabou_en.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm transition-colors hover:bg-cyan-50"
            >
              <Download className="w-4 h-4" />
              Download PDF (EN)
            </a>
            <a
              href="/src/files/ui_ux_khouloudShabou_fr.pdf"
              download="ui_ux_khouloudShabou_fr.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm transition-colors hover:bg-cyan-50"
            >
              <Download className="w-4 h-4" />
              Download PDF (FR)
            </a>
            <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2 text-white shadow-lg hover:from-teal-600 hover:to-cyan-600">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <section className="mb-10 rounded-[28px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-md shadow-slate-200/80 backdrop-blur-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">UI/UX Designer </h2>
              <p className="text-slate-600 mt-3 max-w-2xl leading-relaxed">
                 Web application developer transitioning into UI/UX design, combining hands-on front-end and back-end experience with a long-standing passion for design. From freelance visual work to a deeper focus on how products look, feel, and function for the people using them. Passionate about creating interfaces that are not just visually polished but intuitive, usable, and grounded in real user needs.              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>khouloudshabou@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.5 0 1 .4 1 1V20c0 .6-.5 1-1 1-9.4 0-17-7.6-17-17 0-.5.4-1 1-1h3.7c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1l-2.1 2.1z" />
                </svg>
                <span>(438) 921-6287</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-cyan-600" />
                <a
                  href="https://www.linkedin.com/in/khouloud-shabou-09543b388/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  linkedin.com/in/khouloud-shabou-09543b388/
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <article className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Experience</h3>
              <div className="space-y-8 text-slate-600">
                <div>
                  <p className="text-lg font-semibold text-slate-900">Application Developer at Oracle</p>
                  <p className="text-sm text-slate-500">Quebec · Jan 2020 – April 2026</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Designed and developed front-end and back-end components for business applications, working directly on the interfaces and workflows end users interacted with daily.</li>
                    <li>Analyzed system specifications and business processes to translate requirements into functional, user-facing solutions.</li>
                    <li>Collaborated cross-functionally to integrate enhancements and resolve usability and functional bugs.</li>
                    <li>Wrote, tested, and debugged application code, developing a strong instinct for what is realistically buildable — a perspective now applied to design work.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Real Estate Agent (Part-Time) at Blouin Immobilier</p>
                  <p className="text-sm text-slate-500">Quebec · April 2021 – December 2023</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Welcomed clients and presented available properties, coordinating visits and guiding rental decisions.</li>
                    <li>Provided personalized follow-up on client requests to ensure satisfaction and efficient service.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Sales Advisor at LA Liberte</p>
                  <p className="text-sm text-slate-500">Quebec · April 2019 – December 2019</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Built client relationships and supported merchandise presentation and sales operations.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Sales Representative at SDI Marketing</p>
                  <p className="text-sm text-slate-500">Montréal · April 2018 – February 2019</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Prospected and acquired new clients, promoting and selling financial products.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Administrative and Marketing Assistant</p>
                  <p className="text-sm text-slate-500">Tunisia · November 2014 - May 2015</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Created visual materials and publicity flyers using Adobe Photoshop, combining organizational skills with creative design to support marketing efforts.</li>
                    <li>Assisted in planning and executing advertising campaigns to promote company services.</li>
                    <li>Managed daily administrative tasks including scheduling and client communications.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Intern at Centre National Technologies Éducation</p>
                  <p className="text-sm text-slate-500">Tunisia · January 2013 - April 2013</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Tested and debugged user interfaces and contributed to HTML programming for the organization's website.</li>
                    <li>Participated in all phases of system design, gaining early exposure to the design-development relationship.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Education</h3>
              <div className="space-y-6 text-slate-600">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">UI/UX Design</p>
                      <p className="text-sm text-slate-500">Concordia, Montréal</p>
                    </div>
                    <p className="text-sm text-cyan-700 font-medium whitespace-nowrap">Jan 2026 – Mars 2026</p>
                  </div>
                  <p className="mt-2">Covered foundational UI/UX principles, including user research, wireframing, prototyping, and usability best practices using Figma.</p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">Programming and Internet Technologies (AEC)</p>
                      <p className="text-sm text-slate-500">Institut Supérieur d’Informatique, Montréal</p>
                    </div>
                    <p className="text-sm text-cyan-700 font-medium whitespace-nowrap">2019</p>
                  </div>
                  <p className="mt-2">Focused on modern programming languages, web development, and networking technologies.</p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">Applied License in Computer Science</p>
                      <p className="text-sm text-slate-500">Institut Supérieur de Gestion, Tunisia</p>
                    </div>
                    <p className="text-sm text-cyan-700 font-medium whitespace-nowrap">2013</p>
                  </div>
                  <p className="mt-2">Studied core principles of computer science, including algorithms, data structures, and software development.</p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">Mathematics Bachelor</p>
                      <p className="text-sm text-slate-500">Lycée Secondaire Mourouj, Tunisia</p>
                    </div>
                    <p className="text-sm text-cyan-700 font-medium whitespace-nowrap">2010</p>
                  </div>
                  <p className="mt-2">Developed a strong foundation in mathematical theory and problem-solving techniques.</p>
                </div>
              </div>
            </article>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Languages</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <p><span className="font-semibold text-slate-900">English</span></p>
                <p><span className="font-semibold text-slate-900">French</span></p>
                <p><span className="font-semibold text-slate-900">Arabic</span></p>
              </div>
            </div>

            <div className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Skills</h3>
              <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">UI/UX Design</p>
                  <p>User research fundamentals, Typography, Color Theory, Grid Systems, Design Thinking, Responsive Design, Accessibility (WCAG), Wireframing, Prototyping, Interaction Design</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Design Tools</p>
                  <p>Figma, Adobe Photoshop, canvas</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Front-End</p>
                  <p>HTML5, CSS3, JavaScript, TypeScript, React, jQuery, XML, SVG, GridLayout (CSS)</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Back-End / Languages</p>
                  <p>Java, JavaScript, React, Node.js, PHP, C/C#/C++, .NET, Oracle ADF</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Databases</p>
                  <p>T-SQL, MySQL, SQLite</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Collaboration</p>
                  <p>Agile/Scrum, Cross-functional teamwork, Design-to-code handoff, Jira, Confluence</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Testing & QA</p>
                  <p>Selenium, JUnit, Postman, Automated & Integration Testing, CI/CD pipelines</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">DevOps & Tools</p>
                  <p>Git, Docker, Jenkins, Maven</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
