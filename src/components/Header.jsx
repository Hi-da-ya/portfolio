import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Header = () => {
  const handleViewWork = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
      
      {/* 1. Greeting: RGB(34 211 238) */}
      <div className="text-[rgb(34,211,238)] font-mono text-sm md:text-base mb-4 md:mb-5">
        Hello, my name is
      </div>
      
      {/* 2. Name: White/Lightest Slate */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-3 md:mb-4 tracking-tight leading-tight">
        Hidaya Vanessa
      </h1>
      
      {/* 3. Title: Muted Slate */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8892b0] mb-4 md:mb-6">
        Software Developer
      </h2>
      
      {/* 4. Bio: Muted Slate + Monospace font */}
      <p className="text-[#8892b0] text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mb-6 md:mb-8 font-mono">
        I build robust software systems and scalable applications.
      </p>
      
      {/* 5. Social Icons: Hover color RGB(34 211 238) */}
      <div className="flex gap-4 md:gap-6 mb-8 md:mb-10">
        <a 
          href="https://github.com/Hi-da-ya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a8b2d1] hover:text-[rgb(34,211,238)] transition-all duration-300 hover:-translate-y-1"
          aria-label="GitHub"
        >
          <Github size={22} />
        </a>
        <a 
          href="https://linkedin.com/in/hidaya-w-vanessa-6a713a2b9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a8b2d1] hover:text-[rgb(34,211,238)] transition-all duration-300 hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <Linkedin size={22} />
        </a>
        <a 
          href="mailto:hidayawetsa@gmail.com" 
          className="text-[#a8b2d1] hover:text-[rgb(34,211,238)] transition-all duration-300 hover:-translate-y-1"
          aria-label="Email"
        >
          <Mail size={22} />
        </a>
        <a 
          href="https://dev.to/tech_with_nessah" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a8b2d1] hover:text-[rgb(34,211,238)] transition-all duration-300 hover:-translate-y-1"
          aria-label="Website"
        >
          <Globe size={22} />
        </a>
      </div>
      
      {/* 6. Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        
        {/* Primary Button: Solid Royal Blue (Maintains layout contrast) */}
        <button 
          onClick={handleViewWork} 
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-md font-medium transition-all duration-300 shadow-lg shadow-blue-900/20 text-sm sm:text-base"
        >
          View My Work
        </button>
        
        {/* Secondary Button: Hover border & text updated to RGB(34 211 238) */}
        <button 
          onClick={handleContactMe} 
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border border-[#334155] text-[#cbd5e1] hover:border-[rgb(34,211,238)] hover:text-[rgb(34,211,238)] rounded-md font-medium transition-all duration-300 text-sm sm:text-base"
        >
          Contact Me
        </button>
      </div>

    </div>
  );
};

export default Header;