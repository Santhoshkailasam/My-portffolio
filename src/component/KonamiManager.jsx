import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Sparkles, ShieldCheck } from "lucide-react";
import TechRain from "./TechRain";
import { useDevMode } from "../context/DevModeContext";

const KonamiManager = () => {
  const [active, setActive] = useState(false);
  const [sequence, setSequence] = useState([]);
  const targetSequence = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const { isDevMode, setIsDevMode } = useDevMode();

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
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        setSequence((prev) => {
          const newSequence = [...prev, event.key].slice(-4);
          console.log("Sequence:", newSequence); // Debug log
          if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
            console.log("Konami Triggered!");
            trigger();
          }
          return newSequence;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    // Show "OFF" card when dev mode is deactivated manually
    if (!isDevMode && active === false && sequence.length === 0) {
      // This might trigger on initial load, so we need a ref or a way to check if it was previously ON
    }
  }, [isDevMode]);

  // Better way: track previous state
  const [prevDevMode, setPrevDevMode] = useState(false);
  useEffect(() => {
    if (prevDevMode && !isDevMode) {
      // It was deactivated
      setMode("OFF");
      setActive(true);
      setTimeout(() => setActive(false), 2000);
    } else if (!prevDevMode && isDevMode) {
      // It was activated
      setMode("ON");
      setActive(true);
      setTimeout(() => setActive(false), 2000);
    }
    setPrevDevMode(isDevMode);
  }, [isDevMode]);

  const [mode, setMode] = useState("ON");

  const trigger = () => {
    if (active) return;
    setSequence([]);
    
    // Toggle state using functional update to avoid closure issues
    setIsDevMode((prev) => {
        const nextState = !prev;
        
        // Show card manually based on next state
        setMode(nextState ? "ON" : "OFF");
        setActive(true);
        playSuccessSound();
        
        return nextState;
    });
    
    // Auto-hide card after 2s
    setTimeout(() => setActive(false), 2000);
  };

  const handleDeactivate = (e) => {
    e.stopPropagation();
    setActive(false);
    if (isDevMode) toggleDevMode();
  };

  return (
    <>
      <TechRain active={active} />
      
      {/* Key Sequence Feedback */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100002] flex gap-4 pointer-events-none">
        <AnimatePresence>
          {sequence.length > 0 && !active && (
            sequence.map((key, i) => (
              <motion.div
                key={i + key}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 0.5, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center text-white font-black"
              >
                {key === "ArrowUp" && "↑"}
                {key === "ArrowDown" && "↓"}
                {key === "ArrowLeft" && "←"}
                {key === "ArrowRight" && "→"}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100001] flex items-center justify-center pointer-events-auto cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDeactivate}
          >
            <div className="absolute inset-0 bg-[#0367FB]/10 backdrop-blur-[2px]" />
            
            <motion.div
              className={`relative bg-gray-950/90 border-4 ${mode === 'ON' ? 'border-[#C4D613] shadow-[0_0_80px_rgba(196,214,19,0.5)]' : 'border-red-500 shadow-[0_0_80px_rgba(239,68,68,0.5)]'} p-10 rounded-[40px] text-center`}
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex justify-center gap-4 mb-6">
                <Terminal className={`${mode === 'ON' ? 'text-[#C4D613]' : 'text-red-500'} animate-pulse`} size={40} />
                <ShieldCheck className="text-[#0367FB] animate-bounce" size={40} />
              </div>
              <h2 className={`${mode === 'ON' ? 'text-[#C4D613]' : 'text-red-500'} text-4xl font-black italic uppercase tracking-tighter mb-2`}>
                Developer Mode: {mode}
              </h2>
              <p className="text-white font-bold opacity-70 mb-6">
                {mode === 'ON' ? 'Accessing hidden tech stack protocols...' : 'Protocols terminated. System standard.'}
              </p>
              
              <div className="flex items-center gap-2 justify-center">
                <Sparkles className={mode === 'ON' ? 'text-[#C4D613]' : 'text-red-500'} size={16} />
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">Konami Overdrive</span>
                <Sparkles className={mode === 'ON' ? 'text-[#C4D613]' : 'text-red-500'} size={16} />
              </div>
              <p className="mt-4 text-[8px] text-white/30 uppercase tracking-widest font-black">
                {mode === 'ON' ? 'Click to deactivate' : 'System Locked'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KonamiManager;
