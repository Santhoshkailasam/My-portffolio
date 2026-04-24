import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Activity, Cpu, Database, Layout, Palette, 
    Zap, Terminal, Shield, Globe, MousePointer2,
    Settings, Eye, EyeOff, Monitor, HardDrive,
    GitBranch, Hash, Clock, Component, RefreshCw,
    Scan, Wifi, Server, Search, X
} from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

const DevHUD = () => {
    const { 
        isDevMode, toggleDevMode, stats, 
        theme, setTheme, wireframe, setWireframe,
        glitch, setGlitch, xray, setXray 
    } = useDevMode();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [uptime, setUptime] = useState(0);
    const [isResyncing, setIsResyncing] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMouseMove);
        
        const uptimeInterval = setInterval(() => setUptime(prev => prev + 1), 1000);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(uptimeInterval);
        };
    }, []);

    const handleResync = () => {
        setIsResyncing(true);
        setTimeout(() => setIsResyncing(false), 2000);
    };

    const formatUptime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    if (!isDevMode) return null;

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none font-mono overflow-hidden">

            {/* Top Bar - System Stats */}
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="absolute top-0 left-0 w-full p-4 bg-gray-950/80 backdrop-blur-md border-b border-[#C4D613]/30 flex flex-wrap justify-center gap-4 sm:gap-6 pointer-events-auto shadow-[0_0_20px_rgba(196,214,19,0.1)]"
            >
                <StatItem icon={<Activity size={14} />} label="FPS" value={stats.fps} color="text-green-400" />
                <StatItem icon={<Cpu size={14} />} label="MEM" value={`${stats.memory}MB`} color="text-blue-400" />
                <StatItem icon={<Monitor size={14} />} label="RES" value={`${window.innerWidth}x${window.innerHeight}`} color="text-purple-400" />
                <StatItem icon={<Clock size={14} />} label="UPTIME" value={formatUptime(uptime)} color="text-yellow-400" />
                <StatItem icon={<Component size={14} />} label="NODES" value={stats.nodes} color="text-emerald-400" />
                <StatItem icon={<Wifi size={14} />} label="LATENCY" value={stats.latency} color="text-orange-400" />
                <StatItem icon={<Hash size={14} />} label="COMMIT" value="bb58d0f" color="text-gray-400" />
            </motion.div>

            <motion.div 
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                data-lenis-prevent
                className="absolute right-4 md:right-6 top-24 bottom-6 w-[calc(100%-2rem)] md:w-80 bg-gray-950/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 pointer-events-auto shadow-2xl overflow-hidden"
            >
                <div className="h-full overflow-y-auto custom-scrollbar pr-2">
                    <div className="flex flex-col gap-8 pb-10">
                        <div className="flex items-center justify-between border-b border-white/5 pb-4">
                            <div className="flex items-center gap-2">
                                <Shield className="text-[#C4D613]" size={20} />
                                <h3 className="text-white font-black uppercase tracking-tighter text-lg">God Mode Panel</h3>
                            </div>
                            <button 
                                onClick={() => toggleDevMode()}
                                className="p-2 rounded-xl bg-white/5 text-gray-400 hover:bg-red-500 hover:text-white transition-all shadow-lg border border-white/10"
                                title="Deactivate Dev Mode"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Aesthetic Controls */}
                        <ControlSection title="Visual Matrix">
                            <ToggleButton 
                                active={wireframe} 
                                onClick={() => setWireframe(!wireframe)} 
                                icon={wireframe ? <Eye size={16} /> : <EyeOff size={16} />}
                                label="Wireframe Mode" 
                            />
                            <ToggleButton 
                                active={glitch} 
                                onClick={() => setGlitch(!glitch)} 
                                icon={<Zap size={16} />}
                                label="Glitch Protocol" 
                            />
                        </ControlSection>

                        {/* Theme Selector */}
                        <ControlSection title="Color Injection">
                            <div className="grid grid-cols-3 gap-2">
                                <ThemeButton active={theme === 'default'} onClick={() => setTheme('default')} color="bg-[#0367FB]" label="Cyber" />
                                <ThemeButton active={theme === 'matrix'} onClick={() => setTheme('matrix')} color="bg-green-500" label="Neo" />
                                <ThemeButton active={theme === 'synthwave'} onClick={() => setTheme('synthwave')} color="bg-pink-500" label="Synth" />
                            </div>
                        </ControlSection>

                        {/* System Architecture */}
                        <ControlSection title="System Architecture">
                            <div className="space-y-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                <div className="flex justify-between">
                                    <span>OS:</span>
                                    <span className="text-white">Win-NT 10.0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>CPU:</span>
                                    <span className="text-white">Ryzen 9 5950X</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>GPU:</span>
                                    <span className="text-[#C4D613]">RTX 3080 Ti</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Engine:</span>
                                    <span className="text-white">V8 / Chromium</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Render:</span>
                                    <span className="text-[#C4D613] font-black">{stats.renderTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Latency:</span>
                                    <span className="text-orange-400">{stats.latency}</span>
                                </div>
                            </div>
                        </ControlSection>

                        {/* Additional Features */}
                        <ControlSection title="Diagnostic Tools">
                            <ToggleButton 
                                active={xray} 
                                onClick={() => setXray(!xray)} 
                                icon={<Search size={16} />}
                                label="DOM X-Ray" 
                            />
                            <ToggleButton 
                                active={isResyncing} 
                                onClick={handleResync} 
                                icon={<RefreshCw size={16} className={isResyncing ? "animate-spin" : ""} />}
                                label={isResyncing ? "Resyncing..." : "Sync Protocol"} 
                            />
                        </ControlSection>

                        {/* Mock Logs */}
                        <ControlSection title="Active Protocols">
                            <div className="bg-black/50 rounded-xl p-3 h-32 overflow-hidden flex flex-col-reverse text-[9px]">
                                {isResyncing && <LogItem text="> Re-syncing global protocols..." color="text-white animate-pulse" />}
                                <LogItem text="> Connection established to node_342" color="text-green-500" />
                                <LogItem text="> Injecting CSS-Matrix variables..." color="text-blue-500" />
                                <LogItem text="> Warning: High memory pressure" color="text-yellow-500" />
                                <LogItem text="> Handshake complete: 200 OK" color="text-gray-500" />
                                <LogItem text="> Initializing God Mode HUD..." color="text-[#C4D613]" />
                            </div>
                        </ControlSection>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Left - Mouse Tracking HUD */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-10 left-10 p-6 rounded-full border-2 border-[#C4D613]/20 bg-gray-950/20 backdrop-blur-[2px] hidden md:flex items-center justify-center group"
            >
                <div className="absolute inset-0 rounded-full border border-[#C4D613]/40 animate-ping opacity-20" />
                <MousePointer2 size={24} className="text-[#C4D613]" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-[#C4D613] font-black uppercase">
                    X: {mousePos.x} Y: {mousePos.y}
                </div>
            </motion.div>

            {/* Scanning Line Effect */}
            <motion.div 
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4D613]/20 to-transparent shadow-[0_0_15px_rgba(196,214,19,0.3)] pointer-events-none z-[50]"
            />
        </div>
    );
};

