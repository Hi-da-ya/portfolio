import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayCommand, setDisplayCommand] = useState('');
  
  const terminalCommands = [
    "whoami",
    "ls -la skills/", 
    "cat about.txt",
    ""
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => {
        const next = (prev + 1) % terminalCommands.length;
        typeCommand(terminalCommands[next]);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const typeCommand = (command) => {
    setDisplayCommand('');
    let charIndex = 0;
    
    const typeChar = () => {
      if (charIndex < command.length) {
        setDisplayCommand((prev) => prev + command.charAt(charIndex));
        charIndex++;
        setTimeout(typeChar, 100);
      }
    };
    
    typeChar();
  };

  return (
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
      <div className="terminal-container bg-[#112240] rounded-lg overflow-hidden shadow-2xl border border-slate-800 w-full max-w-2xl hover:border-cyan-400/50 transition-all duration-300">
        <div className="terminal-window">
          <div className="terminal-top-bar bg-[#0a192f] px-4 md:px-5 py-2.5 md:py-3 flex items-center justify-between border-b border-slate-800">
            <div className="terminal-title font-mono text-slate-400 text-xs md:text-sm">
              software-dev ~ bash
            </div>
            <div className="terminal-controls flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        
        <div className="terminal-body p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base">
          {/* First command */}
          <div className="terminal-line mb-3 md:mb-4 flex items-start">
            <div className="terminal-prompt text-[#50fa7b] whitespace-nowrap mr-2 md:mr-3">
              <span className="text-[#ff79c6]">dev@server</span>
              <span className="text-slate-300">:</span>
              <span className="text-slate-300">~</span>
              <span className="text-slate-300">$</span>
            </div>
            <div className="terminal-command text-slate-300 break-words">
              whoami
            </div>
          </div>
          <div className="terminal-output text-cyan-400 ml-4 md:ml-5 mb-4 md:mb-6">
            software developer
          </div>
          
          {/* Second command */}
          <div className="terminal-line mb-3 md:mb-4 flex items-start">
            <div className="terminal-prompt text-[#50fa7b] whitespace-nowrap mr-2 md:mr-3">
              <span className="text-[#ff79c6]">dev@server</span>
              <span className="text-slate-300">:</span>
              <span className="text-slate-300">~</span>
              <span className="text-slate-300">$</span>
            </div>
            <div className="terminal-command text-slate-300 break-words">
              ls -la skills/
            </div>
          </div>
          <div className="terminal-output text-slate-400 ml-4 md:ml-5 mb-4 md:mb-6">
            <div className="skills-list flex flex-wrap gap-2 mt-1">
              <span className="text-cyan-400">python</span>
              <span className="text-orange-400">javascript</span>
              <span className="text-pink-400">flask</span>
              <span className="text-green-400">django</span>
              <span className="text-purple-400">node.js</span>
              <span className="text-cyan-400">express.js</span>
              <span className="text-orange-400">dbms</span>
            </div>
          </div>
          
          {/* Third command */}
          <div className="terminal-line mb-3 md:mb-4 flex items-start">
            <div className="terminal-prompt text-[#50fa7b] whitespace-nowrap mr-2 md:mr-3">
              <span className="text-[#ff79c6]">dev@server</span>
              <span className="text-slate-300">:</span>
              <span className="text-slate-300">~</span>
              <span className="text-slate-300">$</span>
            </div>
            <div className="terminal-command text-slate-300 break-words">
              cat about.txt
            </div>
          </div>
          <div className="terminal-output text-cyan-400 ml-4 md:ml-5 mb-4 md:mb-6">
          I'm a software developer specialising in backend development,
            experienced building scalable APIs and microservices.<br/>
            Familiar with frontend technologies such as react and Tailwind for building ui<br/><br/>
            Beyond the technical aspects, I enjoy building communities and contributing to
            spaces that encourage collective growth and meaningful impact. 
                I'm especially drawn to projects that serve people and solve real problems.
          </div>
          
          {/* Current command with cursor */}
          <div className="terminal-line flex items-start">
            <div className="terminal-prompt text-[#50fa7b] whitespace-nowrap mr-2 md:mr-3">
              <span className="text-[#ff79c6]">dev@server</span>
              <span className="text-slate-300">:</span>
              <span className="text-slate-300">~</span>
              <span className="text-slate-300">$</span>
            </div>
            <div className="terminal-command text-slate-300">
              <span className="cursor inline-block w-0.5 sm:w-1 h-4 sm:h-5 bg-cyan-400 ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;