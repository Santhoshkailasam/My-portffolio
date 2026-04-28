import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, ShieldCheck, MapPin, Users, Briefcase, Activity, Globe, Sparkles } from 'lucide-react';

const BentoTile = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`premium-glass rounded-[2rem] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#0077b5]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0077b5]/5 ${className}`}
    >
        {children}
    </motion.div>
);

const LinkedInSection = () => {
  return (
    <section id="linkedin" className="py-10 md:py-20 px-4 sm:px-10 bg-[#020205] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#0077b5]/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[#0367FB]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-4 md:mb-8 gap-6">
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] text-[10px] font-black uppercase tracking-[0.4em]">
              <Linkedin size={14} fill="#0077b5" />
              Network Node
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-none">
                Professional <br />
                <span className="text-gradient">Ecosystem.</span>
            </h2>
          </div>
          <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em] mb-2 text-center md:text-right">
            LinkedIn // Kailasam N // Connect
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          
          {/* Main Profile Tile */}
          <BentoTile className="md:col-span-2 md:row-span-2 overflow-hidden !p-0">
            <div className="h-40 bg-gradient-to-r from-[#0077b5] to-[#0367FB] relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/80 to-transparent" />
            </div>
            <div className="px-8 pb-8 relative">
                <div className="absolute -top-12 left-8">
                    <div className="w-24 h-24 rounded-2xl border-4 border-[#020205] overflow-hidden bg-gray-900 shadow-2xl">
                        <img 
                            src="/Profile.jpeg" 
                            alt="Kailasam N" 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Kailasam+N&background=0077b5&color=fff' }}
                        />
                    </div>
                </div>
                <div className="pt-16 space-y-6">
                    <div>
                        <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
                            Kailasam N
                            <ShieldCheck size={20} className="text-[#0077b5]" />
                        </h3>
                        <p className="text-white/60 font-medium italic mt-1">Software Developer | Full Stack Enthusiast</p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-sm text-white/40 font-bold">
                            <MapPin size={16} className="text-[#0077b5]" />
                            Tamil Nadu, India
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/40 font-bold">
                            <Briefcase size={16} className="text-[#0367FB]" />
                            Available for Collaboration
                        </div>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/kailasam-n-8975b3327"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#0077b5] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#006396] transition-all group/btn shadow-xl shadow-blue-500/10"
                    >
                        Connect on LinkedIn
                        <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
          </BentoTile>

          {/* Connections Stats Tile */}
          <BentoTile className="md:col-span-1" delay={0.1}>
            <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] mb-4">
                <Users size={24} />
            </div>
            <div>
                <p className="text-4xl font-black text-white tracking-tighter">500+</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Professional Connections</p>
            </div>
          </BentoTile>

          {/* Presence Tile */}
          <BentoTile className="md:col-span-1" delay={0.2}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                <Activity size={24} />
            </div>
            <div>
                <p className="text-4xl font-black text-white tracking-tighter">99.9%</p>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Network Reliability</p>
            </div>
          </BentoTile>

          {/* Recognition Tile / Call to Action */}
          <BentoTile className="md:col-span-2 relative overflow-hidden group/cta" delay={0.3}>
            <div className="relative z-10 flex items-center justify-between gap-6">
                <div className="space-y-2">
                    <p className="text-white font-black text-xl tracking-tight">Open for Projects</p>
                    <p className="text-white/40 text-xs font-medium max-w-[200px]">Currently seeking innovative collaborations in web development.</p>
                </div>
                <div className="w-16 h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover/cta:scale-110 transition-transform group-hover/cta:border-[#0077b5]/30">
                    <Linkedin size={28} fill="#0077b5" className="text-[#0077b5]" />
                </div>
            </div>
            {/* Subtle Gradient Line */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0077b5] to-[#0367FB] opacity-30 group-hover/cta:opacity-100 transition-opacity" />
          </BentoTile>

        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;