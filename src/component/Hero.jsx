import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Hero =()=>{
    const buttonVariants = {
       initial: { opacity: 0, y: 30 },
       animate: {
       opacity: 1,
       y: 0,
       transition: { duration: 1, ease: "easeOut", delay: 0.9 } // slow entrance
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 0 12px rgba(3, 103, 251, 0.4)",
    transition: { duration: 0.2, ease: "easeOut" } // fast hover in/out
  }
};
    return(
        <div className="mx-[100px] flex flex-row" id="home">
            <div>
            <h6 className="text-3xl text-[#BDD749] mt-[190px]">
            <TypeAnimation
            sequence={[
              "Hello !", // type this
              1000,      // wait 1 second
            ]}
            wrapper="span"
            speed={50}
            repeat={0} // 0 = no repeat
            cursor={false} // hide blinking cursor
          />
            </h6>
         <motion.h4
  className="text-6xl text-[#7FB2FF] mt-[20px]"
  initial={{ opacity: 0, filter: "blur(10px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  <span className="text-[#ffffff]"> I'M</span> Kailasam N
</motion.h4>

           <motion.h4
  className="text-6xl text-[#7FB2FF] mt-[20px]"
  initial={{ opacity: 0, filter: "blur(10px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
Software Developer
</motion.h4>

            <motion.button className="bg-[#0367FB] text-white p-2 rounded-md mt-[30px]"
           variants={buttonVariants}
         initial="initial"
  animate="animate"
  whileHover="hover">Download Resume</motion.button></div>





            <div className="">
                <motion.img src="/Ellipse 1.png" alt="Hero Image" 
                className="mt-[130px] ml-[100px] absolute"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }} />

                 <motion.img src="/heros.png" alt="Hero Image" 
                 className=" mt-[70px] ml-[250px]  absolute"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} />
            </div>
           
        </div>
    )
}
export default Hero;