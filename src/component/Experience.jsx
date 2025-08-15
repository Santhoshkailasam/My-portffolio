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
    },
    {
      company: "ECIA one solution",
      role: "UI/UX Intern",
      duration: "July 2025 - present",
      description: "Upcoming soon",
    },
  ];

  return (
    <div className="py-10">
      <h1 className="text-[#ffffff] text-center text-2xl font-bold mb-10">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {experiencedata.map((exp, index) => (
          <motion.div
            key={index}
            className="relative w-[90%] md:w-[30%] h-64 perspective"
          >
            {/* Container with perspective */}
            <motion.div
              className="relative w-full h-full cursor-pointer"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-800 rounded-lg backface-hidden p-4 flex flex-col justify-center items-center">
                <h2 className="text-[#C4D613] font-semibold text-lg">{exp.company}</h2>
                <p className="text-white">{exp.role}</p>
                <p className="text-white">{exp.duration}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-700 rounded-lg backface-hidden rotate-y-180 p-4 flex flex-col justify-center">
                {exp.description === "Upcoming soon" ? (
                  <p className="text-yellow-400 text-center text-lg mt-10">
                    {exp.description}
                  </p>
                ) : (
                  <>
                    <p className="text-white mb-2">{exp.description}</p>
                    <ul className="list-disc ml-5 text-white">
                      {exp.cn1 && <li>{exp.cn1}</li>}
                      {exp.cn2 && <li>{exp.cn2}</li>}
                      {exp.cn3 && <li>{exp.cn3}</li>}
                    </ul>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CSS for 3D flip */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Experience;
