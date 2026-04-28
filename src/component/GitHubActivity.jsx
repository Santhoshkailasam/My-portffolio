import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { Github, Code, GitPullRequest, Star, Terminal, Zap, Users } from 'lucide-react';
import Skeleton from './Skeleton';

const GitHubActivity = () => {
    const [userData, setUserData] = useState({
        public_repos: 0,
        followers: 0,
        stars: 0,
        totalContributions: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);
                // Fetch basic user info
                const userRes = await fetch('https://api.github.com/users/Santhoshkailasam');
                const userJson = await userRes.json();
                
                // Fetch repos to calculate stars
                const reposRes = await fetch('https://api.github.com/users/Santhoshkailasam/repos?per_page=100');
                const reposJson = await reposRes.json();
                
                const totalStars = reposJson.reduce((acc, repo) => acc + repo.stargazers_count, 0);

                // Fetch total contribution count by summing all years
                let contributions = 0;
                try {
                    const url = `https://github-contributions-api.jogruber.de/v4/Santhoshkailasam`;
                    const contribRes = await fetch(url);
                    const contribJson = await contribRes.json();
                    
                    if (contribJson.total) {
                        // Sum up all years
                        contributions = Object.values(contribJson.total).reduce((acc, count) => acc + (count || 0), 0);
                    }
                } catch (e) {
                    console.error("Error fetching contributions:", e);
                    contributions = 0;
                }

                setUserData({
                    public_repos: userJson.public_repos || 0,
                    followers: userJson.followers || 0,
                    stars: totalStars || 0,
                    totalContributions: contributions
                });
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const stats = [
        { label: "Public Repos", value: userData.public_repos, icon: <Code size={18} />, color: "text-blue-400" },
        { label: `Total Commits`, value: userData.totalContributions, icon: <GitPullRequest size={18} />, color: "text-emerald-400" },
        { label: "Total Stars", value: userData.stars, icon: <Star size={18} />, color: "text-yellow-400" },
        { label: "Followers", value: userData.followers, icon: <Users size={18} />, color: "text-purple-400" },
    ];

    // Theme for the GitHub Calendar to match the portfolio
    const theme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section className="py-8 px-4 md:px-10 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0367FB]/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div>
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4D613]/10 border border-[#C4D613]/20 text-[#C4D613] text-xs font-bold uppercase tracking-wider mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Terminal size={14} />
                            Real-time Impact
                        </motion.div>
                        <motion.h2 
                            className="text-white text-4xl md:text-5xl font-black tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Live GitHub <span className="text-[#C4D613]">Activity</span>
                        </motion.h2>
                        <p className="text-gray-400 mt-4 text-sm font-medium">
                            Directly synchronized with <a href="https://github.com/Santhoshkailasam" target="_blank" rel="noopener noreferrer" className="text-[#0367FB] hover:underline">@Santhoshkailasam</a>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i}
                                className="bg-gray-900/50 border border-white/5 p-4 rounded-2xl min-w-[120px]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                                <div className="h-8 flex items-center">
                                    {loading ? (
                                        <Skeleton className="w-16 h-6" />
                                    ) : (
                                        <p className="text-white text-xl font-black">{stat.value}</p>
                                    )}
                                </div>
                                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The GitHub Calendar & Year Switcher */}
                <motion.div 
                    className="bg-gray-950/80 border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Contribution Legend */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Contribution Activity</div>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#C4D613]/50 to-transparent" />
                    </div>

                    <div className="w-full overflow-x-auto custom-scrollbar flex justify-center py-4 min-h-[160px]">
                        {loading ? (
                            <div className="flex gap-1">
                                {[...Array(30)].map((_, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        {[...Array(7)].map((_, j) => (
                                            <Skeleton key={j} className="w-3 h-3 rounded-sm" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <GitHubCalendar 
                                username="Santhoshkailasam" 
                                theme={theme}
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                colorScheme="dark"
                            />
                        )}
                    </div>
                    <div className="mt-6 flex items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-[#161b22]" />
                            <span>No Contributions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-[#39d353]" />
                            <span>High Activity</span>
                        </div>
                    </div>
                </motion.div>

                {/* Fun Interaction Tip */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="flex items-center gap-4 py-4 px-6 bg-white/5 border border-white/5 rounded-2xl">
                        <Zap size={16} className="text-[#C4D613] animate-pulse" />
                        <p className="text-gray-400 text-xs font-medium">
                            Showing my <span className="text-white font-bold">all-time contribution history</span> compiled from the GitHub API.
                        </p>
                    </div>
                    
                    <motion.a
                        href="https://github.com/Santhoshkailasam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-3 px-8 py-4 bg-[#C4D613] text-black font-black rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(196,214,19,0.3)] hover:shadow-[0_0_50px_rgba(196,214,19,0.5)] transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        <Github size={20} />
                        <span className="uppercase tracking-tighter">Navigate to GitHub</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
