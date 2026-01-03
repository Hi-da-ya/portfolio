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
        "Conducted comprehensive system testing to identify bugs and usability issues",
        "Proposed and implemented configuration improvements that enhanced system stability",
        "Assisted in the deployment and configuration of internal software tools"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a192f] text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-12 md:mb-16">
          <Briefcase className="text-cyan-400" size={28} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">Work Experience</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Line - Darker Slate to match the theme */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Timeline Dot (Cyan Accent) */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0a192f] border-2 border-cyan-400 rounded-full z-10 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(34,211,238,0.4)]"></div>

              {/* Date Pill (Navy Bg + Cyan Text) */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'
              } mb-2 md:mb-0`}>
                <span className="inline-flex items-center font-mono text-xs text-cyan-400 bg-[#112240] px-4 py-1.5 rounded-full border border-slate-700 shadow-sm">
                  <Calendar size={12} className="mr-2" />
                  {exp.period}
                </span>
              </div>

              {/* Content Card (Lighter Navy Bg) */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
              }`}>
                <div className="bg-[#112240] p-5 sm:p-6 md:p-8 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                  
                  {/* Role (White) */}
                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  {/* Company (Cyan) */}
                  <div className="text-sm font-mono text-cyan-400 mb-4 flex items-center">
                    {exp.company}
                  </div>

                  {/* Description (Grey) */}
                  <p className="text-slate-400 mb-5 leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-400">
                        <span className="text-cyan-400 mr-3 mt-1.5 text-[10px]">▹</span>
                        <span className="leading-relaxed">{item}</span>
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