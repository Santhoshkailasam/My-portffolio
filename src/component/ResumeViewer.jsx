import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, X, Eye } from "lucide-react";

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="resume" className="py-20 px-4 sm:px-10 bg-black/20 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0367FB]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C4D613]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Curriculum <span className="text-[#C4D613]">Vitae</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Explore my professional journey, skills, and accomplishments in detail.
            </p>
          </motion.div>
        </div>

        {!isOpen ? (
          <motion.div 
            className="flex flex-col items-center justify-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-4 bg-gray-900/50 backdrop-blur-xl border border-white/10 px-10 py-6 rounded-3xl hover:border-[#0367FB]/50 transition-all active:scale-95 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0367FB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-[#0367FB]/20 flex items-center justify-center text-[#0367FB]">
                <Eye size={24} />
              </div>
              <div className="text-left ">
                <p className="text-white font-black text-xl">View Resume Inline</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Interactive Preview</p>
              </div>
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="bg-gray-900/40 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 border-b border-white/5 bg-gray-950/40 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0367FB]/20 flex items-center justify-center text-[#0367FB] shadow-inner">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg">Resume.pdf</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C4D613] animate-pulse" />
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Live Preview</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="/updated_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href="/updated_resume.pdf"
                  download
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#C4D613] text-black px-6 py-3.5 rounded-2xl text-sm font-black hover:bg-[#C4D613]/80 transition-all shadow-xl shadow-yellow-400/10"
                >
                  <Download size={20} />
                  Download
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-all flex items-center justify-center"
                  title="Close Viewer"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="relative w-full h-[600px] md:h-[800px] bg-[#111]" data-lenis-prevent>
              <iframe
                src="/updated_resume.pdf#view=FitH&toolbar=0&navpanes=0"
                className="w-full h-full border-none"
                title="Resume Preview"
                loading="lazy"
              />
              
              {/* Loading placeholder */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-900/50">
                <div className="w-8 h-8 border-4 border-[#0367FB] border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-500 text-sm font-medium">
            Looking for a specific format? <a href="mailto:Kailasam5107@gmail.com" className="text-[#0367FB] hover:underline">Contact me directly</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};


export default ResumeViewer;
