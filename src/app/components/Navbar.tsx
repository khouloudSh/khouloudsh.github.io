import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/#projects", label: "Projects" },
    { to: "/#skills", label: "Skills" },
    { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname, hash } = useLocation();

    // Highlights the link for the page (or section) you are on
    const isActive = (to: string) => {
        const [path, h] = to.split("#");
        return pathname === path && hash === (h ? `#${h}` : "");
    };

    const handleClick = (to: string) => {
        setIsMenuOpen(false);
        // Clicking Home while already on the home page scrolls back to the top
        if (to === "/" && pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-[#08111E] border-b border-slate-900/80 shadow-lg shadow-slate-950/20 z-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    onClick={() => handleClick("/")}
                    className="font-semibold text-xl text-white"
                >
                    Khouloud Shabou
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => handleClick(link.to)}
                            className={`hover:text-cyan-200 transition-colors ${isActive(link.to) ? "text-cyan-200" : "text-slate-200"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="md:hidden text-slate-200 hover:text-cyan-200 transition-colors p-1"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-t border-slate-900/80 bg-[#08111E]"
                    >
                        <div className="flex flex-col px-6 sm:px-8 py-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    onClick={() => handleClick(link.to)}
                                    className={`hover:text-cyan-200 transition-colors text-lg ${isActive(link.to) ? "text-cyan-200" : "text-slate-200"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}