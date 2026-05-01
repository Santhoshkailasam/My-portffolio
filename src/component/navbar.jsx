import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Sparkles, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useDevMode } from "../context/DevModeContext";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const { toggleDevMode } = useDevMode();

    useEffect(() => {
        // Show hint after 3 seconds, but not on mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const timer = setTimeout(() => setShowHint(true), 3000);
        // Hide hint after 13 seconds
        const hideTimer = setTimeout(() => setShowHint(false), 13000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [nav]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const triggerEasterEgg = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleDevMode();
    };

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
                ? "py-4 bg-gray-950/90 backdrop-blur-md border-b border-white/5 shadow-2xl" 
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
                    <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-accent/20 transition-all shrink-0 cursor-pointer active:scale-90 relative"
                        onClick={triggerEasterEgg}
                        title="Click for Surprise ✨"
                    >
                        <Rocket size={18} className="group-hover:rotate-12 transition-transform" />
                        <motion.div
                            className="absolute -top-1 -right-1 text-accent"
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Sparkles size={10} />
                        </motion.div>

                        {/* Hint Tooltip */}
                        <AnimatePresence>
                            {showHint && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: 20 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, x: 20 }}
                                    className="absolute left-full ml-4 pointer-events-none"
                                >
                                    <div className="relative bg-accent text-black text-[9px] font-black py-2 px-4 rounded-xl whitespace-nowrap shadow-[0_0_20px_rgba(196,214,19,0.3)] uppercase tracking-wider flex items-center gap-2">
                                        <span>Click Rocket or type <span className="bg-black/10 px-1 rounded">↑ ↓ ← →</span></span>
                                        {/* Triangle arrow */}
                                        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-accent rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <span className="text-white font-black text-xl sm:text-2xl tracking-tighter">
                        KAILASAM<span className="text-accent">PORTFOLIO</span>
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
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent rounded-full group-hover:w-full transition-all duration-300"
                            />
                        </li>
                    ))}
                    <li>
                        <a 
                            href="#contact" 
                            className="ml-2 lg:ml-4 px-5 lg:px-6 py-2 rounded-full bg-primary text-white font-bold text-[13px] hover:bg-primary/80 transition-all shadow-lg shadow-blue-500/20"
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
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setNav(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                        />
                        
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-[100dvh] w-[80%] max-w-[400px] bg-gray-950/98 backdrop-blur-2xl flex flex-col z-[60] shadow-2xl border-l border-white/10 overflow-hidden"
                        >
                            {/* Decorative background elements */}
                            <div className="absolute top-[-5%] right-[-5%] w-[150px] h-[150px] bg-primary/10 blur-[80px] rounded-full" />
                            <div className="absolute bottom-[-5%] left-[-5%] w-[150px] h-[150px] bg-accent/10 blur-[80px] rounded-full" />

                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/5">
                                <span className="text-white font-black text-lg tracking-tighter">
                                    KAILASAM<span className="text-accent">PORT</span>
                                </span>
                                <button 
                                    onClick={() => setNav(false)} 
                                    className="text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-95 transition-all"
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            
                            {/* Navigation Links */}
                            <div className="flex-1 flex flex-col px-8 py-10 overflow-y-auto min-h-0" data-lenis-prevent>
                                <nav>
                                    <ul className="space-y-4">
                                        {navLinks.map((link, i) => (
                                            <motion.li 
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                                            >
                                                <a
                                                    href={link.href}
                                                    onClick={() => setNav(false)}
                                                    className="group flex items-center justify-between py-3"
                                                >
                                                    <span className="text-3xl font-black text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-tighter">
                                                        {link.name}
                                                    </span>
                                                    <motion.div 
                                                        className="w-0 h-0.5 bg-accent group-hover:w-8 transition-all duration-300"
                                                    />
                                                </a>
                                            </motion.li>
                                        ))}
                                        <motion.li 
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4 }}
                                            className="pt-6"
                                        >
                                            <a 
                                                href="#contact" 
                                                onClick={() => setNav(false)}
                                                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                            >
                                                Hire Me <Rocket size={18} />
                                            </a>
                                        </motion.li>
                                    </ul>
                                </nav>
                            </div>

                            {/* Footer Socials */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-8 border-t border-white/5 bg-white/[0.01]"
                            >
                                <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold mb-5">Connect</p>
                                <div className="flex justify-between items-center">
                                    {[
                                        { icon: <Github size={20} />, href: "https://github.com/Santhoshkailasam" },
                                        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/santhosh-kailasam" },
                                        { icon: <Mail size={20} />, href: "mailto:contact@santhoshkailasam.com" }
                                    ].map((social, i) => (
                                        <a 
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/20 hover:bg-accent/5 transition-all active:scale-90"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
