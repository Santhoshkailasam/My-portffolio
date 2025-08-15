import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiencedata = [
    {
      company: "Interain AI",
      role: "Data Analyst Intern",
      duration: "Sep 2024 - Nov 2024",
      description:
        "Interain AI is empowering students, colleges, and companies with AI-driven, recruitment automation solutions.",
      cn1: "Extracted and cleaned verbal ability and science data from multiple sources.",
      cn2: "Converted data into structured formats like JSON.",
      cn3: "Organized datasets for seamless use in AI training.",
      certificate: "https://drive.google.com/file/d/1-meFa_PpGze530BnijwN-OxX3cZNNVoW/view?usp=sharing",
    },
    {
      company: "ECIA one solution",
      role: "UI/UX Intern",
      duration: "July 2025 - present",
      description: "Upcoming soon",
      cn1: "Upcoming soon",
      certificate: "https://drive.google.com/file/d/1J8h8NYROzIvxDV3xU_pJSy1iCYPIC3jA/view?usp=sharing",
    },
  ];

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

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {experiencedata.map((exp, index) => (
          <motion.div
            key={index}
            className="relative w-[400px] h-[266px] "
           initial={{ opacity: 0, scale: 0.8 }}      // start small and invisible
  whileInView={{ opacity: 1, scale: 1 }}   // zoom to full size and visible
  exit={{ opacity: 0, scale: 0.8 }}        // optional: fade/zoom out when removed
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
          >
            {/* 3D Flip container */}
            <motion.div
              className="relative w-full h-full cursor-pointer"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-900 rounded-lg backface-hidden p-4 flex flex-col justify-center items-center">
                <h2 className="text-[#C4D613] font-semibold text-lg">{exp.company}</h2>
                <p className="text-white">{exp.role}</p>
                <p className="text-white">{exp.duration}</p>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-gray-900 rounded-lg backface-hidden p-4 flex flex-col justify-between"
                style={{ transform: "rotateY(180deg)" }}
              >
                <ul className="list-disc ml-5 text-white mt-4">
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
