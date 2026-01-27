import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiencedata = [
    {
      company: "Interain AI",
      role: "Data Analyst Intern",
      duration: "Sep 2024 - Nov 2024",
      title: "what I'm doing",
      description:
        "Interain AI is empowering students, colleges, and companies with AI-driven, recruitment automation solutions.",
      cn1: "Extracted and cleaned verbal ability and science data from multiple sources.",
      cn2: "Converted data into structured formats like JSON.",
      cn3: "Organized datasets for seamless use in AI training.",
      certificate:
        "https://drive.google.com/file/d/1-meFa_PpGze530BnijwN-OxX3cZNNVoW/view?usp=sharing",
    },
    {
      company: "EA one solution",
      role: "UI/UX Intern",
      duration: "July 2025",
      title: "what I'm doing",
      description:
        "EA one solution is a leading provider of innovative software solutions.",
      cn1: "Gained hands-on experience in web design by creating user-friendly website layouts.",
      cn2: "Learned to design professional UI/UX prototypes using Figma",
      cn3: "Collaborated with a team to create user-friendly interfaces",
      certificate:
        "https://drive.google.com/file/d/1J8h8NYROzIvxDV3xU_pJSy1iCYPIC3jA/view?usp=sharing",
    },
  ];

  const [activeMobile, setActiveMobile] = useState(null);
  const containerRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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
    <div className="py-10" id="experience">
      <motion.h1
        className="text-[#ffffff] text-center text-2xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Experience
      </motion.h1>

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center"
      >
        {experiencedata.map((exp, index) => (
          <motion.div
            key={index}
            className="relative w-[280px] h-[260px] sm:w-[400px] sm:h-[266px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={!isMobile ? { rotateY: 180 } : {}}
              animate={
                isMobile && activeMobile === index ? { rotateY: 180 } : { rotateY: 0 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onClick={() => {
                if (isMobile) {
                  setActiveMobile(activeMobile === index ? null : index);
                }
              }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-900 rounded-lg backface-hidden p-4 flex flex-col justify-center items-center">
                <h2 className="text-[#C4D613] font-semibold text-lg">
                  {exp.company}
                </h2>
                <p className="text-white">{exp.role}</p>
                <p className="text-white">{exp.duration}</p>
                {/* Hover / Tap Hint — Bottom */}
                  {!activeMobile && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 px-3 py-1 rounded text-white/40 text-xs opacity-100 group-hover:opacity-0 transition">
                      {isMobile ? "Tap to view" : "Place cursor here to view"}
                    </div>
                  )}
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-gray-900 rounded-lg backface-hidden p-4 flex flex-col justify-between"
                style={{ transform: "rotateY(180deg)" }}
              >
                <h1 className="text-white text-center font-bold">{exp.title}</h1>
                <ul className="  text-sm md:text-lg  list-disc ml-5 text-white mt-4">
                  {exp.cn1 && <li>{exp.cn1}</li>}
                  {exp.cn2 && <li>{exp.cn2}</li>}
                  {exp.cn3 && <li>{exp.cn3}</li>}
                </ul>
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline text-center mx-auto mb-2"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
