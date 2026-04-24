import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, Sparkles } from "lucide-react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        // Show hint after 3 seconds
        const timer = setTimeout(() => setShowHint(true), 3000);
        // Hide hint after 13 seconds
        const hideTimer = setTimeout(() => setShowHint(false), 13000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const playSuccessSound = () => {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "square";
            oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
            oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); 

            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        } catch (e) {
            console.error("Audio failed", e);
        }
    };

    const triggerEasterEgg = (e) => {
        e.preventDefault();
        e.stopPropagation();
        playSuccessSound();
        setUnlocked(true);
        setTimeout(() => setUnlocked(false), 6000);
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
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
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#0367FB] to-[#C4D613] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-[#C4D613]/20 transition-all shrink-0 cursor-pointer active:scale-90 relative"
                        onClick={triggerEasterEgg}
                        title="Click for Surprise ✨"
                    >
                        <Rocket size={18} className="group-hover:rotate-12 transition-transform" />
                        <motion.div
                            className="absolute -top-1 -right-1 text-[#C4D613]"
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
                                    <div className="relative bg-[#C4D613] text-black text-[9px] font-black py-2 px-4 rounded-xl whitespace-nowrap shadow-[0_0_20px_rgba(196,214,19,0.3)] uppercase tracking-wider flex items-center gap-2">
                                        <span>Click Rocket or type <span className="bg-black/10 px-1 rounded">↑ ↓ ← →</span></span>
                                        {/* Triangle arrow */}
                                        <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#C4D613] rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
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

        {/* Easter Egg Overlay */}
        <AnimatePresence>
          {unlocked && (
            <motion.div
              className="fixed inset-0 z-[100000] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
              
              <motion.div
                className="relative bg-gray-950 border-4 border-[#C4D613] p-12 rounded-[50px] shadow-[0_0_100px_rgba(196,214,19,0.5)] text-center max-w-lg mx-4"
                initial={{ scale: 0, rotate: -20, y: 100 }}
                animate={{ scale: 1, rotate: 0, y: 0 }}
                exit={{ scale: 0, rotate: 20, y: 100 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="inline-block mb-6 p-6 rounded-3xl bg-[#C4D613]/20 text-[#C4D613] border border-[#C4D613]/30"
                >
                  <Sparkles size={64} />
                </motion.div>
                
                <h2 className="text-[#C4D613] text-5xl font-black mb-4 tracking-tighter italic uppercase leading-none">
                  Dev Mode <br /> Unlocked
                </h2>
                
                <div className="h-1.5 w-32 bg-[#0367FB] mx-auto rounded-full mb-6" />
                
                <p className="text-white text-xl font-bold opacity-90 mb-8">
                  Rocket Secret Activated!
                </p>
                
                <div className="flex gap-3 justify-center mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-4 h-4 rounded-full bg-[#0367FB]"
                      animate={{ 
                        y: [0, -15, 0],
                        backgroundColor: ["#0367FB", "#C4D613", "#0367FB"]
                      }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.15 }}
                    />
                  ))}
                </div>

                <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
                  Access Granted • Enjoy the show
                </p>
                
                <div className="absolute inset-0 pointer-events-none">
                   {Array.from({ length: 40 }).map((_, i) => (
                     <motion.div
                       key={i}
                       className="absolute w-2 h-2 rounded-full"
                       style={{
                         backgroundColor: i % 2 === 0 ? "#C4D613" : "#0367FB",
                         left: `${Math.random() * 100}%`,
                         top: `${Math.random() * 100}%`,
                       }}
                       animate={{
                         y: [0, -200 - Math.random() * 200],
                         x: [(Math.random() - 0.5) * 300, (Math.random() - 0.5) * 600],
                         opacity: [1, 0],
                         rotate: [0, 360],
                         scale: [1, 0],
                       }}
                       transition={{
                         duration: 3 + Math.random() * 2,
                         repeat: Infinity,
                         delay: Math.random() * 2
                       }}
                     />
                   ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;
