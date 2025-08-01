import React from "react";
const About=()=>{
    const data = [
  { label: "Name", value: "Kailasam N" },
  { label: "Degree", value: "Bachelor Of Technology" },
  { label: "Role", value: "Software Developer" },
  { label: "Languages", value: "Tamil, English" },
];
const skills = [
  { name: "Python", percent: 50 },
  { name: "React", percent: 70 },
  { name: "Html", percent: 80 },
  { name: "CSS", percent: 60 },
  { name: "JavaScript", percent: 40},
  { name: "Tailwind CSS", percent: 60},
];
    return(
        <div>
         <div className=" p-4 mt-[100px] ">
                {/* For Header */}
            <h1 className="text-4xl text-[#FFFFFF] mt-[50px] mx-[150px] text-center mb-[50px]">About Me</h1>

            {/* Card Section */}
            <div className="flex flex-row justify-center">

                {/* Img section */}
                <div>
                <img src="/Profile.jpeg" alt="My Image" className="rounded-sm w-[500px] h-[500px] " / >
                 </div>
                {/* Profile */}
                <div className="bg-[#2A0C0C] text-white p-8 font-sans w-full md:w-[500px]">
                 <ul className="space-y-4">
                     {data.map((item, index) => (
                   <li key={index} className="flex">
                    <span className="w-[100px] font-bold">{item.label}</span>
                    <span className="mx-2">:</span>
                    <span className="text-[#C4D613] mx-2">{item.value}</span>
                  </li>
                ))}
                 </ul>

                   {/* Skillset */}
                <div className="mt-4">
                   <h2 className="text-xl font-bold mb-2">Skills</h2>
                   {skills.map((skill) => (
                      <div key={skill.name} className="mb-2">
                       <div className="flex justify-between font-semibold">
                          <span>{skill.name}</span>
                          <span>{skill.percent}%</span>
                       </div>
                        <div className="w-full h-2 bg-pink-200 rounded-full ">
                         <div
                         className="h-full bg-purple-500 rounded-full"
                         style={{ width: `${skill.percent}%` }}>
                         </div>
                         </div>
                         </div>
                     ))}
                 </div>
               
               </div>
             
            </div>
         </div>
        </div>
    )
}
export default About;