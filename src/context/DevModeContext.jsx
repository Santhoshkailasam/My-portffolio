import React, { createContext, useContext, useState, useEffect } from 'react';

const DevModeContext = createContext();

export const DevModeProvider = ({ children }) => {
    const [isDevMode, setIsDevMode] = useState(false);
    const [stats, setStats] = useState({
        fps: 0,
        memory: 0,
        renderTime: 0,
        nodes: 0,
        latency: '12ms'
    });
    const [theme, setTheme] = useState('default'); 
    const [wireframe, setWireframe] = useState(false);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        if (!isDevMode) return;

        let frameCount = 0;
        let lastTime = performance.now();
        let animationFrameId;

        const updateFPS = () => {
            if (document.hidden) {
                animationFrameId = requestAnimationFrame(updateFPS);
                return;
            }

            const now = performance.now();
            frameCount++;
            if (now - lastTime >= 1000) {
                setStats(prev => ({ 
                    ...prev, 
                    fps: frameCount,
                    // Only count nodes every second, which is still often but acceptable in dev mode
                    nodes: document.getElementsByTagName('*').length,
                    renderTime: (Math.random() * 2 + 1).toFixed(1) + 'ms'
                }));
                frameCount = 0;
                lastTime = now;
            }
            animationFrameId = requestAnimationFrame(updateFPS);
        };

        animationFrameId = requestAnimationFrame(updateFPS);
        
        const memInterval = setInterval(() => {
            if (document.hidden) return;
            setStats(prev => ({ 
                ...prev, 
                memory: (Math.random() * 30 + 150).toFixed(1)
            }));
        }, 5000); // Increased interval to 5s

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(memInterval);
        };
    }, [isDevMode]);


    const [xray, setXray] = useState(false);

    useEffect(() => {
        const body = document.body;
        body.classList.remove('matrix-theme', 'synthwave-theme', 'wireframe-mode', 'xray-mode');
        if (theme === 'matrix') body.classList.add('matrix-theme');
        if (theme === 'synthwave') body.classList.add('synthwave-theme');
        if (wireframe) body.classList.add('wireframe-mode');
        if (xray) body.classList.add('xray-mode');
        
        return () => {
            body.classList.remove('matrix-theme', 'synthwave-theme', 'wireframe-mode', 'xray-mode');
        };
    }, [theme, wireframe, xray]);

    const toggleDevMode = () => {
        if (window.innerWidth < 768) return; // Block on mobile
        setIsDevMode(prev => !prev);
    };

    return (
        <DevModeContext.Provider value={{ 
            isDevMode, 
            setIsDevMode,
            toggleDevMode, 
            stats, 
            theme, 
            setTheme, 
            wireframe, 
            setWireframe,
            glitch,
            setGlitch,
            xray,
            setXray
        }}>
            {children}
        </DevModeContext.Provider>
    );
};

export const useDevMode = () => useContext(DevModeContext);
