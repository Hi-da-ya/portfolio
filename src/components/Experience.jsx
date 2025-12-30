import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Young Techiez",
      role: "Technical Support",
      period: "Oct 2025 - Present",
      description: "Providing technical oversight and infrastructure maintenance for digital operations.",
      achievements: [
        "Maintained and optimized web infrastructure to ensure high availability and performance",
        "Automated internal workflows reducing manual administrative time by 30%",
        "Provided technical support and troubleshooting for software deployment issues"
      ]
    },
    {
      company: "Calatech",
      role: "Software Developer",
      period: "Feb 2025 - Oct 2025",
      description: "Spearheaded backend architecture for client projects, focusing on scalable database design and API security.",
      achievements: [
        "Architected the backend for the UoE CSA Financial Tracking system, implementing strict RBAC and data normalization",
        "Designed RESTful API schemas to support complex financial reporting and data visualization",
        "Conducted code reviews and refactored codebases to improve maintainability for future deployments"
      ]
    },
    {
      company: "Calatech",
      role: "Software Development Intern",
      period: "Sept 2024 - Jan 2025",
      description: "Assisted the senior development team in the software development lifecycle and feature implementation.",
      achievements: [
        "Collaborated on backend logic development using Python and Flask",
        "Assisted in database migration tasks and query optimization",
        "Participated in agile sprints and daily stand-ups to track project progress"
      ]
    },
    {
      company: "Go2Code",
      role: "Software Development Intern",
      period: "Nov 2024 - Dec 2024",
      description: "Intensive internship program focused on modern software development practices.",
      achievements: [
        "Delivered functional web application modules based on specific project requirements and deadlines",
        "Gained hands-on experience with version control (Git) and collaborative coding workflows"
      ]
    },
    {
      company: "Grit Agencies",
      role: "Volunteer Developer",
      period: "April 2024 - Oct 2024",
      description: "Contributed to system configuration, testing, and process improvement initiatives.",
      achievements: [
        // Rephrased "proposed amendments" to sound more proactive
        "Conducted comprehensive system testing to identify bugs and usability issues",
        "Proposed and implemented configuration improvements that enhanced system stability",
        "Assisted in the deployment and configuration of internal software tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-primary/30">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex items-center mb-16">
          <Briefcase className="text-accent mr-4" size={28} />
          <h2 className="section-title mb-0">Work Experience</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-terminal-border/50"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* 1. Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary border-2 border-accent rounded-full z-10 mt-1.5 md:mt-0"></div>

              {/* 2. Date (Desktop: Opposite side of card) */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'
              } mb-2 md:mb-0`}>
                <span className="inline-flex items-center font-mono text-sm text-accent bg-secondary/50 px-3 py-1 rounded border border-terminal-border">
                  <Calendar size={12} className="mr-2" />
                  {exp.period}
                </span>
              </div>

              {/* 3. Content Card */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-secondary/40 p-6 rounded-xl border border-terminal-border hover:border-accent/30 transition-all duration-300 shadow-lg group">
                  
                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-gray-100 mb-1 group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-md text-text-secondary font-mono mb-4">
                     {exp.company}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-text-secondary">
                        <span className="text-accent mr-2 mt-1.5 text-[10px]">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;