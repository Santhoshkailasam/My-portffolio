import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Shield, Sword, Wand2, Sparkles, TrendingUp, Cpu, Layout, Boxes, Bug, Target, Timer } from 'lucide-react';

const GamifiedSection = () => {
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [unlockedAchievements, setUnlockedAchievements] = useState([]);

    const skills = [
        { name: "Frontend Sorcery", level: 9, icon: <Wand2 size={20} />, color: "text-blue-400", xp: 150 },
        { name: "Logic Engine", level: 8, icon: <Cpu size={20} />, color: "text-purple-400", xp: 120 },
        { name: "Design Defense", level: 7, icon: <Shield size={20} />, color: "text-emerald-400", xp: 100 },
        { name: "Code Combat", level: 8, icon: <Sword size={20} />, color: "text-red-400", xp: 130 },
    ];

    const achievements = [
        { id: 1, title: "Bug Crusher", desc: "Found and fixed a critical bug at 3 AM", icon: "👾", xpNeeded: 100 },
        { id: 2, title: "Pixel Perfect", desc: "Aligned a div perfectly on the first try", icon: "🎯", xpNeeded: 300 },
        { id: 3, title: "State Master", desc: "Used Redux/Zustand without getting confused", icon: "🧠", xpNeeded: 600 },
        { id: 4, title: "App Architect", desc: "Built a production-ready Farmer App", icon: "🏗️", xpNeeded: 1000 },
    ];

const [isHunting, setIsHunting] = useState(false);
    const [bugPos, setBugPos] = useState({ top: '50%', left: '50%' });
    const [gameScore, setGameScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);

    const handleLevelUp = (skillXp) => {
        const newXp = xp + skillXp;
        setXp(newXp);
        
        const newLevel = Math.floor(newXp / 500) + 1;
        if (newLevel > level) setLevel(newLevel);

        achievements.forEach(ach => {
            if (newXp >= ach.xpNeeded && !unlockedAchievements.includes(ach.id)) {
                setUnlockedAchievements(prev => [...prev, ach.id]);
            }
        });
    };

    const startBugHunt = () => {
        setIsHunting(true);
        setGameScore(0);
        setTimeLeft(10);
        moveBug();
        
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsHunting(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const moveBug = () => {
        const top = Math.floor(Math.random() * 80) + 10 + '%';
        const left = Math.floor(Math.random() * 80) + 10 + '%';
        setBugPos({ top, left });
    };

    const squashBug = () => {
        setGameScore(prev => prev + 1);
        handleLevelUp(25); // Gain 25 XP per bug
        moveBug();
    };

    return (
        <section className="py-24 px-4 md:px-10 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0367FB]/10 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C4D613]/5 blur-[150px] rounded-full -ml-64 -mb-64 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0367FB]/10 border border-[#0367FB]/20 text-[#0367FB] text-xs font-black uppercase tracking-wider mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Trophy size={14} />
                        Dev Quest
                    </motion.div>
                    <motion.h2 
                        className="text-white text-5xl md:text-6xl font-black tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My <span className="text-[#0367FB]">Developer</span> Stats
                    </motion.h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
                        Interact with my skills to "Level Up" and unlock my professional achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Character Card */}
                    <motion.div 
                        className="lg:col-span-4 bg-gray-900/60 border border-white/10 rounded-[32px] p-8 relative overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#0367FB] to-[#C4D613] p-1 shadow-2xl">
                                    <div className="w-full h-full rounded-[22px] bg-gray-900 flex items-center justify-center overflow-hidden">
                                        <img src="/mine.webp" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <motion.div 
                                    className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl bg-gray-900 border-2 border-[#0367FB] flex items-center justify-center shadow-xl"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="text-white font-black text-lg">{level}</span>
                                </motion.div>
                            </div>

                            <h3 className="text-white font-black text-2xl mb-1">Kailasam N</h3>
                            <p className="text-[#0367FB] text-xs font-bold uppercase tracking-widest mb-6">Master Full-Stack Architect</p>

                            <div className="w-full space-y-4">
                                <div className="flex justify-between text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">
                                    <span>Experience (XP)</span>
                                    <span>{xp} / {(level) * 500}</span>
                                </div>
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-gradient-to-r from-[#0367FB] to-[#C4D613]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(xp % 500) / 5}%` }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full mt-8">
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase">Class</p>
                                    <p className="text-white text-sm font-bold">MERN Mage</p>
                                </div>
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-3">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase">Rank</p>
                                    <p className="text-white text-sm font-bold">Elite Dev</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills & Achievements */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Interactive Skills */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, i) => (
                                <motion.button
                                    key={i}
                                    className="bg-gray-900/40 border border-white/5 p-5 rounded-3xl hover:border-white/20 transition-all text-left group relative overflow-hidden"
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleLevelUp(skill.xp)}
                                >
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`p-3 rounded-2xl bg-white/5 ${skill.color} group-hover:scale-110 transition-transform`}>
                                            {skill.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">{skill.name}</h4>
                                            <div className="flex items-center gap-1 mt-1">
                                                {Array.from({ length: 10 }).map((_, idx) => (
                                                    <div key={idx} className={`w-2 h-1 rounded-full ${idx < skill.level ? 'bg-[#0367FB]' : 'bg-white/5'}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Sparkles size={16} className="text-[#C4D613]" />
                                        </div>
                                    </div>
                                    {/* Click hint */}
                                    <span className="absolute bottom-2 right-4 text-[8px] text-gray-600 font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">+ {skill.xp} XP</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Interactive Games Area */}
                        <div className="bg-gray-950/50 border border-white/5 rounded-[32px] p-6 sm:p-8 relative min-h-[350px] flex flex-col items-center justify-center overflow-hidden">
                            <div className="absolute top-6 left-8 flex items-center gap-3">
                                <Bug size={20} className="text-red-400" />
                                <h4 className="text-white font-black text-xl">Bug Hunter Arena</h4>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isHunting ? (
                                    <motion.div 
                                        key="start"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                                            <Target size={40} className="text-red-400" />
                                        </div>
                                        <h5 className="text-white font-bold text-lg mb-2">Squash the Bugs!</h5>
                                        <p className="text-gray-500 text-sm mb-8 max-w-xs">Gain 25 XP for every bug you squash in 10 seconds. Ready?</p>
                                        <button 
                                            onClick={startBugHunt}
                                            className="px-8 py-3 bg-red-500 text-white font-black rounded-2xl hover:bg-red-600 transition-colors shadow-xl shadow-red-500/20"
                                        >
                                            START QUEST
                                        </button>
                                        {gameScore > 0 && (
                                            <p className="mt-4 text-[#C4D613] font-bold">Last Run: {gameScore} Bugs Squashed! (+{gameScore * 25} XP)</p>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="game"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full absolute inset-0"
                                    >
                                        {/* HUD */}
                                        <div className="absolute top-6 right-8 flex items-center gap-6">
                                            <div className="flex items-center gap-2">
                                                <Timer size={16} className="text-yellow-400" />
                                                <span className="text-white font-mono font-bold">{timeLeft}s</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Bug size={16} className="text-red-400" />
                                                <span className="text-white font-mono font-bold">{gameScore}</span>
                                            </div>
                                        </div>

                                        {/* The Bug */}
                                        <motion.button
                                            className="absolute p-3 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 cursor-pointer"
                                            style={{ top: bugPos.top, left: bugPos.left }}
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.8 }}
                                            onClick={squashBug}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                        >
                                            <Bug size={24} />
                                        </motion.button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Achievements Grid */}
                        <div className="bg-gray-950/50 border border-white/5 rounded-[32px] p-6 sm:p-8">
                            <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                                <Star size={20} className="text-yellow-400" />
                                Quest Achievements
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {achievements.map((ach) => {
                                    const isLocked = !unlockedAchievements.includes(ach.id);
                                    return (
                                        <div 
                                            key={ach.id}
                                            className={`p-4 rounded-2xl border transition-all duration-500 flex gap-4 items-center ${
                                                isLocked 
                                                ? 'bg-black/40 border-white/5 opacity-50 grayscale' 
                                                : 'bg-[#C4D613]/5 border-[#C4D613]/20 grayscale-0'
                                            }`}
                                        >
                                            <div className="text-3xl">{ach.icon}</div>
                                            <div>
                                                <h5 className={`font-bold text-sm ${isLocked ? 'text-gray-500' : 'text-[#C4D613]'}`}>
                                                    {isLocked ? 'Locked Achievement' : ach.title}
                                                </h5>
                                                <p className="text-xs text-gray-600 mt-0.5">
                                                    {isLocked ? `Earn ${ach.xpNeeded} XP to unlock` : ach.desc}
                                                </p>
                                            </div>
                                            {!isLocked && (
                                                <motion.div 
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="ml-auto"
                                                >
                                                    <TrendingUp size={16} className="text-[#C4D613]" />
                                                </motion.div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GamifiedSection;
