import React from "react";

// Experience Component: Displays a list of work/internship experiences
const Experience = () => {
  // Array of experience data
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
      description: "Upcoming soon", // Special case: future project, no bullet points
    },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-[#ffffff] text-center text-2xl font-bold mt-10 mb-10">
        Experience
      </h1>

      {/* Experience cards container */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {experiencedata.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg w-[90%] md:w-[30%]"
          >
            {/* Company Name */}
            <h2 className="text-[#C4D613] font-semibold text-lg">
              {exp.company}
            </h2>

            {/* Role and Duration */}
            <p className="text-white">{exp.role}</p>
            <p className="text-white">{exp.duration}</p>

            {/* If description is 'Upcoming soon', show in yellow and centered */}
            {exp.description === "Upcoming soon" ? (
              <p className="text-yellow-400 text-center mt-20">
                {exp.description}
              </p>
            ) : (
              // Else, show full description with bullet points
              <>
                <p className="text-white mb-2">{exp.description}</p>

                {/* Bullet points (cn1, cn2, cn3) */}
                <ul className="list-disc ml-5 text-white">
                  {exp.cn1 && <li>{exp.cn1}</li>}
                  {exp.cn2 && <li>{exp.cn2}</li>}
                  {exp.cn3 && <li>{exp.cn3}</li>}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
