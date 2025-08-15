import React from "react";
import { motion } from "framer-motion";

const Projectslist = [
  {
    id: 1,
    title: "Spotify clone",
    description:
      "A sleek Spotify clone built with React Native, featuring smooth navigation and an intuitive UI. Ideal for showcasing front-end mobile development skills.",
    image: "/spotify.jpg",
    btn: "View Project",
  },
  {
    id: 2,
    title: "Parking App",
    description:
      "Parking App is a user-friendly React Native frontend with a home screen showing nearby spots and a booking system to reserve spaces.",
    image: "/parking.png",
    btn: "View Project",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h1 className="text-[#ffffff] text-center text-2xl font-bold mb-10">
        Projects
      </h1>

      <div className="flex flex-row items-center justify-center gap-10 flex-wrap">
        {Projectslist.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-[400px] h-[266px] cursor-pointer overflow-hidden rounded-lg"
            whileHover={{ rotateY: 10 }} // slight tilt
            transition={{ duration: 0.5 }}
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Overlay with details */}
            <motion.div
              className="absolute inset-0 bg-gray-900 bg-opacity-90 text-white p-4 flex flex-col justify-center opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[#C4D613] font-semibold text-lg mb-2">
                {project.title}
              </h2>
              <p className="mb-4">{project.description}</p>
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center hover:bg-blue-600 transition duration-300"
              >
                {project.btn}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
