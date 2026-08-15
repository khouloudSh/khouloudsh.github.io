import { Mail, Linkedin, Eye, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#050b16] text-white py-16 px-6 sm:px-8 lg:px-10 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 text-center md:text-left">
                    {/* Left: Name + tagline */}
                    <div>
                        <h4 className="font-semibold text-xl text-white mb-3">Khouloud Shabou</h4>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-4">
                            UI/UX Designer crafting experiences that feel effortless.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-teal-400 px-3 py-1 rounded-full border border-teal-400/20 bg-teal-400/5">
                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                            Open to work
                        </div>
                    </div>

                    {/* Middle: Navigation - hidden on mobile */}
                    <div className="hidden md:block">
                        <p className="text-teal-400 text-xs font-semibold tracking-widest mb-4">NAVIGATION</p>
                        <div className="flex flex-col gap-3">
                            <a href="/#about" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">About</a>
                            <a href="/#projects" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Projects</a>
                            <a href="/#skills" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Skills</a>
                            <a href="/#contact" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Contact</a>
                        </div>
                    </div>

                    {/* Right: Connect */}
                    <div>
                        <p className="text-teal-400 text-xs font-semibold tracking-widest mb-4">CONNECT</p>
                        <div className="flex flex-col gap-3 items-center md:items-start">
                            <a
                                href="mailto:shabou.khouloud@gmail.com"
                                className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span className="break-all">shabou.khouloud@gmail.com</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/khouloud-shabou-09543b388/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <Link
                                to="/resume"
                                className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2"
                            >
                                <Eye className="w-4 h-4" />
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 pt-6 text-center">
                    <p className="text-slate-500 text-sm">© 2026 Khouloud Shabou. All rights reserved.</p>
                </div>
            </div>

            {/* Back to top */}
            <a
                href="#"
                className="absolute bottom-6 right-4 sm:right-6 lg:right-10 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:border-teal-400/50 hover:bg-slate-700 transition-all flex items-center justify-center group"
                aria-label="Back to top"
            >
                <ArrowUp className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
            </a>
        </footer>
    );
}