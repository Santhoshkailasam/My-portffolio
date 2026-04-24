import React, { useEffect } from "react";
import LandingPage from "./screen/Landingpage.jsx";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      lerp: 0.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Ensure the page starts at the top on refresh
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LandingPage />
  );
};

export default App;