import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, Target, Calendar, Award } from "lucide-react";

const Education = () => {
    const educationdata = [
        {
            institution: "KCG College Of Technology",
            degree: "Bachelor of Technology",
            field: "Information Technology",
            duration: "2022 - 2026",
            score: "8.02 CGPA",
            icon: <GraduationCap size={24} />,
            color: "#0367FB"
        },
        {
            institution: "Mannar Higher Secondary School",
            degree: "12th Grade",
            duration: "2020 - 2022",
            score: "80.05%",
            icon: <School size={24} />,
            color: "#C4D613"
        },
        {
            institution: "Government Higher Secondary School",
            degree: "10th Grade",
            duration: "2019 - 2020",
            score: "76%",
            icon: <Award size={24} />,
            color: "#0367FB"
        }
    ];

    return (
        <section id="education" className="min-h-screen py-16 px-4 bg-black/10 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0367FB]/5 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C4D613]/5 blur-[150px] rounded-full -ml-64 -mb-64 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4D613]/10 border border-[#C4D613]/20 text-[#C4D613] text-xs font-bold uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GraduationCap size={14} />
                        Academic Background
                    </motion.div>
                    <motion.h2
                        className="text-white text-5xl md:text-6xl font-extrabold tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        My <span className="text-[#C4D613]">Education</span>
                    </motion.h2>
                    <motion.div 
                        className="h-1.5 w-20 bg-[#0367FB] mx-auto rounded-full mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                    />
                </div>

                <div className="relative">
                    {/* Glowing Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#0367FB] to-[#C4D613]"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                        />
                    </div>

                    <div className="space-y-16 md:space-y-0">
                        {educationdata.map((edu, index) => {
                            const isLeft = index % 2 !== 0;
                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full md:mb-16 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Content Card */}
                                    <div className="w-full md:w-[45%]">
                                        <motion.div 
                                            className="bg-gray-900/40 backdrop-blur-lg border border-white/5 p-5 sm:p-6 md:p-8 rounded-3xl hover:border-white/10 transition-all duration-500 shadow-2xl group relative"
                                            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                                            viewport={{ once: true, amount: 0.1 }}
                                        >
                                            {/* Glow effect on hover */}
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0367FB] to-[#C4D613] rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500 blur"></div>
                                            
                                            <div className="relative z-10">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                                    <div className="p-2 w-fit rounded-xl bg-white/5 text-[#C4D613]">
                                                        {edu.icon}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[#0367FB] text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                                            <Calendar size={12} /> {edu.duration}
                                                        </span>
                                                        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-1 leading-tight">{edu.degree}</h3>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <p className="text-gray-300 font-medium text-sm sm:text-base flex items-center gap-2">
                                                        <School size={16} className="text-gray-500 shrink-0" />
                                                        <span className="truncate">{edu.institution}</span>
                                                    </p>
                                                    <div className="flex items-center justify-between pt-4 border-t border-white/5 gap-2">
                                                        <span className="text-gray-500 text-[10px] sm:text-sm font-medium uppercase">Standing</span>
                                                        <span className="bg-[#C4D613]/10 text-[#C4D613] px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-sm font-bold flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                                                            <Target size={14} />
                                                            {edu.score}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Center Point */}
                                    <motion.div 
                                        className="absolute left-1/2 transform -translate-x-1/2 top-12 md:top-1/2 md:-translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-900 border-2 border-white/20 z-20 hidden md:flex items-center justify-center group"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#C4D613] shadow-[0_0_15px_rgba(196,214,19,0.5)] group-hover:scale-125 transition-transform" />
                                    </motion.div>

                                    {/* Spacer for layout */}
                                    <div className="hidden md:block w-[45%]" />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;