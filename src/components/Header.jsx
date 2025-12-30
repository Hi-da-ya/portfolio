import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

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
    <div className="w-full lg:w-1/2 flex flex-col justify-center">
      <div className="greeting text-accent text-sm md:text-base mb-2 font-mono">
        Hello, my name is
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-3 leading-tight">
        Hidaya Vanessa
      </h1>
      
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-primary mb-4 font-mono">
        Software Developer
      </h2>
      
      <p className="text-text-secondary text-base md:text-lg lg:text-xl mb-8 max-w-lg leading-relaxed">
        I build robust software systems and scalable applications.
      </p>
      
      {/* Social Icons */}
      <div className="flex gap-4 mb-8">
        <a 
          href="https://github.com/Hi-da-ya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-primary hover:text-accent transition-all duration-300 hover:-translate-y-1"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/hidaya-v-wetsakhulia-6a713a2b9/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-primary hover:text-accent transition-all duration-300 hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="mailto:hidayawetsa@gmail.com" 
          className="text-text-primary hover:text-accent transition-all duration-300 hover:-translate-y-1"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a 
          href="https://portfoliowebsite.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-primary hover:text-accent transition-all duration-300 hover:-translate-y-1"
          aria-label="Website"
        >
          <FaGlobe size={24} />
        </a>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={handleViewWork} 
          className="bg-accent text-primary px-8 py-3 rounded font-mono text-sm font-semibold transition-all duration-300 hover:bg-accent/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
        >
          View My Work
        </button>
        <button 
          onClick={handleContactMe} 
          className="bg-transparent text-text-primary px-8 py-3 rounded font-mono text-sm border border-text-primary/30 transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Header;