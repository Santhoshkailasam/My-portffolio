import React, { useState, useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile to avoid loading heavy video
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Aggressively pause video when not visible
  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play().catch(() => {}); // handle auto-play restrictions
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <>
      {/* Background Fallback / Overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-[-2] bg-[#020617] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 100%, #1e293b 0%, #020617 100%)"
        }}
      />
      
      {!isMobile && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1] transition-opacity duration-1000 will-change-opacity"
          style={{ opacity: isVisible ? 0.3 : 0 }}
        >
          {/* Only render source if on desktop and likely to be seen soon */}
          <source src="/background.webm" type="video/webm" />
        </video>
      )}
    </>
  );
};

export default BackgroundVideo;
