import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="py-24 px-4 sm:px-10 bg-black relative overflow-hidden">
      {/* Background Decoration to match other sections */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367FB]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C4D613]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[#0077b5] text-[10px] font-black uppercase tracking-[0.3em] mb-12"
        >
          <Linkedin size={14} />
          Professional Network
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter"
        >
          Let's <span className="text-[#0077b5]">Connect</span> <br /> 
          and build the future.
        </motion.h2>

        {/* Profile Card - Premium Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group max-w-lg mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0077b5] to-[#0367FB] rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-gray-950/40 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8 text-left">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-[#0077b5]/50 p-1 overflow-hidden">
                  <img 
                    src="/Profile.jpeg" 
                    alt="Kailasam N" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Kailasam+N&background=0077b5&color=fff' }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#0077b5] p-1.5 rounded-full border-4 border-gray-950">
                  <Linkedin size={12} fill="white" className="text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white mb-1">Kailasam N</h3>
                <p className="text-[#0077b5] font-bold text-xs uppercase tracking-widest mb-4">Software Developer</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold">React</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold">Full Stack</span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-[10px] font-bold">UI/UX</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-white text-xs font-bold">Official Profile</p>
                  <p className="text-gray-500 text-[10px]">LinkedIn Verified Identity</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/kailasam-n-8975b3327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#0077b5] hover:bg-[#006396] text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-blue-500/20 active:scale-95"
              >
                Connect Now
                <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest"
        >
          <Sparkles size={14} className="text-[#C4D613]" />
          Available for networking & collaboration
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInSection;