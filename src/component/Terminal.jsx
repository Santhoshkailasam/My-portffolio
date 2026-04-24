import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Terminal.css';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', content: 'SYSTEM BOOT SEQUENCE INITIATED...' },
        { type: 'system', content: 'LOADING KERNEL 5.10.0-PORTFOLIO...' },
        { type: 'system', content: 'ESTABLISHING SECURE CONNECTION TO KAILASAM.IO...' },
        {type: 'system', content: 'WELCOME TO KAILASAM OS v1.0.0' },
        {type: 'system', content: 'SECRET_PROTOCOL: UP DOWN LEFT RIGHT TO OVERRIDE' },
        {type: 'system', content: '----------------------------------------' },
        { type: 'system', content: '[ PRESS ENTER TO VIEW AVAILABLE COMMANDS ]' },
    ]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    const commands = {
        help: () => [
            'AVAILABLE COMMANDS:',
            '  help      - Show this help menu',
            '  about     - About me & mission',
            '  projects  - View my featured work',
            '  skills    - My technical arsenal',
            '  contact   - Get in touch',
            '  clear     - Wipe terminal history',
            '  date      - Current system time',
            '  whoami    - User privileges info'
        ],
        about: () => [
            'NAME: KAILASAM N',
            'ROLE: FULL-STACK DEVELOPER',
            'MISSION: BUILDING SCALABLE, HIGH-PERFORMANCE DIGITAL ECOSYSTEMS.',
            'LOCATION: CHENNAI, INDIA',
            'STATUS: AVAILABLE FOR COLLABORATION'
        ],
        projects: () => [
            'FEATURED PROJECTS:',
            '1. SPOTIFY CLONE       - REACT NATIVE AUDIO PLAYER',
            '2. PARKING APP         - SMART RESERVATION SYSTEM',
            '3. PROJECT MANAGEMENT  - FULL-STACK MERN SYSTEM',
            '4. 90s MOBILE APP      - RETRO SOUND EXPERIENCE',
            '5. FARMER SCHEME       - AGRI-GOV WEB PLATFORM',
            '6. FARMER APP          - AGRI-TECH MOBILE SOLUTION',
            'Type "projects --view <id>" for details (Coming soon)'
        ],
        skills: () => [
            'TECH STACK:',
            '  FRONTEND: REACT, NEXT.JS, TAILWIND, FRAMER MOTION',
            '  BACKEND: NODE.JS, FAST API, PYTHON',
            '  MOBILE: REACT NATIVE',
            '  DATABASE: MONGODB, POSTGRESQL',
            '  DEV TOOL: DOCKER, GIT, VITE'
        ],
        contact: () => [
            'EMAIL: Kailasam5107@gmail.com',
            'LINKEDIN: linkedin.com/in/kailasam-n',
            'GITHUB: github.com/Santhoshkailasam',
            'WHATSAPP: +91 9159873818'
        ],
        whoami: () => ['GUEST_USER_@_KAILASAM_OS', 'ACCESS_LEVEL: 0 (READ_ONLY)'],
        date: () => [new Date().toLocaleString()],
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (cmd) => {
        const newHistory = [...history, { type: 'input', content: cmd }];
        
        if (cmd === 'clear') {
            setHistory([{ type: 'system', content: 'Terminal cleared.' }]);
        } else if (commands[cmd]) {
            const response = commands[cmd]();
            response.forEach((line, index) => {
                newHistory.push({ type: 'output', content: line, delay: index * 50 });
            });
            setHistory(newHistory);
        } else {
            newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for options.` });
            setHistory(newHistory);
        }

        setCommandHistory([cmd, ...commandHistory]);
        setHistoryIndex(-1);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            if (!cmd && history[history.length - 1].content.includes('PRESS ENTER')) {
                executeCommand('help');
                return;
            }
            if (!cmd) return;
            executeCommand(cmd);
        } else if (e.key === 'ArrowUp') {
            if (historyIndex < commandHistory.length - 1) {
                const nextIdx = historyIndex + 1;
                setHistoryIndex(nextIdx);
                setInput(commandHistory[nextIdx]);
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                const nextIdx = historyIndex - 1;
                setHistoryIndex(nextIdx);
                setInput(commandHistory[nextIdx]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const cmdKeys = Object.keys(commands);
            const match = cmdKeys.find(c => c.startsWith(input));
            if (match) setInput(match);
        }
    };

    return (
        <section id="terminal-playground" className="terminal-section">
            <div className="terminal-container">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-title">kailasam@ubuntu: ~</div>
                </div>
                
                <div 
                    className="terminal-body custom-scrollbar" 
                    ref={terminalRef}
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((item, idx) => (
                        <div key={idx} className={`terminal-line ${item.type}`}>
                            {item.type === 'input' && <span className="prompt">kailasam@portfolio:~$ </span>}
                            <TypingLine content={item.content} type={item.type} />
                        </div>
                    ))}
                    
                    <div className="terminal-line input-line">
                        <span className="prompt">kailasam@portfolio:~$ </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            spellCheck="false"
                        />
                        <span className="cursor">_</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TypingLine = ({ content, type }) => {
    const [displayedContent, setDisplayedContent] = useState('');
    
    useEffect(() => {
        if (type === 'input' || type === 'system') {
            setDisplayedContent(content);
            return;
        }

        let i = 0;
        const interval = setInterval(() => {
            setDisplayedContent(content.slice(0, i + 1));
            i++;
            if (i >= content.length) clearInterval(interval);
        }, 15);
        
        return () => clearInterval(interval);
    }, [content, type]);

    return <span>{displayedContent}</span>;
};

export default Terminal;
