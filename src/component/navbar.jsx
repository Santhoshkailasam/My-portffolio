import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home"); // default section

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setActive(sectionId);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-[rgba(34,34,34,0.7)] text-white fixed top-0 left-0 w-full p-4 z-50 shadow-md">
      <nav className="flex flex-row mx-[90px] justify-between">
        {/* Gradient Logo */}
        <motion.h1
          className="text-2xl font-extrabold bg-gradient-to-r from-[#7FB2FF] via-[#BDD749] to-[#0367FB] bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Kailasam N
        </motion.h1>

        {/* Nav Items */}
        <ul className="flex flex-row space-x-6 text-base mt-[5px]">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer pb-1 border-b-2 ${
                active === item.href.substring(1)
                  ? "border-[#7C89FB]"
                  : "border-transparent"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              whileHover={{
                scale: 1.15,
                
                transition: { type: "spring", stiffness: 200 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href}>{item.name}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
