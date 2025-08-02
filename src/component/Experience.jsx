import React from "react";
const Experience = () =>{
    const experiencedata =[
        {
            company:"Intterain AI",
            role:"Data Analyst Intern",
            duration:"Sep 2024-Nov 2024",
            description:"Interain AI is empowering students, colleges, and companies with AI-driven, recruitment automation solutions.",
        },
        {
            company:"ECIA one solution",
            role:"UI/UX Intern",
            duration:"July2025-present",
            description:"Upcoming soon",
        }
        
    ]
    return(
        <div>
               <h1 className="text-[#ffffff] text-center text-2xl font-bold mt-10 mb-10">Experience</h1>
               <div className="flex flex-row justify-center gap-10">
                {experiencedata.map((exp, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg w-[30%] ">
                        <h2 className="text-[#C4D613] font-semibold text-lg">{exp.company}</h2>
                        <p className="text-white">{exp.role}</p>
                        <p className="text-white">{exp.duration}</p>
                        <p className="text-white">{exp.description}</p>
                    </div>
                ))}
               </div>
        </div>

    );
}
export default Experience;
