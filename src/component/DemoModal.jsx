import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music, Play, Pause, SkipForward, SkipBack, Heart, Car, CheckCircle, Circle, Plus, Phone, Volume2, Shuffle, Repeat, Sparkles } from "lucide-react";

/* ── Phone Frame Wrapper ── */
const PhoneFrame = ({ children, bg = "bg-gray-900" }) => (
  <div className="flex justify-center">
    <div className="relative w-[260px] sm:w-[280px]">
      {/* Phone shell */}
      <div className="relative rounded-[40px] border-[6px] border-gray-700 shadow-2xl overflow-hidden" style={{ background: "#111" }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10 flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
          <div className="w-6 h-1.5 rounded-full bg-gray-700" />
        </div>
        <div className={`${bg} min-h-[480px] pt-7 overflow-y-auto`}>{children}</div>
        {/* Home bar */}
        <div className="h-6 bg-gray-900 flex items-center justify-center">
          <div className="w-20 h-1 rounded-full bg-gray-600" />
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-2 top-24 w-1 h-8 bg-gray-600 rounded-l-sm" />
      <div className="absolute -left-2 top-36 w-1 h-12 bg-gray-600 rounded-l-sm" />
      <div className="absolute -right-2 top-28 w-1 h-14 bg-gray-600 rounded-r-sm" />
    </div>
  </div>
);

/* ── Spotify Demo ── */
const SpotifyDemo = () => {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(35);
  const [current, setCurrent] = useState(0);
  const tracks = [
    { title: "Blinding Lights", artist: "The Weeknd", color: "#1DB954" },
    { title: "Levitating", artist: "Dua Lipa", color: "#e040fb" },
    { title: "Stay", artist: "Kid LAROI", color: "#ff6b35" },
  ];

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProgress(p => p >= 100 ? 0 : p + 0.5), 200);
    return () => clearInterval(id);
  }, [playing]);

  const t = tracks[current];
  return (
    <PhoneFrame bg="bg-black">
      <div className="px-4 pb-4">
        {/* Status bar */}
        <div className="flex justify-between text-[9px] text-gray-500 mb-3 px-1">
          <span>9:41</span><span>●●● WiFi 🔋</span>
        </div>
        {/* Album art */}
        <div className="w-full aspect-square rounded-2xl mb-4 flex items-center justify-center shadow-xl"
          style={{ background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`, border: `1px solid ${t.color}30` }}>
          <Music size={56} style={{ color: t.color }} />
        </div>
        {/* Track info */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-white font-bold text-base">{t.title}</p>
            <p className="text-gray-400 text-xs">{t.artist}</p>
          </div>
          <button onClick={() => setLiked(!liked)}>
            <Heart size={20} className={liked ? "fill-[#1DB954] text-[#1DB954]" : "text-gray-500"} />
          </button>
        </div>
        {/* Progress */}
        <div className="mb-3">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-[#1DB954] rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between text-[9px] text-gray-500 mt-1">
            <span>1:{String(Math.floor(progress * 0.6)).padStart(2,"0")}</span>
            <span>3:20</span>
          </div>
        </div>
        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <Shuffle size={16} className="text-gray-500" />
          <button onClick={() => setCurrent(c => (c-1+tracks.length)%tracks.length)}>
            <SkipBack size={22} className="text-white" />
          </button>
          <button onClick={() => setPlaying(!playing)}
            className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center">
            {playing ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black ml-0.5" />}
          </button>
          <button onClick={() => setCurrent(c => (c+1)%tracks.length)}>
            <SkipForward size={22} className="text-white" />
          </button>
          <Repeat size={16} className="text-gray-500" />
        </div>
        {/* Queue */}
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Up Next</p>
        {tracks.map((tr, i) => (
          <button key={i} onClick={() => { setCurrent(i); setPlaying(true); }}
            className={`w-full flex items-center gap-2 py-2 px-2 rounded-xl mb-1 transition-colors ${i===current?"bg-white/10":"hover:bg-white/5"}`}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${tr.color}30` }}>
              <Music size={12} style={{ color: tr.color }} />
            </div>
            <div className="text-left flex-1">
              <p className={`text-[11px] font-semibold ${i===current?"text-[#1DB954]":"text-white"}`}>{tr.title}</p>
              <p className="text-[9px] text-gray-500">{tr.artist}</p>
            </div>
            {i===current && playing && <div className="flex gap-0.5 items-end h-4">
              {[1,2,3].map(b=><div key={b} className="w-0.5 bg-[#1DB954] rounded-full animate-pulse" style={{height:`${8+b*4}px`,animationDelay:`${b*0.15}s`}}/>)}
            </div>}
          </button>
        ))}
      </div>
    </PhoneFrame>
  );
};

