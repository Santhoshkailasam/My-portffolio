import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const EasterEgg = () => {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleTrigger = () => {
      if (!unlocked) {
        setUnlocked(true);
        setTimeout(() => setUnlocked(false), 6000);
      }
    };

    window.addEventListener("triggerEasterEgg", handleTrigger);
    return () => window.removeEventListener("triggerEasterEgg", handleTrigger);
  }, [unlocked]);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          
          <motion.div
            className="relative bg-gray-950 border-4 border-[#C4D613] p-12 rounded-[50px] shadow-[0_0_100px_rgba(196,214,19,0.4)] text-center max-w-lg mx-4"
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
              Secret System Activated!
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
  );
};

export default EasterEgg;
