import React, { useState, useEffect, useRef } from "react";

const BackgroundVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Video becomes visible when scrolling
      },
      { threshold: 0.1 }
    );
    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-[4555px] mr-5 object-cover z-[-1]"
      style={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
    >
      {isVisible && (
        <>
          <source src="/background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </>
      )}
    </video>
  );
};

export default BackgroundVideo;
