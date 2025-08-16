import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Menu (hamburger) and X (close) icons

const Navbar = () => {
  // Track which section is currently active (for highlight effect)
  const [active, setActive] = useState("home");

  // Track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // All navigation items with name + link to section
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // -------------------------------
  // Intersection Observer
  // -------------------------------
  // This watches which section is visible on screen
  // and updates the `active` state so the navbar highlights it
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setActive(sectionId); // set active section id
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% of section must be visible to count as active
      }
    );

    // Attach observer to each section
    sections.forEach((section) => section && observer.observe(section));

    // Cleanup when component unmounts
    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-[rgba(34,34,34,0.7)] text-white fixed top-0 left-0 w-full p-4 z-50 shadow-md">
      {/* Navbar container */}
      <nav className="flex justify-between items-center mx-4 md:mx-[90px]">
        
        {/* Logo with gradient animation */}
        <motion.h1
          className="text-2xl font-extrabold bg-gradient-to-r from-[#7FB2FF] via-[#BDD749] to-[#0367FB] bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // move gradient
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Kailasam N
        </motion.h1>

        {/* -------------------------------
            Desktop Navigation (hidden on mobile)
           ------------------------------- */}
        <ul className="hidden md:flex flex-row space-x-6 text-base">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className={`cursor-pointer pb-1 border-b-2 ${
                active === item.href.substring(1)
                  ? "border-[#7C89FB]" // active link highlight
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

        {/* -------------------------------
            Mobile Menu Button (hamburger/X)
           ------------------------------- */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)} // toggle menu
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* -------------------------------
          Mobile Menu (shown only if open)
         ------------------------------- */}
      {menuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden bg-[rgba(34,34,34,0.95)] mt-3 rounded-lg shadow-lg"
        >
          <ul className="flex flex-col space-y-4 p-4 text-lg">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer ${
                  active === item.href.substring(1)
                    ? "text-[#7C89FB]" // highlight active
                    : "text-white"
                }`}
              >
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)} // close menu after click
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
