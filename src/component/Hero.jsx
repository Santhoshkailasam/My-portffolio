import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion,useInView} from "framer-motion";
import { useState,useRef,useEffect } from "react";
const Hero = ({ setShowResume }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};


    return (
        <div className="mx-4 md:mx-[100px] flex flex-col md:flex-row relative" id="home">
            <div className="z-10 w-full mb-10 md:mb-0">
                <motion.h6 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#BDD749] mt-20 md:mt-[190px]"
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
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-[#7FB2FF] mt-[20px]"
                    variants={blurText}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <span className="text-white">I'M</span> Kailasam N
                </motion.h4>

                {/* Software */}
                <motion.h4
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7FB2FF] mt-[20px]"
                    variants={blurText}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Software Developer
                </motion.h4>

                {/* button */}
                <motion.button 
                    className="bg-[#0367FB] text-white p-2 rounded-md mt-[30px] cursor-pointer"
                    variants={buttonVariants}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.3 }}
                    onClick={() => {
                        setShowResume(true);
                        setTimeout(() => {
                            const element = document.getElementById('resume');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }}
                >
                    View Resume
                </motion.button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[400px] md:h-auto pointer-events-none">
                <motion.img 
                    src="/Ellipse 1.png" 
                    alt="Background Ellipse" 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-[90%] max-w-[500px] h-auto md:left-auto md:translate-x-0 md:mt-[140px] md:ml-[100px] md:w-auto opacity-80"
                    fetchPriority="high"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />

                <motion.img 
                    src="/heros.png" 
                    alt="Hero Character" 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-[30%] max-w-[500px] h-auto md:left-auto md:translate-x-0 md:mt-[70px] md:ml-[250px] md:w-auto z-10"
                    fetchPriority="high"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                />
            </div>
        </div>
    

    )
}
export default Hero;