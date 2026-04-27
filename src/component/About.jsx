import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { User, Book, Briefcase, Languages, Rocket, Sparkles, Trophy, Coffee, Target, Zap } from "lucide-react";

const TiltCard = ({ children, className = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

const About = () => {
    const data = [
        { label: "Name", value: "Kailasam N", icon: <User size={18} /> },
        { label: "Degree", value: "Bachelor Of Technology", icon: <Book size={18} /> },
        { label: "Role", value: "Software Developer", icon: <Briefcase size={18} /> },
        { label: "Languages", value: "Tamil, English", icon: <Languages size={18} /> },
    ];

    const skills = [
        { name: "React / Next JS", percent: 85, color: "from-[#0367FB] to-[#00BCD4]" },
        { name: "React Native", percent: 80, color: "from-[#FF9800] to-[#FF5722]" },
        { name: "Python / Fast API", percent: 75, color: "from-[#4CAF50] to-[#009688]" },
        { name: "JavaScript / TypeScript", percent: 90, color: "from-[#FFEB3B] to-[#FBC02D]" },
    ];

    const quickFacts = [
        { icon: <Trophy size={20} />, label: "5+ Major Projects" },
        { icon: <Coffee size={20} />, label: "Developer Mindset" },
        { icon: <Target size={20} />, label: "Goal Oriented" },
        { icon: <Zap size={20} />, label: "Fast Learner" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="about" className="py-24 px-4 md:px-10 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0367FB]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#C4D613]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-20">
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#C4D613] text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles size={14} className="glow-pulse" />
                        The Story So Far
                    </motion.div>
                    <motion.h2
                        className="text-white text-6xl md:text-8xl font-black tracking-tighter text-center leading-none mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        viewport={{ once: true }}
                    >
                        About <span className="text-gradient">Me.</span>
                    </motion.h2>
                    <motion.div 
                        className="h-1.5 w-24 bg-gradient-to-r from-[#0367FB] to-[#C4D613] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Image & Quick Stats */}
                    <div className="lg:col-span-5 space-y-8">
                        <TiltCard className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#0367FB] to-[#C4D613] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden premium-glass border border-white/20">
                                <img
                                    src="/mine.webp"
                                    alt="Kailasam N"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white font-black text-2xl tracking-tight">Kailasam N</p>
                                    <p className="text-[#C4D613] text-sm font-bold tracking-widest uppercase">Full Stack Developer</p>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Quick Facts Grid */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {quickFacts.map((fact, i) => (
                                <motion.div 
                                    key={i}
                                    variants={itemVariants}
                                    className="premium-glass p-4 rounded-2xl flex items-center gap-3 border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#C4D613] group-hover:bg-[#C4D613]/20 transition-colors">
                                        {fact.icon}
                                    </div>
                                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{fact.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Bio & Skills */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div 
                            className="premium-glass p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden border-white/10"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0367FB]/10 blur-[80px] rounded-full float-animation" />

                            <div className="relative z-10">
                                <h3 className="text-white text-3xl font-black mb-8 flex items-center gap-4">
                                    Crafting Digital Experiences
                                    <Rocket className="text-[#C4D613] float-animation" size={24} />
                                </h3>
                                
                                <p className="text-white/70 text-lg leading-relaxed mb-12">
                                    Passionate about building scalable web and mobile applications that merge 
                                    <span className="text-white font-bold mx-1">impeccable design</span> with 
                                    <span className="text-white font-bold mx-1">robust performance.</span> 
                                    My approach combines technical precision with a creative eye to solve complex problems through code.
                                </p>

                                {/* Personal Info List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    {data.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 group/item">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C4D613] border border-white/10 group-hover/item:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                                                <p className="text-white font-medium">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills Section */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-white font-black text-xl tracking-tight">Core Expertise</span>
                                        <div className="h-[2px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-6">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="space-y-2 group/skill">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-white/90 font-bold text-sm tracking-wide">{skill.name}</span>
                                                    <span className="text-[#C4D613] font-black text-xs">{skill.percent}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                                                    <motion.div
                                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.percent}%` }}
                                                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        {/* Shimmer effect inside bar */}
                                                        <motion.div 
                                                            className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12"
                                                            animate={{ x: ["-100%", "300%"] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


