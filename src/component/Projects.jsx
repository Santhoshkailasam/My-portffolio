import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projectslist = [
  {
    id: 1,
    title: "Spotify clone",
    description:
      "A sleek Spotify clone built with React Native, featuring smooth navigation and an intuitive UI. Ideal for showcasing front-end mobile development skills.",
    image: "/spotify.jpg",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Spotifyclone",
  },
  {
    id: 2,
    title: "Parking App",
    description:
      "Parking App is a user-friendly React Native frontend with a home screen showing nearby spots and a booking system to reserve spaces.",
    image: "/Parking.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Parkingapp",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "A React Native + Node.js + MongoDB based project management app for creating projects, assigning tasks, tracking progress, and managing team workflows.",
    image: "/projectm.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/Project-management.git",
  },
  {
    id: 4,
    title: "90s Mobile App",
    description:
      "A mobile app inspired by a 90s Barbie phone where pressing buttons plays songs.Blending retro nostalgia with fun, interactive sound experiences.",
    image: "/barbietemp.png",
    btn: "View Project",
    link: "https://github.com/Santhoshkailasam/90sToyMobile.git",
  }
];

const Projects = () => {
  const [activeMobile, setActiveMobile] = useState(null);
  const containerRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

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
    <section id="projects" className="py-20 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.h2
            className="text-white text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured <span className="text-[#C4D613]">Projects</span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-[#0367FB] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A selection of my recent work, spanning mobile apps and full-stack solutions.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {Projectslist.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group bg-gray-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-[#C4D613]/30 transition-colors duration-500 shadow-2xl backdrop-blur-sm"
              onClick={() => {
                if (isMobile) {
                  setActiveMobile(activeMobile === project.id ? null : project.id);
                }
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                {/* Overlay Hint */}
                {!activeMobile && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/70 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {isMobile ? "Tap to explore" : "Hover to explore"}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 bg-gray-950/90 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-center items-start text-left z-10"
                initial={{ opacity: 0 }}
                animate={
                  isMobile
                    ? activeMobile === project.id ? { opacity: 1 } : { opacity: 0 }
                    : { opacity: 0 }
                }
                whileHover={!isMobile ? { opacity: 1 } : {}}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full">
                  <h3 className="text-[#C4D613] font-bold text-2xl mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-8 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#0367FB] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0367FB]/80 transition-all duration-300 shadow-lg shadow-blue-500/20"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                      title="View Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Static Content (Always visible/bottom) */}
              <div className="p-5 flex justify-between items-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C4D613]" />
                  <span className="w-2 h-2 rounded-full bg-[#0367FB]" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;