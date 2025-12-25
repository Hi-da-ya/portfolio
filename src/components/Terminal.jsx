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
  
//   const terminalOutputs = [
//     "software developer",
//     "python node.js javascript  ",
//     "Software developer with 7+ years of experience building scalable APIs and microservices.",
//     ""
//   ];

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
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <div className="terminal-container bg-terminal-bg rounded-lg overflow-hidden shadow-2xl border border-terminal-border w-full max-w-2xl">
        <div className="terminal-window">
          <div className="terminal-top-bar bg-secondary px-5 py-3 flex items-center justify-between border-b border-terminal-border">
            <div className="terminal-title font-mono text-text-secondary text-sm">
              <span className="text-accent">backenddev</span> - bash
            </div>
            <div className="terminal-controls flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        
        <div className="terminal-body p-6 md:p-8 font-mono text-sm md:text-base">
          {/* First command */}
          <div className="terminal-line mb-4 flex items-start">
            <div className="terminal-prompt text-terminal-prompt whitespace-nowrap mr-3">
              <span className="text-terminal-user">dev@server</span>
              <span className="text-text-primary">:</span>
              <span className="text-text-primary">~</span>
              <span className="text-text-primary">$</span>
            </div>
            <div className="terminal-command text-text-primary">
              whoami
            </div>
          </div>
          <div className="terminal-output text-text-secondary ml-5 mb-6">
            backend developer
          </div>
          
          {/* Second command */}
          <div className="terminal-line mb-4 flex items-start">
            <div className="terminal-prompt text-terminal-prompt whitespace-nowrap mr-3">
              <span className="text-terminal-user">dev@server</span>
              <span className="text-text-primary">:</span>
              <span className="text-text-primary">~</span>
              <span className="text-text-primary">$</span>
            </div>
            <div className="terminal-command text-text-primary">
              ls -la skills/
            </div>
          </div>
          <div className="terminal-output text-text-secondary ml-5 mb-6">
            <div className="skills-list flex flex-wrap gap-2 mt-1">
              {['python', 'node.js', 'javascript '].map((skill) => (
                <span key={skill} className="skill-item text-accent">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Third command */}
          <div className="terminal-line mb-4 flex items-start">
            <div className="terminal-prompt text-terminal-prompt whitespace-nowrap mr-3">
              <span className="text-terminal-user">dev@server</span>
              <span className="text-text-primary">:</span>
              <span className="text-text-primary">~</span>
              <span className="text-text-primary">$</span>
            </div>
            <div className="terminal-command text-text-primary">
              cat about.txt
            </div>
          </div>
          <div className="terminal-output text-text-secondary ml-5 mb-6">
            Backend engineer with 2+ years of experience<br />
            building scalable APIs and microservices.
          </div>
          
          {/* Current command with cursor */}
          <div className="terminal-line flex items-start">
            <div className="terminal-prompt text-terminal-prompt whitespace-nowrap mr-3">
              <span className="text-terminal-user">dev@server</span>
              <span className="text-text-primary">:</span>
              <span className="text-text-primary">~</span>
              <span className="text-text-primary">$</span>
            </div>
            <div className="terminal-command text-text-primary">
              
              <span className="cursor inline-block w-1 h-5 bg-accent ml-1 animate-pulse"></span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;