/* ── Parking Demo ── */
const ParkingDemo = () => {
  const [slots, setSlots] = useState([
    {id:"A1",free:true},{id:"A2",free:false},{id:"A3",free:true},
    {id:"B1",free:false},{id:"B2",free:true},{id:"B3",free:true},
    {id:"C1",free:true},{id:"C2",free:false},{id:"C3",free:true},
  ]);
  const [selected, setSelected] = useState(null);
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const book = () => {
    setLoading(true);
    setTimeout(() => {
      setSlots(s => s.map(sl => sl.id===selected ? {...sl, free:false} : sl));
      setBooked(true); setLoading(false);
    }, 1000);
  };

  return (
    <PhoneFrame bg="bg-[#0f172a]">
      <div className="px-4 pb-4">
        <div className="flex justify-between text-[9px] text-gray-500 mb-2 px-1">
          <span>9:41</span><span>●●● 🔋</span>
        </div>
        <p className="text-white font-black text-sm mb-0.5">Smart Parking</p>
        <p className="text-gray-400 text-[10px] mb-3">Downtown Mall • Level 2</p>
        {/* Legend */}
        <div className="flex gap-3 text-[9px] mb-3">
          {[["#22c55e","Available"],["#ef4444","Occupied"],["#facc15","Selected"]].map(([c,l])=>(
            <span key={l} className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{background:c}}/>{l}</span>
          ))}
        </div>
        {/* Road divider */}
        <div className="flex items-center gap-1 mb-2">
          <div className="h-px flex-1 border-t border-dashed border-yellow-500/40"/>
          <span className="text-[8px] text-yellow-500/60 uppercase">ROAD</span>
          <div className="h-px flex-1 border-t border-dashed border-yellow-500/40"/>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {slots.map(s => (
            <button key={s.id} disabled={!s.free || booked}
              onClick={() => { setSelected(s.id); setBooked(false); }}
              className="py-3 rounded-xl text-xs font-bold transition-all duration-200 border"
              style={{
                background: !s.free ? "#ef444415" : selected===s.id ? "#facc1520" : "#22c55e15",
                borderColor: !s.free ? "#ef444430" : selected===s.id ? "#facc1550" : "#22c55e30",
                color: !s.free ? "#ef4444" : selected===s.id ? "#facc15" : "#22c55e",
                transform: selected===s.id ? "scale(1.05)" : "scale(1)"
              }}>
              <Car size={14} className="mx-auto mb-1"/>
              {s.id}
            </button>
          ))}
        </div>
        {booked ? (
          <div className="bg-green-500/15 border border-green-500/30 rounded-2xl p-3 text-center">
            <CheckCircle size={20} className="text-green-400 mx-auto mb-1"/>
            <p className="text-green-300 font-bold text-xs">Slot {selected} Booked!</p>
            <p className="text-gray-500 text-[9px] mt-0.5">Confirmation #PK{Math.floor(Math.random()*9000+1000)}</p>
          </div>
        ) : (
          <button onClick={book} disabled={!selected||loading}
            className="w-full py-2.5 rounded-2xl text-xs font-black transition-all disabled:opacity-40"
            style={{background: selected?"#0367FB":"#1e293b", color:"white"}}>
            {loading ? "Booking…" : selected ? `Book Slot ${selected}  →` : "Select a Slot"}
          </button>
        )}
      </div>
    </PhoneFrame>
  );
};

