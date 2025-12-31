import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react'; // Assuming you are using lucide-react, or I can provide SVGs

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
      links: { github: "#", live: "#" } // Add real links here
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
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <Folder className="text-accent mr-4" size={28} />
          <h2 className="section-title mb-0">Featured Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-secondary/40 rounded-xl border border-terminal-border p-6 md:p-8 hover:border-accent/50 transition-all duration-300 hover:bg-secondary/60 shadow-lg"
            >
              {/* Card Header: Title & Links */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary flex items-center gap-3">
                    {project.title}
                    {/* Role Badge */}
                    <span className="text-xs font-mono py-1 px-2 rounded bg-primary/30 text-accent border border-accent/20">
                      {project.role}
                    </span>
                  </h3>
                </div>
                
                {/* Icons */}
                <div className="flex gap-4 text-text-secondary">
                  <a href={project.links.github} className="hover:text-accent transition-colors" aria-label="GitHub Repo">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="hover:text-accent transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights Section */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider font-mono">Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-secondary">
                      <span className="text-accent mr-2 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-terminal-border/50">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-mono px-3 py-1 rounded-full bg-primary/50 text-text-secondary border border-terminal-border/50 group-hover:text-accent group-hover:border-accent/30 transition-colors"
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