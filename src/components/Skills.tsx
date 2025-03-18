
import React, { useEffect } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend skills
    { name: 'React', level: 95, category: 'frontend', icon: <Zap className="h-4 w-4 text-yellow-400" /> },
    { name: 'JavaScript', level: 90, category: 'frontend', icon: <Star className="h-4 w-4 text-yellow-400" /> },
    { name: 'TypeScript', level: 85, category: 'frontend', icon: <Sparkles className="h-4 w-4 text-blue-400" /> },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Redux', level: 85, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Framer Motion', level: 75, category: 'frontend' },
    
    // Backend skills
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'GraphQL', level: 60, category: 'backend' },
    
    // Tools & Others
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Webpack', level: 75, category: 'tools' },
    { name: 'Jest', level: 70, category: 'tools' },
    { name: 'Figma', level: 65, category: 'tools' },
  ];

  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');

  const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => (
    <div 
      className="mb-6 reveal" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between mb-1">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000"
          style={{ width: '0%' }}
          data-width={`${skill.level}%`}
        ></div>
      </div>
    </div>
  );

  // Animation for skill bars on scroll
  useEffect(() => {
    const bars = document.querySelectorAll('.skills-section .bg-gradient-to-r');
    
    const animateSkillBars = () => {
      bars.forEach(bar => {
        const width = (bar as HTMLElement).dataset.width;
        setTimeout(() => {
          (bar as HTMLElement).style.width = width || '0%';
        }, 300);
      });
    };

    // Set up intersection observer to trigger animation when section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Marquee animation for top skills
  const topSkills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL', 'MongoDB', 'Git'];

  return (
    <section id="skills" className="py-24 skills-section relative overflow-hidden bg-secondary/30 dark:bg-secondary/10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      
      {/* Marquee banner */}
      <div className="py-6 bg-primary/10 backdrop-blur-sm overflow-hidden mb-16">
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {[...topSkills, ...topSkills].map((skill, index) => (
            <div 
              key={index} 
              className="inline-flex items-center px-6 py-2 rounded-full mx-2 bg-primary/20 text-primary-foreground font-semibold"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">My Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I've developed expertise in various technologies and frameworks throughout my career,
            allowing me to build complete solutions from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Frontend Skills */}
          <div className="reveal neo-morphism rounded-xl" style={{animationDelay: '0.2s'}}>
            <div className="glass-morphism rounded-xl p-8 h-full transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Frontend</h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="reveal neo-morphism rounded-xl" style={{animationDelay: '0.4s'}}>
            <div className="glass-morphism rounded-xl p-8 h-full transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Backend</h3>
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Tools & Others */}
          <div className="reveal neo-morphism rounded-xl" style={{animationDelay: '0.6s'}}>
            <div className="glass-morphism rounded-xl p-8 h-full transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Tools & Others</h3>
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
