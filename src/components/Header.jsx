import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

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
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full">
          <div className="name-title mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              Hidaya Vanessa
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-accent mb-4 font-mono">
              Software Developer
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mb-10">
              I build robust software systems and scalable applications.
            </p>
            
            <div className="h-px bg-gradient-to-r from-accent to-transparent w-48 my-10"></div>
            
            <div className="header-actions flex flex-col md:flex-row gap-4 mb-16">
              <button onClick={handleViewWork} className="btn">
                View My Work
              </button>
              <button onClick={handleContactMe} className="btn">
                Contact Me
              </button>
            </div>
          </div>
          
          < Navbar />
        </div>
      </div>
    </section>
  );
};

export default Header;