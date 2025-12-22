import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
];

const Projects = () => {
  const [activeMobile, setActiveMobile] = useState(null);
  const containerRef = useRef(null);
  const isMobile = window.innerWidth < 768;

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

  return (
    <div id="projects" className="py-10">
      <motion.h1
        className="text-[#ffffff] text-center text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Projects
      </motion.h1>

      <div
        ref={containerRef}
        className="flex flex-row items-center justify-center gap-6 sm:gap-10 flex-wrap"
      >
        {Projectslist.map((project, index) => (
          <div
            key={project.id}
            className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[266px] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              if (isMobile) {
                setActiveMobile(
                  activeMobile === project.id ? null : project.id
                );
              }
            }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white p-4 flex flex-col justify-center rounded-lg"
              initial={{ opacity: 0 }}
              animate={
                isMobile
                  ? activeMobile === project.id
                    ? { opacity: 1 }
                    : { opacity: 0 }
                  : { opacity: 0 }
              }
              whileHover={!isMobile ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#C4D613] font-semibold text-lg mb-2">
                {project.title}
              </h2>
              <p className="mb-4 text-sm sm:text-base">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center hover:bg-blue-600 transition duration-300"
              >
                {project.btn}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
