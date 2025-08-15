import React from "react";
import { motion } from "framer-motion";
const Education = ()=>{
    const educationdata =[
        {
            institution:"KCG College Of Technology",
            degree:"Bachelor of Technology",
            field:"Information Technology",
            duration:"2022-2026",
            score:"7.87 CGPA",
        },
        {
            institution:"Mannar Higher Secondary School",
            degree:"12th Grade",
            duration:"2020-2022",
            score:"80.05%", 
        },
        {
            institution:"Government Higher Secondary School",
            degree:"10th Grade",
            duration:"2019-2020",
            score:"76%",  
        }
    ]
    return(
      <div className="relative  min-h-screen py-2 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white"></div>

        {educationdata.map((edu, index) => {
          const isLeft = index % 2 !== 0; // alternate left/right

          return (
            <div key={index} className="relative mb-16 flex items-center w-full">
              
              {/* Left side card */}
              {isLeft ? (
                <div className="w-1/2 pr-6 flex justify-end">
                  <motion.div className="bg-gray-800 p-4 rounded-lg w-[90%] mt-5 relative mr-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.3 }}>
                    {/* Triangle connected to the right side */}
                  <div className="absolute right-[-16px] top-6 w-0 h-0 
                    border-t-[10px] border-b-[10px] border-l-[16px] 
                    border-t-transparent border-b-transparent border-l-gray-800" />
                    <h3 className="font-semibold text-lg">{edu.institution}</h3>
                    {edu.degree && <p>{edu.degree}</p>}
                    <p>{edu.score}</p>
                    <p className="text-[#C4D613] font-semibold">{edu.duration}</p>
                  </motion.div>
                </div>
              ) : (
                <div className="w-1/2" />
              )}

              {/* Timeline circle with icon */}
              <motion.div className="absolute left-1/2 transform   top-[30px] -translate-x-1/2 bg-[#C4D613] rounded-full h-12 w-12 flex items-center justify-center z-20 border-4 border-black"
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }} >
                <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 20.5a12.083 12.083 0 01-6.16-9.922L12 14z" />
                </motion.svg>
              </motion.div>

              {/* Right side card */}
              {!isLeft ? (
                <div className="w-1/2 pl-6 flex justify-start pt-5">
                  <motion.div className="bg-gray-800 p-4 rounded-lg w-[90%] relative ml-10 "
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.3 }}>
                    {/* Right Triangle */}
                    <div className="absolute left-[-16px] top-7 w-0 h-0 
                    border-t-[10px] border-b-[10px] border-r-[16px] 
                    border-t-transparent border-b-transparent border-r-gray-800" />
                    <h3 className="font-semibold text-lg">{edu.institution}</h3>
                    {edu.degree && <p>{edu.degree}</p>}
                    <p>{edu.score}</p>
                    <p className="text-[#C4D613] font-semibold">{edu.duration}</p>
                  </motion.div>
                </div>
              ) : (
                <div className="w-1/2" />
              )}
            </div>
          );
        })}
      </div>
    </div>


    )
}
export default Education;