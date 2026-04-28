import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, MonitorPlay } from "lucide-react";
import DemoModal from "./DemoModal";
import Skeleton from "./Skeleton";

const Projectslist = [
  {
    id: 1,
    title: "Web Analyzer Speed Genius",
    description:
      "A high-performance web performance analyzer that provides real-time auditing, historical trends, and AI-driven optimization suggestions to boost site speed and SEO metrics.",
    image: "/speed_genius.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/web-performance",
    type: "website",
  },
  {
    id: 2,
    title: "Spotify clone",
    description:
      "A sleek Spotify clone built with React Native, featuring smooth navigation and an intuitive UI. Ideal for showcasing front-end mobile development skills.",
    image: "/spotify_new.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Spotifyclone",
  },
  {
    id: 3,
    title: "Parking App",
    description:
      "Parking App is a user-friendly React Native frontend with a home screen showing nearby spots and a booking system to reserve spaces.",
    image: "/parking_new.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Parkingapp",
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "A React Native + Node.js + MongoDB based project management app for creating projects, assigning tasks, tracking progress, and managing team workflows.",
    image: "/project_mgmt_new.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Project-management.git",
  },
  {
    id: 5,
    title: "90s Mobile App",
    description:
      "A mobile app inspired by a 90s Barbie phone where pressing buttons plays songs.Blending retro nostalgia with fun, interactive sound experiences.",
    image: "/retro_music.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/90sToyMobile.git",
  },
  {
    id: 6,
    title: "Farmer Scheme",
    description:
      "A comprehensive web platform dedicated to helping farmers discover and apply for government schemes and subsidies. Features real-time updates and simplified application processes.",
    image: "/farmer_scheme.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Farmer-schemes-web.git",
    type: "website",
  },
  {
    id: 7,
    title: "Farmer App",
    description:
      "A React Native mobile application for farmers to manage their crops, check weather forecasts, and connect with local markets directly from their smartphones.",
    image: "/farmer_app.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Final-year-project.git",
  },
  {
    id: 8,
    title: "TodoTask",
    description:
      "A high-performance task management web application built with React and Node.js. It features a modern UI with real-time updates, task categorization, and priority tracking.",
    image: "/todotask_preview.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/sktech-Todo.git",
    type: "website",
  },
  {
    id: 9,
    title: "Offline Chatbot",
    description:
      "A privacy-first mobile chatbot that operates entirely offline. It uses a quantized local large language model to provide intelligent assistance without needing an internet connection.",
    image: "/offline_chatbot.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/offlinechatbot.git",
  },
];

const Projects = () => {
  const [activeMobile, setActiveMobile] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [activeDemoProject, setActiveDemoProject] = useState(null);
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = (e, project) => {
    e.stopPropagation();
    setActiveDemoProject(project);
    setDemoOpen(true);
  };
  const closeDemo = () => {
    setDemoOpen(false);
    setTimeout(() => setActiveDemoProject(null), 300);
  };
  const containerRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveMobile(null);
      }
    };

    if (isMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="projects" className="pt-4 pb-8 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 relative">
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Featured <span className="text-[#C4D613]">Projects</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 mt-2 sm:mt-6 max-w-2xl mx-auto text-lg">
            A selection of my recent work, spanning mobile apps and full-stack solutions.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {Projectslist.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-gray-950 rounded-3xl overflow-hidden border border-white/10 hover:border-[#C4D613]/40 transition-colors duration-300 shadow-2xl"
              onClick={() => {
                if (isMobile) {
                  setActiveMobile(activeMobile === project.id ? null : project.id);
                }
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Skeleton Loader Overlay */}
                {!loadedImages[project.id] && (
                  <Skeleton className="absolute inset-0 z-10" />
                )}
                
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover ${
                    loadedImages[project.id] ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  } group-hover:scale-110`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(project.id)}
                />
                
                {/* Integrated Floating Header (Glassmorphism) */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C4D613] animate-pulse" />
                    <h3 className="text-white font-bold text-sm tracking-wide uppercase">{project.title}</h3>
                  </div>
                  <div className="flex gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-[#0367FB]/80 shadow-[0_0_8px_#0367FB]" />
                    <div className="w-2 h-2 rounded-full bg-[#C4D613]/80 shadow-[0_0_8px_#C4D613]" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                
                {/* Overlay Hint (Bottom) */}
                {!activeMobile && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                       Click to explore
                    </span>
                  </div>
                )}
              </div>

              {/* Content Overlay - Revealed on Hover */}
              <motion.div
                className="absolute inset-0 bg-gray-950/96 p-3 sm:p-10 flex flex-col justify-center sm:justify-end items-start text-left z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isMobile
                    ? activeMobile === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    : { opacity: 0, y: 20 }
                }
                whileHover={!isMobile ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="w-full">
                  <div className="mb-1 sm:mb-4">
                    <span className="text-[#C4D613] text-[10px] font-black uppercase tracking-[0.2em]">Featured Project</span>
                    <h3 className="text-white font-black text-lg sm:text-3xl mt-0 sm:mt-1 tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-2 sm:mb-8 text-[10px] sm:text-sm md:text-base leading-relaxed font-medium line-clamp-2 sm:line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#0367FB] text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-bold hover:bg-[#0367FB]/80 transition-all duration-300 shadow-xl shadow-blue-500/20"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                    <button
                      onClick={(e) => openDemo(e, project)}
                      className="flex items-center gap-2 bg-[#C4D613] text-black px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl text-[10px] sm:text-sm font-black hover:bg-[#C4D613]/80 transition-all duration-300 shadow-xl shadow-yellow-400/20 cursor-pointer"
                    >
                      <MonitorPlay size={16} />
                      Try Demo
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {demoOpen && activeDemoProject && (
          <DemoModal project={activeDemoProject} onClose={closeDemo} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;