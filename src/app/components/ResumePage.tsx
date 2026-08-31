import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft, Mail, Linkedin, Download } from "lucide-react";
import Footer from "./Footer";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-700">
      <header className="sticky top-0 w-full bg-[#08111E]/95 border-b border-slate-900/80 shadow-lg shadow-slate-950/20 z-50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-300 font-semibold">Resume</p>
            <h1 className="text-2xl font-semibold mt-1 text-white">Khouloud Shabou</h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/files/ui_ux_khouloudShabou_en.pdf"
              download="ui_ux_khouloudShabou_en.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-cyan-300 shadow-sm transition-colors hover:bg-slate-700"
            >
              <Download className="w-4 h-4" />
              Download PDF (EN)
            </a>
            <a
              href="/files/ui_ux_khouloudShabou_fr.pdf"
              download="ui_ux_khouloudShabou_fr.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-cyan-300 shadow-sm transition-colors hover:bg-slate-700"
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

      <main className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <section className="mb-10 rounded-[28px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-md shadow-slate-200/80 backdrop-blur-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">UI/UX Designer </h2>
              <p className="text-slate-600 mt-3 max-w-2xl leading-relaxed">
                UI/UX Designer with 6+ years of software development experience and hands-on experience creating user-centered digital experiences. Skilled in user flows, wireframing, high fidelity UI design, prototyping, usability testing, and Figma. Combines strong design skills with frontend expertise to create intuitive, accessible, and practical interfaces.</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-600" />
                <span>khouloudshabou@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-cyan-600" />
                <a
                  href="https://www.linkedin.com/in/khouloud-shabou-09543b388/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-700 hover:text-cyan-900 transition-colors">
                  https://www.linkedin.com/in/khouloudshabou/
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
                    <li>Translated functional requirements into clear technical specifications, helping teams align on application functionality and implementation requirements.</li>
                    <li>Collaborated with cross-functional teams in Agile/Scrum workflows, participating in sprint planning, technical discussions, and solution development.</li>
                    <li>Created and maintained technical documentation, including data-flow diagrams and technical specifications, to communicate system behavior and requirements clearly.</li>
                    <li>Developed and tested RESTful APIs using JSON/XML, supporting system integration and communication between application components.</li>
                    <li>Designed and developed enterprise application components in Java, applying software engineering principles to build scalable and maintainable solutions.</li>
                    <li>Conducted unit and integration testing with JUnit to identify and resolve issues and improve application.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Freelance Designer</p>
                  <p className="text-sm text-slate-500">2014 – Present</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Created visual design materials including logos, flyers, and promotional graphics based on client or project requirements.</li>
                    <li>Used Adobe Photoshop and other design tools to develop visual concepts and refine designs based on feedback.</li>
                    <li>Applied principles of typography, composition, color, and visual hierarchy to create clear and engaging designs.</li>
                    <li>Maintained an independent design practice while exploring freelance opportunities through online platforms.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Real Estate Agent (Part-Time) at Blouin Immobilier</p>
                  <p className="text-sm text-slate-500">Quebec · April 2021 – June 2024</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Consulted with clients to understand their needs and preferences, providing personalized guidance throughout rental decisions..</li>
                    <li>Presented properties and coordinated visits based on client requirements, adapting recommendations to individual needs.</li>
                    <li>Followed up on client requests and feedback to support a smooth experience and maintain client satisfaction.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Sales Advisor at LA Liberte</p>
                  <p className="text-sm text-slate-500">Quebec · April 2019 – January 2020</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Engaged with customers to understand their needs and provide tailored product recommendations, strengthening customer-focused communication skills</li>
                    <li>Organized and presented merchandise to improve product visibility and customer engagement.</li>
                    <li>Supported day-to-day store operations, including transactions, inventory availability, and product organization.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Administrative and Marketing Assistant</p>
                  <p className="text-sm text-slate-500">Tunisia · November 2014 - May 2015</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Created visual materials and promotional flyers using Adobe Photoshop to support marketing and communication initiatives.</li>
                    <li>Assisted with planning and executing advertising campaigns to promote company services.</li>
                    <li>Managed scheduling and client communications while coordinating multiple administrative tasks.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900">Web Development Intern at Centre National Technologies Éducation</p>
                  <p className="text-sm text-slate-500">Tunisia · January 2013 - April 2013</p>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600">
                    <li>Assisted with front-end development using HTML and CSS to create and update website pages.</li>
                    <li>Participated in requirements analysis, system design, development, and testing throughout the software development process.</li>
                    <li>Developed and modified back-end functionality using PHP, SQL, and Java within Eclipse.</li>
                    <li>Tested and debugged user interface components to improve responsiveness and cross-browser compatibility.</li>
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
                    <p className="text-sm text-cyan-700 font-medium whitespace-nowrap">Jan 2026 – March 2026</p>
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
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Skills</h3>
              <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">UI/UX Design</p>
                  <p>User research fundamentals, wireframing, prototyping, interaction design, information architecture, 
                    User flows, design systems, responsive design, accessibility (WCAG), typography, color theory, grid systems, design thinking</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Design Tools</p>
                  <p>Figma, Adobe Photoshop, Canvas</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Front-End</p>
                  <p>HTML5, CSS3, JavaScript, TypeScript, React</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Research & Process</p>
                  <p>User interviews, usability testing, persona development, A/B testing, user feedback analysis</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Collaboration</p>
                  <p>Cross-functional collaboration (Design, Product, Research, Engineering), Agile/Scrum, design-to-development handoff, Jira, Confluence.</p>
                </div>
                
              </div>
              
            </div>
             <div className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Languages</h3>
              <div className="space-y-2 text-slate-600 text-sm">
                <p><span className="font-semibold text-slate-900">English</span> : Fluent</p>
                <p><span className="font-semibold text-slate-900">French</span> : Fluent</p>
                <p><span className="font-semibold text-slate-900">Arabic</span> : Native</p>
              </div>
            </div>

            <div className="rounded-[24px] border border-cyan-300 bg-[#f8fcff] p-8 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Additional Experience</h3>
              <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-slate-900">Sales Representative</p>
                  <p>SDI Marketing, Montréal, Canada | Apr 2018 – Feb 2019</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Substitute Teacher</p>
                  <p>Primary School, Tunisia | Nov 2015 – Jan 2016</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Owner/Operator, Internet Service Business</p>
                  <p>Publinet (Self-employed), Tunisia | May 2015 – Nov 2015</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Field Enumerator</p>
                  <p>Institut National de la Statistique, Tunisia | Feb 2014 – May 2014</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Administrative Assistant</p>
                  <p>Agence d'assurance AMI, Tunis | Nov 2013 – Jan 2014</p>
                </div>
                 <div>
                  <p className="font-semibold text-slate-900">Customer Service Intern</p>
                  <p>Tunisie Télécom, Tunisia | Jul 2012</p>
                </div>
                
              </div>
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
