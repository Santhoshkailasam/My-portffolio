import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles, ShieldCheck } from "lucide-react";
import TechRain from "./TechRain";

const KonamiManager = () => {
  const [active, setActive] = useState(false);
  const [sequence, setSequence] = useState([]);
  const targetSequence = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

  const playSuccessSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // A4
      oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); // A5

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.key].slice(-4);
        if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
          trigger();
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const trigger = () => {
    if (active) return;
    setActive(true);
    playSuccessSound();
    setTimeout(() => setActive(false), 8000);
  };

  return (
    <>
      <TechRain active={active} />
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100001] flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#0367FB]/10 backdrop-blur-[2px]" />
            
            <motion.div
              className="relative bg-gray-950/90 border-4 border-[#C4D613] p-10 rounded-[40px] shadow-[0_0_80px_rgba(196,214,19,0.5)] text-center"
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
            >
              <div className="flex justify-center gap-4 mb-6">
                <Terminal className="text-[#C4D613] animate-pulse" size={40} />
                <ShieldCheck className="text-[#0367FB] animate-bounce" size={40} />
              </div>
              <h2 className="text-[#C4D613] text-4xl font-black italic uppercase tracking-tighter mb-2">
                Developer Mode: ON
              </h2>
              <p className="text-white font-bold opacity-70 mb-6">Accessing hidden tech stack protocols...</p>
              
              <div className="flex items-center gap-2 justify-center">
                <Sparkles className="text-[#C4D613]" size={16} />
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">Konami Overdrive</span>
                <Sparkles className="text-[#C4D613]" size={16} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KonamiManager;
