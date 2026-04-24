import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Globe, Layers, Layout, Cpu, Smartphone, Blocks } from "lucide-react";

const icons = [Code2, Database, Globe, Layers, Layout, Cpu, Smartphone, Blocks];

const TechRain = ({ active }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        const id = Date.now() + Math.random();
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        const newParticle = {
          id,
          Icon,
          left: `${Math.random() * 100}%`,
          duration: 3 + Math.random() * 4,
          size: 20 + Math.random() * 40,
          color: Math.random() > 0.5 ? "#C4D613" : "#0367FB",
        };
        setParticles((prev) => [...prev, newParticle]);

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 7000);
      }, 150);

      return () => clearInterval(interval);
    } else {
      setParticles([]);
    }
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100000] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{ y: window.innerHeight + 100, opacity: [0, 1, 1, 0], rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: p.duration, ease: "linear" }}
            className="absolute"
            style={{ left: p.left, color: p.color }}
          >
            <p.Icon size={p.size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TechRain;
