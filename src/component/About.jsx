import React from "react";
import { motion } from "framer-motion";
const About = () => {
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
        { name: "JavaScript", percent: 40 },
        { name: "Tailwind CSS", percent: 60 },
    ];

    return (
        <div id="about">
            <div className="p-4 mt-[350px] md:mt-[130px]">
                {/* For Header */}
                <motion.h1 className=" text-4xl font-bold text-[#FFFFFF] mt-[50px] md:mx-[150px] text-center mb-[50px]  whitespace-nowrap"
                 initial={{ opacity: 0, y: -30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: false, amount: 0.3 }}>About Me</motion.h1>

                {/* Card Section */}
                <div className="flex flex-col md:flex-row justify-center">
                    {/* Img section */}
                    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}>
                        <img src="/mine.webp" alt="My Image" className="rounded-l-sm h-auto mx-auto md:w-[500px] md:h-[500px]" />
                    </motion.div>

                    {/* Profile */}
                    <motion.div className="bg-gray-900 text-white p-8 font-sans w-full md:w-[500px] rounded-r-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}>
                       <ul className="space-y-4 text-sm md:text-base">
                             {data.map((item, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-[100px] font-bold">{item.label}</span>
                                <span className="w-2 text-center">:</span>
                                <span className="text-[#C4D613] ml-2">{item.value}</span>
                              </li>
                            ))}
                     </ul>


                        {/* Skillset */}
                        <div className="mt-4">
                            <h2 className=" text-lg  md:text-xl font-bold mb-2">Skills</h2>
                            {skills.map((skill,index) => (
                                <motion.div key={skill.name} className="mb-2"
                                     initial={{ opacity: 0 }}
                                     whileInView={{ opacity: 1 }}
                                     transition={{ duration: 0.6, delay: index * 0.2 }}
                                      viewport={{ once: false, amount: 0.3 }}>
                                    <div className=" text-sm md:text-base flex justify-between font-semibold">
                                        <span>{skill.name}</span>
                                        <span>{skill.percent}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-white rounded-full">
                                        <motion.div
                                            className="h-full bg-[#4CAF50] rounded-full"
                                            style={{
                                    background:
                                        "bg-[#4CAF50]",
                                    }}
                                initial={{ width: "0%" }}
                                whileInView={{ width: `${skill.percent}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
