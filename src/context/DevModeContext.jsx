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
        let frameCount = 0;
        let lastTime = performance.now();
        
        const updateFPS = () => {
            const now = performance.now();
            frameCount++;
            if (now - lastTime >= 1000) {
                setStats(prev => ({ 
                    ...prev, 
                    fps: frameCount,
                    nodes: document.querySelectorAll('*').length,
                    renderTime: (Math.random() * 5 + 2).toFixed(1) + 'ms'
                }));
                frameCount = 0;
                lastTime = now;
            }
            requestAnimationFrame(updateFPS);
        };

        const fpsId = requestAnimationFrame(updateFPS);
        
        const memInterval = setInterval(() => {
            setStats(prev => ({ 
                ...prev, 
                memory: (Math.random() * 50 + 200).toFixed(1)
            }));
        }, 3000);

        return () => {
            cancelAnimationFrame(fpsId);
            clearInterval(memInterval);
        };
    }, []);


    useEffect(() => {
        const body = document.body;
        body.classList.remove('matrix-theme', 'synthwave-theme', 'wireframe-mode');
        if (theme === 'matrix') body.classList.add('matrix-theme');
        if (theme === 'synthwave') body.classList.add('synthwave-theme');
        if (wireframe) body.classList.add('wireframe-mode');
        
        return () => {
            body.classList.remove('matrix-theme', 'synthwave-theme', 'wireframe-mode');
        };
    }, [theme, wireframe]);

    const toggleDevMode = () => setIsDevMode(prev => !prev);

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
            setGlitch
        }}>
            {children}
        </DevModeContext.Provider>
    );
};

export const useDevMode = () => useContext(DevModeContext);
