import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "UoE CSA Financial Tracking App",
      role: "Backend Developer",
      description: "A secure financial record-keeping system designed for the University of Eldoret Catholic Student Association, featuring automated reporting and strict access controls.",
      highlights: [
        "Designed and implemented a normalized database schema for complex financial records",
        "Built secure authentication and email verification using SMTP",
        "Optimized SQL queries to improve report generation speed by 40%",
        "Implemented Role-Based Access Control (RBAC) for sensitive data protection"
      ],
      tech: ["Python", "Flask", "SQL", "SMTP", "RBAC"],
      links: { github: "#", live: "#" } 
    },
    {
      title: "Food Court Management System",
      role: "Collaborator",
      description: "A unified platform for order placement and tracking, bridging the gap between kitchen staff and customers with real-time updates.",
      highlights: [
        "Developed API gateways ensuring seamless frontend-backend communication",
        "Implemented RBAC to secure admin and staff interfaces",
        "Integrated HTML templates for a responsive user interface",
        "Optimized order processing workflows to reduce system latency"
      ],
      tech: ["Python", "API Gateway", "HTML/CSS", "SQL"],
      links: { github: "#", live: "#" }
    },
    {
      title: "G6 Solutions Portfolio",
      role: "Frontend Collaborator",
      description: "A modern, high-performance business portfolio website built to showcase services and client success stories.",
      highlights: [
        "Implemented responsive UI using React.js and Tailwind CSS",
        "Deployed via Netlify ensuring 99.9% uptime and global accessibility",
        "Optimized assets and code splitting for high Lighthouse performance scores"
      ],
      tech: ["React.js", "Tailwind CSS", "Netlify", "Git"],
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-[#0a192f] text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header - Folder Icon + Cyan Accent */}
        <div className="flex items-center gap-4 mb-12">
          <Folder className="text-cyan-400" size={32} />
          <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#112240] rounded-xl p-6 md:p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-cyan-400/10"
            >
              {/* Card Header: Title & Links */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100 flex items-center gap-3">
                    {project.title}
                  </h3>
                  {/* Role Badge - Cyan Border/Text */}
                  <span className="inline-block mt-2 text-xs font-mono py-1 px-2 rounded text-cyan-400 border border-cyan-400/30 bg-cyan-400/10">
                    {project.role}
                  </span>
                </div>
                
                {/* Icons */}
                <div className="flex gap-4 text-slate-400">
                  <a href={project.links.github} className="hover:text-cyan-400 transition-colors" aria-label="GitHub Repo">
                    <Github size={22} />
                  </a>
                  <a href={project.links.live} className="hover:text-cyan-400 transition-colors" aria-label="Live Demo">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {/* Highlights Section */}
              <div className="mb-6">
                <h4 className="text-sm font-mono text-cyan-400 mb-3">Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-400">
                      <span className="text-cyan-400 mr-2 mt-1">›</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#233554] text-cyan-300 hover:text-cyan-100 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;