/* ── Project Management Demo ── */
const ProjectMgmtDemo = () => {
  const [tasks, setTasks] = useState([
    {id:1,text:"Design landing page",done:true,tag:"Design"},
    {id:2,text:"Set up REST API",done:false,tag:"Backend"},
    {id:3,text:"Write unit tests",done:false,tag:"QA"},
    {id:4,text:"Deploy to production",done:false,tag:"DevOps"},
  ]);
  const [input, setInput] = useState("");
  const done = tasks.filter(t=>t.done).length;
  const pct = Math.round((done/tasks.length)*100);

  return (
    <PhoneFrame bg="bg-[#0f172a]">
      <div className="px-4 pb-4">
        <div className="flex justify-between text-[9px] text-gray-500 mb-2 px-1">
          <span>9:41</span><span>●●● 🔋</span>
        </div>
        <p className="text-white font-black text-sm">My Projects</p>
        <p className="text-gray-400 text-[10px] mb-3">Sprint 3 · Week 2</p>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[["Total",tasks.length,"#0367FB"],["Done",done,"#C4D613"],["Left",tasks.length-done,"#f97316"]].map(([l,v,c])=>(
            <div key={l} className="rounded-xl p-2 text-center border border-white/5" style={{background:`${c}10`}}>
              <p className="font-black text-lg" style={{color:c}}>{v}</p>
              <p className="text-[9px] text-gray-400">{l}</p>
            </div>
          ))}
        </div>
        {/* Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-[9px] text-gray-400 mb-1">
            <span>Progress</span><span>{pct}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#C4D613] rounded-full transition-all duration-500" style={{width:`${pct}%`}}/>
          </div>
        </div>
        {/* Tasks */}
        <div className="space-y-2 mb-3 max-h-48 overflow-y-auto">
          {tasks.map(task => (
            <button key={task.id} onClick={() => setTasks(t=>t.map(tk=>tk.id===task.id?{...tk,done:!tk.done}:tk))}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-left">
              {task.done
                ? <CheckCircle size={16} className="text-[#C4D613] shrink-0"/>
                : <Circle size={16} className="text-gray-500 shrink-0"/>}
              <span className={`text-[11px] flex-1 ${task.done?"line-through text-gray-500":"text-white"}`}>{task.text}</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400">{task.tag}</span>
            </button>
          ))}
        </div>
        {/* Add task */}
        <div className="flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)}
            onKeyDown={e=>{ if(e.key==="Enter"&&input.trim()){ setTasks(t=>[...t,{id:Date.now(),text:input.trim(),done:false,tag:"New"}]); setInput(""); }}}
            placeholder="Add task…"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-[11px] text-white placeholder-gray-500 outline-none focus:border-[#0367FB]/50"/>
          <button onClick={()=>{ if(!input.trim()) return; setTasks(t=>[...t,{id:Date.now(),text:input.trim(),done:false,tag:"New"}]); setInput(""); }}
            className="p-2 rounded-xl bg-[#0367FB] text-white hover:bg-[#0367FB]/80 transition-colors">
            <Plus size={16}/>
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

/* ── 90s Phone Demo ── */
const RetroPhoneDemo = () => {
  const [active, setActive] = useState(null);
  const songs = [
    {id:1,key:"1",title:"Barbie Girl",artist:"Aqua",lyric:"♪ Hi Barbie! Hi Ken!",color:"#ff69b4"},
    {id:2,key:"2",title:"Spice Up Your Life",artist:"Spice Girls",lyric:"♫ Slam it to the left!",color:"#ff6b35"},
    {id:3,key:"3",title:"Mambo No. 5",artist:"Lou Bega",lyric:"♩ A little bit of Monica…",color:"#facc15"},
    {id:4,key:"4",title:"Genie in a Bottle",artist:"Christina",lyric:"♬ I'm a genie in a bottle",color:"#a78bfa"},
    {id:5,key:"5",title:"Baby One More Time",artist:"Britney Spears",lyric:"♪ Oh baby baby…",color:"#f472b6"},
    {id:6,key:"6",title:"Livin' La Vida Loca",artist:"Ricky Martin",lyric:"♫ She's into superstitions…",color:"#34d399"},
    {id:7,key:"7",title:"Quit Playing Games",artist:"Backstreet Boys",lyric:"♩ Quit playing games…",color:"#60a5fa"},
    {id:8,key:"8",title:"Wannabe",artist:"Spice Girls",lyric:"♬ Tell me what you want!",color:"#fb923c"},
    {id:9,key:"9",title:"...Baby One More Time",artist:"Britney",lyric:"♪ My loneliness is killing me…",color:"#e879f9"},
    {id:0,key:"0",title:"Macarena",artist:"Los Del Rio",lyric:"♫ Hey Macarena! Ayyy!",color:"#4ade80"},
  ];
  const s = songs.find(s=>s.id===active);

  return (
    <PhoneFrame bg="bg-[#1a0a2e]">
      <div className="px-4 pb-4">
        <div className="flex justify-between text-[9px] text-gray-500 mb-1 px-1">
          <span>9:41</span><span>🔋</span>
        </div>
        {/* LCD screen */}
        <div className="bg-[#c8e6c9] rounded-xl p-3 mb-3 min-h-[70px] border-2 border-[#2d5a27] shadow-inner">
          {s ? (
            <div>
              <p className="text-[#1b5e20] font-black text-[11px] font-mono">{s.title}</p>
              <p className="text-[#2e7d32] text-[9px] font-mono">{s.artist}</p>
              <p className="text-[#1b5e20] text-[10px] mt-1 font-mono animate-pulse">{s.lyric}</p>
            </div>
          ) : (
            <p className="text-[#2e7d32] text-[9px] font-mono text-center mt-4">PRESS A KEY TO PLAY ▶</p>
          )}
        </div>
        {/* Keypad */}
        <div className="grid grid-cols-3 gap-1.5">
          {[1,2,3,4,5,6,7,8,9,'*',0,'#'].map((k,i) => {
            const song = songs.find(s=>s.id===k);
            return (
              <button key={i} onClick={() => song && setActive(active===k?null:k)}
                className="py-2.5 rounded-xl text-sm font-black transition-all duration-150 border"
                style={{
                  background: active===k && song ? `${song.color}20` : "#ffffff10",
                  borderColor: active===k && song ? `${song.color}50` : "#ffffff15",
                  color: active===k && song ? song.color : song ? "#ffffff" : "#4b5563",
                  transform: active===k ? "scale(0.93)" : "scale(1)"
                }}>
                {k}
              </button>
            );
          })}
        </div>
        <p className="text-gray-600 text-[8px] text-center mt-2">Press 1–9 or 0 to play songs</p>
      </div>
    </PhoneFrame>
  );
};

/* ── Farmer App Demo ── */
const FarmerAppDemo = () => {
  const [crops] = useState([
    { id: 1, name: "Rice", health: "Good", growth: 75, price: "₹2,450/q" },
    { id: 2, name: "Corn", health: "Fair", growth: 40, price: "₹1,800/q" },
    { id: 3, name: "Wheat", health: "Good", growth: 90, price: "₹2,100/q" },
  ]);

  return (
    <PhoneFrame bg="bg-emerald-950">
      <div className="px-4 pb-4 text-white">
        <div className="flex justify-between text-[9px] text-gray-500 mb-2 px-1">
          <span>9:41</span><span>●●● 🔋</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
           <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
           </div>
           <div>
              <p className="text-xs font-bold leading-none">Farmer Connect</p>
              <p className="text-[10px] text-emerald-400">Welcome back!</p>
           </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-3 mb-4">
           <p className="text-[10px] uppercase font-bold text-emerald-400 mb-2">My Crops</p>
           <div className="space-y-3">
              {crops.map(crop => (
                <div key={crop.id} className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span>{crop.name}</span>
                    <span className={crop.health === 'Good' ? 'text-emerald-400' : 'text-yellow-400'}>{crop.health}</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${crop.growth}%` }} />
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
           <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
              <p className="text-[9px] text-gray-400">Market Price</p>
              <p className="text-xs font-bold mt-1 text-emerald-300">₹2,450/q</p>
           </div>
           <div className="bg-white/5 rounded-2xl p-3 border border-white/10 text-center">
              <p className="text-[9px] text-gray-400">Weather</p>
              <p className="text-xs font-bold mt-1 text-blue-300">28°C Clear</p>
           </div>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-emerald-600 text-[11px] font-black shadow-lg shadow-emerald-900/40">
           Explore Schemes →
        </button>
      </div>
    </PhoneFrame>
  );
};


/* ── Content map ── */
const getDemoContent = (project) => {
  const t = project.title.toLowerCase();
  if (t.includes("spotify")) return { label: "Music Player", component: <SpotifyDemo /> };
  if (t.includes("parking")) return { label: "Parking App", component: <ParkingDemo /> };
  if (t.includes("project")) return { label: "Task Board", component: <ProjectMgmtDemo /> };
  if (t.includes("90s")) return { label: "Retro Phone", component: <RetroPhoneDemo /> };
  if (t.includes("farmer app")) return { label: "Agri Tech", component: <FarmerAppDemo /> };
  if (t.includes("farmer scheme")) return { 
    label: "Website", 
    component: (
      <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-white/10 bg-white">
        <iframe 
          src="https://farmerschemes.netlify.app/" 
          className="w-full h-full border-none"
          title="Farmer Scheme Demo"
          loading="lazy"
        />
      </div>
    ) 
  };
  return { label: "Demo", component: <p className="text-gray-400 p-4">Demo coming soon.</p> };
};

/* ── Modal ── */
const DemoModal = ({ project, onClose }) => {
  const { label, component } = getDemoContent(project);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  const modalContent = (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <motion.div
        className={`relative w-full ${project.type === 'website' ? 'max-w-5xl' : 'max-w-sm'} bg-gray-950 border border-white/10 rounded-[32px] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] z-10 overflow-hidden flex flex-col`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C4D613]/50 to-transparent" />
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-gray-900/20">
          <div>
            <p className="text-[#C4D613] text-[10px] font-black uppercase tracking-[0.2em] mb-0.5">Interactive Demo</p>
            <h3 className="text-white font-black text-lg leading-tight">{project.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[10px] text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-bold uppercase tracking-wider">{label}</span>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[80vh] custom-scrollbar">
          {component}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5 bg-gray-900/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-gray-500 text-[10px] font-medium tracking-wide uppercase">Real-time simulation</p>
          </div>
          <div className="flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
};

export default DemoModal;
