import React from "react";
import { motion } from "framer-motion";
import { User, Book, Briefcase, Languages, Rocket, Sparkles } from "lucide-react";

const About = () => {
    const data = [
        { label: "Name", value: "Kailasam N", icon: <User size={18} /> },
        { label: "Degree", value: "Bachelor Of Technology", icon: <Book size={18} /> },
        { label: "Role", value: "Software Developer", icon: <Briefcase size={18} /> },
        { label: "Languages", value: "Tamil, English", icon: <Languages size={18} /> },
    ];

    const skills = [
        { name: "Python", percent: 50, color: "from-[#4CAF50] to-[#81C784]" },
        { name: "React", percent: 70, color: "from-[#0367FB] to-[#7FB2FF]" },
        { name: "React Native", percent: 80, color: "from-[#FF9800] to-[#FFB74D]" },
        { name: "Next JS", percent: 60, color: "from-[#2196F3] to-[#64B5F6]" },
        { name: "JavaScript", percent: 40, color: "from-[#FFEB3B] to-[#FFF176]" },
        { name: "Tailwind CSS", percent: 60, color: "from-[#00BCD4] to-[#4DD0E1]" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="py-12 px-4 md:px-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4D613]/10 border border-[#C4D613]/20 text-[#C4D613] text-xs font-bold uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles size={14} />
                        Get to know me
                    </motion.div>
                    <motion.h2
                        className="text-white text-5xl md:text-6xl font-extrabold tracking-tight"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        About <span className="text-[#C4D613]">Me</span>
                    </motion.h2>
                    <motion.div 
                        className="h-1.5 w-20 bg-[#0367FB] mx-auto rounded-full mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
                    {/* Image Section */}
                    <motion.div
                        className="relative group w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px]"
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#0367FB]/20 to-[#C4D613]/20 rounded-2xl opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000 will-change-opacity pointer-events-none"></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#C4D613]/50 transition-colors duration-500 shadow-2xl bg-gray-900/40">
                            <img
                                src="/mine.webp"
                                alt="Kailasam N"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                fetchPriority="low"
                                loading="lazy"
                            />
                            {/* Decorative element */}
                            <div className="absolute bottom-4 right-4 bg-black/80 border border-white/10 p-3 rounded-xl shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <Rocket className="text-[#C4D613]" size={24} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Info and Skills Card */}
                    <motion.div
                        className="w-full lg:max-w-xl bg-gray-900/60 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group will-change-transform"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0367FB]/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#0367FB]/20 transition-colors duration-700"></div>

                        {/* Personal Details */}
                        <motion.ul 
                            className="space-y-6 mb-12"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {data.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center group/item"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#C4D613] mr-4 group-hover/item:bg-[#C4D613]/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center w-full">
                                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider w-[100px]">{item.label}</span>
                                        <span className="text-white font-medium text-lg">{item.value}</span>
                                    </div>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Skillset */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="text-white text-2xl font-bold tracking-tight">Skills & Expertise</h3>
                                <div className="h-px flex-1 bg-white/10"></div>
                            </div>
                            
                            <motion.div 
                                className="grid grid-cols-1 gap-5"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {skills.map((skill, index) => (
                                    <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="text-gray-300 font-semibold text-sm">{skill.name}</span>
                                            <span className="text-[#C4D613] font-mono text-xs">{skill.percent}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-[1px]">
                                            <motion.div
                                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                                initial={{ width: "0%" }}
                                                whileInView={{ width: `${skill.percent}%` }}
                                                transition={{ duration: 1.5, ease: "circOut", delay: index * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;


