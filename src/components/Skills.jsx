import React from 'react';

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
    <div className={`bg-secondary/70 rounded-lg p-6 border border-terminal-border hover:border-accent/50 flex flex-col transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <h3 className="font-mono text-accent text-lg mb-4 flex items-center">
        <span className="text-accent mr-2">&gt;</span>
        {title}
      </h3>
      <ul className="space-y-2 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-text-secondary hover:text-accent transition-colors duration-200">
            <span className="text-accent/60 mr-2 mt-[2px] text-xs">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="about" className="py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12 md:mb-16">Skills</h2>
          
          {/* Main Content Wrapper: Aligns text and grid together */}
          <div className="about-content"> 
            
            {/* Bio Text */}
            {/* <div className="about-text max-w-3xl mb-16 text-left">
              <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-lg">
                Software Developer specializing in backend engineering, with experience designing and building APIs, authentication systems, and data-driven applications.
                While my strength is backend development, I have hands-on experience working across the stack with familiarity in React for building user interfaces.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed text-base md:text-lg">
                Beyond the technical aspects, I enjoy building communities and contributing to spaces that encourage collective growth and meaningful impact. 
                I'm especially drawn to projects that serve people and solve real problems.
              </p>
            </div> */}

            {/* Bento Grid Layout */}
            <div>
              {/* Header for the Skills Section */}
              {/* <div className="font-mono text-sm text-text-secondary/70 mb-6 text-left">
                // current_stack_configuration
              </div> */}

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