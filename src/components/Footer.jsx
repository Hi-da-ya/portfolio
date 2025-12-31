import React from 'react';
import { Github, Linkedin, Mail, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Hi-da-ya',
      ariaLabel: 'GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/hidaya-v-wetsakhulia-6a713a2b9/',
      ariaLabel: 'LinkedIn profile'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hidayawetsa@gmail.com',
      ariaLabel: 'Send email'
    },
    {
      name: 'Website',
      icon: Globe,
      url: 'https://portfoliowebsite.com',
      ariaLabel: 'Personal website'
    }
  ];

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a192f] border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            
            {/* Left: Logo/Brand */}
            <div className="flex flex-col items-center md:items-start">
              <a 
                href="#home" 
                onClick={handleScrollToTop}
                className="font-mono text-slate-100 text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors duration-300 mb-2"
                aria-label="Back to home"
              >
                ~/Hidaya Vanessa
              </a>
              <p className="text-slate-400 text-xs md:text-sm font-mono">
                Software Developer
              </p>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center gap-4 md:gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1"
                    aria-label={link.ariaLabel}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Right: Copyright */}
            <div className="flex flex-col items-center md:items-end">
              <p className="text-slate-500 text-xs font-mono mt-1">
                © {currentYear} All rights reserved
              </p>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

