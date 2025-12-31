import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  // 1. Structured Data for the 4 Cards
  const skills = {
    fullStack: {
      title: "App Development",
      items: ["JavaScript (ES6+)", "Python", "React.js", "Node.js", "Express.js", "Flask", "Django", "HTML", "CSS"]
    },
    security: {
      title: "Security & Auth",
      items: ["OAuth 2.0", "JWT", "RBAC", "API Security", "Data Validation"]
    },
    databases: {
      title: "Databases",
      items: ["MySQL", "MongoDB", "SQLite", "Schema Design"]
    },
    workflow: {
      title: "Workflow & Tools",
      items: ["Git & GitHub", "Postman / API Testing", "Linux / Terminal", "npm & pip", "VS Code"]
    }
  };

  // Helper component to render a single card
  const SkillCard = ({ title, items, className = "" }) => (
    <div className={`bg-[#112240] rounded-lg p-6 border border-slate-800 hover:border-cyan-400/30 flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl group ${className}`}>
      <h3 className="font-mono text-slate-100 text-lg mb-4 flex items-center">
        <span className="text-cyan-400 mr-2">&gt;</span>
        {title}
      </h3>
      <ul className="space-y-2 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 cursor-default">
            <span className="text-cyan-400 mr-2 mt-[2px] text-xs">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-24 bg-[#0a192f] text-slate-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header with <> Icon */}
          <div className="flex items-center gap-4 mb-12">
            <Code className="text-cyan-400" size={32} />
            <h2 className="text-3xl font-bold text-slate-100">Skills</h2>
          </div>
          
          {/* Main Content Wrapper */}
          <div className="about-content"> 

            {/* Bento Grid Layout */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                
                {/* Column 1: Full Stack (Full Height) */}
                <SkillCard 
                  title={skills.fullStack.title} 
                  items={skills.fullStack.items} 
                  className="h-full"
                />

                {/* Column 2: Split Column (Security & Databases) */}
                <div className="flex flex-col gap-4 md:gap-6">
                  <SkillCard 
                    title={skills.security.title} 
                    items={skills.security.items} 
                  />
                  <SkillCard 
                    title={skills.databases.title} 
                    items={skills.databases.items} 
                    className="flex-grow"
                  />
                </div>

                {/* Column 3: Workflow (Full Height) */}
                <SkillCard 
                  title={skills.workflow.title} 
                  items={skills.workflow.items} 
                  className="h-full"
                />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;