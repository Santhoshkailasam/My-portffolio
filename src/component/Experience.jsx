import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Briefcase, Calendar, Award, ExternalLink, Sparkles } from "lucide-react";

const Experience = () => {
  const experiencedata = [
    {
      company: "Monakin Pvt ltd",
      role: "Web and Mobile App Developer",
      duration: "Jan 2026 - Mar 2026",
      description:
        "Monakin is a leading provider of innovative software solutions.",
      tasks: [
        "Developed and maintained web and mobile applications using React and React Native.",
        "Collaborated with cross-functional teams to design, develop, and deploy new features.",
        "Optimized application performance and user experience.",
      ],
      certificate:
        "https://drive.google.com/file/d/1-meFa_PpGze530BnijwN-OcZNNVoW/view?usp=sharing",
      color: "from-[#0367FB] to-[#7FB2FF]"
    },
    {
      company: "EA one solution",
      role: "UI/UX Intern",
      duration: "July 2025",
      description:
        "EA one solution is a leading provider of innovative software solutions.",
      tasks: [
        "Gained hands-on experience in web design by creating user-friendly website layouts.",
        "Learned to design professional UI/UX prototypes using Figma.",
        "Collaborated with a team to create user-friendly interfaces.",
      ],
      certificate:
        "https://drive.google.com/file/d/1J8h8NYROzIvxDV3xU_pJSy1iCYPIC3jA/view?usp=sharing",
      color: "from-[#C4D613] to-[#BDD749]"
    },
     {
      company: "Interain AI",
      role: "Data Analyst Intern",
      duration: "Sep 2024 - Nov 2024",
      description:
        "Interain AI is empowering students, colleges, and companies with AI-driven, recruitment automation solutions.",
      tasks: [
        "Extracted and cleaned verbal ability and science data from multiple sources.",
        "Converted data into structured formats like JSON.",
        "Organized datasets for seamless use in AI training.",
      ],
      certificate:
        "https://drive.google.com/file/d/1-meFa_PpGze530BnijwN-OxX3cZNNVoW/view?usp=sharing",
      color: "from-[#0367FB] to-[#7FB2FF]"
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "circOut" } 
    },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-10 bg-black/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#0367FB]/5 blur-[120px] rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#C4D613]/5 blur-[120px] rounded-full translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0367FB]/10 border border-[#0367FB]/20 text-[#0367FB] text-xs font-bold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase size={14} />
            Professional Journey
          </motion.div>
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work <span className="text-[#C4D613]">Experience</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {experiencedata.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative group bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Building2 size={18} className="text-[#C4D613]" />
                       <h3 className="text-white font-bold text-2xl tracking-tight leading-none group-hover:text-[#C4D613] transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-medium">
                      <Briefcase size={14} />
                      <span>{exp.role}</span>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-bold text-gray-300">
                    <Calendar size={14} className="text-[#0367FB]" />
                    {exp.duration}
                  </div>
                </div>

                {/* Body */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 italic">
                  "{exp.description}"
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-2 text-[#C4D613] text-sm font-bold uppercase tracking-widest">
                    <Sparkles size={14} />
                    Key contributions
                  </div>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0367FB]/60 group-hover/item:bg-[#0367FB] group-hover/item:scale-125 transition-all" />
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer / CTA */}
                {exp.certificate && (
                  <motion.a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-white/5 border border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-[#C4D613]/30 transition-all group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Professional Certificate</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

