import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
       
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                ? "py-4 bg-gray-950/70 backdrop-blur-lg border-b border-white/5 shadow-2xl" 
                : "py-6 bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center">
                {/* Logo */}
                <motion.a 
                    href="#home" 
                    className="flex items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#0367FB] to-[#C4D613] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-[#C4D613]/20 transition-all shrink-0">
                        <Rocket size={18} className="group-hover:rotate-12 transition-transform" />
                    </div>
                    <span className="text-white font-black text-xl sm:text-2xl tracking-tighter">
                        KAILASAM<span className="text-[#C4D613]">PORTFOLIO</span>
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative group">
                            <a
                                href={link.href}
                                className="text-gray-400 font-semibold text-[13px] uppercase tracking-widest group-hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                            <motion.div 
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C4D613] rounded-full group-hover:w-full transition-all duration-300"
                            />
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#contact" 
                            className="ml-2 lg:ml-4 px-5 lg:px-6 py-2 rounded-full bg-[#0367FB] text-white font-bold text-[13px] hover:bg-[#0367FB]/80 transition-all shadow-lg shadow-blue-500/20"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setNav(!nav)} 
                        className="text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {nav ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 h-[100dvh] bg-gray-950 flex flex-col items-center justify-center p-6 z-[60]"
                    >
                        {/* Decorative Background for Mobile Menu */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0367FB]/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C4D613]/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                        <button 
                            onClick={() => setNav(false)} 
                            className="absolute top-6 right-6 text-white p-3 rounded-2xl bg-white/5 border border-white/10"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                        
                        <ul className="space-y-6 sm:space-y-8 text-center relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setNav(false)}
                                        className="text-white text-3xl sm:text-4xl font-extrabold hover:text-[#C4D613] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="pt-6"
                            >
                                <a 
                                    href="#contact" 
                                    onClick={() => setNav(false)}
                                    className="px-10 py-4 rounded-full bg-[#0367FB] text-white font-bold text-lg shadow-lg shadow-blue-500/20 inline-block"
                                >
                                    Hire Me
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
};

export default Navbar;
