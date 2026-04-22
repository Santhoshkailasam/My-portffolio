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
    <section id="experience" className="py-16 px-4 sm:px-10 bg-black/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#0367FB]/5 blur-[80px] rounded-full -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#C4D613]/5 blur-[80px] rounded-full translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0367FB]/10 border border-[#0367FB]/20 text-[#0367FB] text-xs font-bold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase size={14} />
            Professional Journey
          </motion.div>
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            Work <span className="text-[#C4D613]">Experience</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {experiencedata.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative group bg-gray-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Building2 size={18} className="text-[#C4D613] shrink-0" />
                       <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight leading-none group-hover:text-[#C4D613] transition-colors">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-medium text-sm sm:text-base">
                      <Briefcase size={14} className="shrink-0" />
                      <span>{exp.role}</span>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-300 whitespace-nowrap">
                    <Calendar size={14} className="text-[#0367FB]" />
                    {exp.duration}
                  </div>
                </div>

                {/* Body */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 sm:mb-8 italic font-medium">
                  "{exp.description}"
                </p>

                <div className="space-y-4 mb-8 sm:mb-10 flex-grow">
                  <div className="flex items-center gap-2 text-[#C4D613] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    <Sparkles size={14} />
                    Key contributions
                  </div>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3 group/item text-sm sm:text-base">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0367FB]/60 group-hover/item:bg-[#0367FB] group-hover/item:scale-125 transition-all shrink-0" />
                        <span className="text-gray-300 leading-relaxed font-normal">
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
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 sm:px-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white text-sm sm:text-base font-semibold hover:bg-white/10 hover:border-[#C4D613]/30 transition-all group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
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