const StatItem = ({ icon, label, value, color }) => (
    <div className="flex items-center gap-2 group cursor-crosshair">
        <div className={`${color} group-hover:scale-125 transition-transform`}>{icon}</div>
        <div className="flex flex-col">
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none">{label}</span>
            <span className="text-white text-xs font-black tracking-tighter leading-none mt-1">{value}</span>
        </div>
    </div>
);

const ControlSection = ({ title, children }) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] border-l-2 border-[#C4D613] pl-2">{title}</h4>
        <div className="flex flex-col gap-2">{children}</div>
    </div>
);

const ToggleButton = ({ active, onClick, icon, label }) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-3 w-full p-3 rounded-xl border transition-all ${
            active 
            ? "bg-[#C4D613] border-[#C4D613] text-black shadow-[0_0_15px_rgba(196,214,19,0.3)]" 
            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
        }`}
    >
        {icon}
        <span className="text-xs font-bold uppercase tracking-tighter">{label}</span>
    </button>
);

const ThemeButton = ({ active, onClick, color, label }) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center gap-2 p-2 rounded-xl border transition-all ${
            active ? "border-[#C4D613] scale-105 bg-white/5" : "border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
        }`}
    >
        <div className={`w-8 h-8 rounded-lg ${color} shadow-lg`} />
        <span className="text-[9px] font-black uppercase text-white">{label}</span>
    </button>
);

const LogItem = ({ text, color }) => (
    <div className={`font-mono ${color} mb-1 truncate`}>{text}</div>
);

export default DevHUD;
