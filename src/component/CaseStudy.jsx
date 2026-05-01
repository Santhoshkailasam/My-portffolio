import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Server, Layout, Cpu, Target, Rocket } from "lucide-react";

const CaseStudy = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const sections = [
    {
      title: "The Challenge",
      icon: <Target className="text-orange-500" />,
      content: project.challenge || "Building a high-performance, scalable solution with a focus on user experience and real-time data processing."
    },
    {
      title: "Technical Stack",
      icon: <Cpu className="text-blue-500" />,
      content: project.techDescription || "Leveraging modern frameworks like React, Node.js, and specialized libraries to ensure robustness and performance."
    },
    {
      title: "Key Outcomes",
      icon: <Rocket className="text-emerald-500" />,
      content: project.outcome || "Achieved 99+ Lighthouse scores, significantly reduced load times, and delivered a seamless cross-platform experience."
    }
  ];

  const modalContent = (
    <motion.div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      
      <motion.div 
        className="relative w-full max-w-5xl bg-gray-950 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-auto max-h-[90vh] shadow-2xl z-[100000]"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[100001] w-12 h-12 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 backdrop-blur-md mb-4 inline-block">
              Case Study
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-none">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-gray-950">
          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold uppercase tracking-tight">{section.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="space-y-4 pt-8 border-t border-white/5">
               <h4 className="text-white font-bold text-sm uppercase tracking-widest text-white/40">Technical Highlights</h4>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Layout size={20} className="text-blue-400 mb-2" />
                    <p className="text-white font-bold text-sm text-[12px] sm:text-sm">Responsive UI</p>
                    <p className="text-white/40 text-[10px]">Pixel perfect design</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <Server size={20} className="text-emerald-400 mb-2" />
                    <p className="text-white font-bold text-sm text-[12px] sm:text-sm">Scalable API</p>
                    <p className="text-white/40 text-[10px]">Optimized performance</p>
                  </div>
               </div>
            </div>

            <div className="flex gap-4 pt-8 flex-wrap">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] py-4 rounded-2xl bg-primary text-white text-sm font-black flex items-center justify-center gap-2 hover:bg-primary/80 transition-colors shadow-xl shadow-primary/20"
              >
                <Github size={18} /> Source Code
              </a>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] py-4 rounded-2xl bg-white text-black text-sm font-black flex items-center justify-center gap-2 hover:bg-white/80 transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? createPortal(modalContent, modalRoot) : null;
};

export default CaseStudy;
