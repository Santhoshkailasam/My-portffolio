import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion,useInView} from "framer-motion";
import { useState,useRef,useEffect } from "react";
const Hero =()=>{
const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const [startTyping, setStartTyping] = useState(false);
  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    } else {
      setStartTyping(false); // optional: reset when out of view
    }
  }, [inView]);
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
const blurText = {
  hidden: { opacity: 0, "--blur": "12px" },
  visible: {
    opacity: 1,
    "--blur": "0px",
    transition: { duration: 1.2, ease: "easeOut" }
  }
};


    return(
        <div className="mx-4 md:mx-[100px] flex flex-col md:flex-row " id="home">
            <div>
            <motion.h6 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-[#BDD749] mt-20 md:mt-[190px]"
            ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, ease: "easeOut" }}
      >
    {startTyping ? (
        <TypeAnimation
          sequence={["Hello !", 1000]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
        />
      ) : (
        <span className="opacity-0">Hello !</span>
      )}
            </motion.h6>
            {/* Myname */}
         <motion.h4
           className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7FB2FF] mt-[20px] whitespace-nowrap"
           style={{ filter: "blur(var(--blur))", willChange: "filter, opacity" }}
           variants={blurText}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.3 }}><span className="text-[#ffffff]"> I'M</span> Kailasam N
         </motion.h4>
{/* Software */}
           <motion.h4
           className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7FB2FF] mt-[20px] whitespace-nowrap"
           style={{ filter: "blur(var(--blur))", willChange: "filter, opacity" }}
           variants={blurText}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.3 }}
>
Software Developer
           </motion.h4>
{/* button */}
<a href="https://drive.google.com/file/d/1bikiCGcQEFKcBnIA7zplcJ_QLwKpV3VB/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <motion.button className="bg-[#0367FB] text-white p-2 rounded-md mt-[30px]"
           variants={buttonVariants}
           initial="initial"
           whileInView="animate" // triggers on scroll
           whileHover="hover"
           viewport={{ once: false, amount: 0.3 }} >Download Resume
        </motion.button>
        </a>
        </div>
{/* Image */}
            <div className="" >
                <motion.img src="/Ellipse 1.png" alt="ellipse Image " 
               className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-[90%] max-w-[500px] h-auto
md:left-auto md:translate-x-0 md:mt-[140px] md:ml-[100px] md:w-auto"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.3 }} />

                 <motion.img src="/heros.png" alt="Hero Image" 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-[30%] max-w-[500px] h-auto
md:left-auto md:translate-x-0 md:mt-[70px] md:ml-[250px] md:w-auto"
                 initial={{ x: 200, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                 viewport={{ once: false, amount: 0.3 }} />
            </div>
           
        </div>
    )
}
export default Hero;