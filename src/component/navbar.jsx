import React, { useState, useEffect } from "react";

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
      { root: null, rootMargin: "0px", threshold: 0.6 } // 60% of section visible
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-[rgba(34,34,34,0.7)] text-white fixed top-0 left-0 w-full p-4 z-50 shadow-md">
      <nav className="flex flex-row mx-[90px] justify-between">
        <div className="text-2xl">
          <h1>Kailasam N</h1>
        </div>
        <div className="items-center">
          <ul className="flex flex-row space-x-4 text-white text-base mt-[5px]">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`cursor-pointer pb-1 border-b-2 ${
                  active === item.href.substring(1) ? "border-[#7C89FB]" : "border-transparent"
                }`}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
