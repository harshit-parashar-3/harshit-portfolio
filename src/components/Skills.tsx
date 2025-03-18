import React, { useEffect } from "react";
import {
  Atom,
  Star,
  Sparkles,
  Code,
  Database,
  Terminal,
  Layers,
  GitBranch,
  FileCode,
  Server,
  Globe,
  ShieldCheck,
  Package,
  Settings,
  Bug,
  Wrench,
  Paintbrush,
  Palette,
  PencilRuler,
  Component,
  Layout,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
  icon?: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend skills
    {
      name: "React",
      level: 95,
      category: "frontend",
      icon: <Atom className="h-4 w-4 text-blue-400" />,
    },
    {
      name: "JavaScript",
      level: 90,
      category: "frontend",
      icon: <Code className="h-4 w-4 text-yellow-400" />,
    },
    {
      name: "TypeScript",
      level: 85,
      category: "frontend",
      icon: <FileCode className="h-4 w-4 text-blue-500" />,
    },
    {
      name: "HTML/CSS",
      level: 90,
      category: "frontend",
      icon: <FileCode className="h-4 w-4 text-orange-400" />,
    },
    {
      name: "Redux",
      level: 85,
      category: "frontend",
      icon: <Layers className="h-4 w-4 text-purple-500" />,
    },
    {
      name: "Next.js",
      level: 80,
      category: "frontend",
      icon: <Globe className="h-4 w-4 text-gray-400" />,
    },
    {
      name: "Material UI",
      level: 80,
      category: "frontend",
      icon: <Package className="h-4 w-4 text-blue-500" />,
    },
    {
      name: "Bootstrap",
      level: 80,
      category: "frontend",
      icon: <Layers className="h-4 w-4 text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "frontend",
      icon: <Sparkles className="h-4 w-4 text-teal-400" />,
    },
    {
      name: "Framer Motion",
      level: 75,
      category: "frontend",
      icon: <Sparkles className="h-4 w-4 text-pink-400" />,
    },
    {
      name: "Styled Components",
      level: 85,
      category: "frontend",
      icon: <Paintbrush className="h-4 w-4 text-pink-400" />,
    },
    {
      name: "Chakra UI",
      level: 80,
      category: "frontend",
      icon: <Palette className="h-4 w-4 text-teal-500" />,
    },
    {
      name: "SASS/SCSS",
      level: 85,
      category: "frontend",
      icon: <Palette className="h-4 w-4 text-pink-500" />,
    },
    {
      name: "Figma",
      level: 75,
      category: "frontend",
      icon: <PencilRuler className="h-4 w-4 text-red-500" />,
    },
    {
      name: "Storybook",
      level: 75,
      category: "frontend",
      icon: <Component className="h-4 w-4 text-purple-400" />,
    },
    {
      name: "Responsive Design",
      level: 85,
      category: "frontend",
      icon: <Layout className="h-4 w-4 text-green-500" />,
    },

    // Backend skills
    {
      name: "Node.js",
      level: 75,
      category: "backend",
      icon: <Server className="h-4 w-4 text-green-400" />,
    },
    {
      name: "Express",
      level: 70,
      category: "backend",
      icon: <Terminal className="h-4 w-4 text-gray-500" />,
    },
    {
      name: "MongoDB",
      level: 65,
      category: "backend",
      icon: <Database className="h-4 w-4 text-green-500" />,
    },
    {
      name: "GraphQL",
      level: 60,
      category: "backend",
      icon: <ShieldCheck className="h-4 w-4 text-pink-400" />,
    },
    {
      name: "REST API",
      level: 60,
      category: "backend",
      icon: <Globe className="h-4 w-4 text-blue-500" />,
    },

    // Tools & Others
    {
      name: "Git",
      level: 85,
      category: "tools",
      icon: <GitBranch className="h-4 w-4 text-orange-500" />,
    },
    {
      name: "Webpack",
      level: 75,
      category: "tools",
      icon: <Package className="h-4 w-4 text-blue-500" />,
    },
    {
      name: "Jest",
      level: 70,
      category: "tools",
      icon: <Bug className="h-4 w-4 text-red-400" />,
    },
    {
      name: "CI/CD",
      level: 70,
      category: "tools",
      icon: <Settings className="h-4 w-4 text-gray-600" />,
    },
    {
      name: "Docker",
      level: 65,
      category: "tools",
      icon: <Wrench className="h-4 w-4 text-blue-600" />,
    },
  ];

  const skillIcons: { [key: string]: React.ReactNode } = {
    React: <Atom className="h-4 w-4 text-blue-400" />,
    JavaScript: <Star className="h-4 w-4 text-yellow-400" />,
    TypeScript: <Sparkles className="h-4 w-4 text-blue-500" />,
    "Node.js": <Code className="h-4 w-4 text-green-500" />,
    "Next.js": <Globe className="h-4 w-4 text-gray-500" />,
    "Tailwind CSS": <Star className="h-4 w-4 text-cyan-400" />,
    Redux: <Layers className="h-4 w-4 text-purple-500" />,
    GraphQL: <Database className="h-4 w-4 text-pink-500" />,
    MongoDB: <Database className="h-4 w-4 text-green-600" />,
    Git: <Terminal className="h-4 w-4 text-orange-500" />,
  };

  // Group skills by category
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({
    skill,
    index,
  }) => (
    <div
      className="mb-6 reveal inline-flex items-center gap-2 px-3 py-1 rounded-full 
             bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 text-sm font-medium"
      style={{ animationDelay: `${index * 0.1}s`, marginRight: "1rem" }}
    >
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  );

  // Animation for skill bars on scroll
  useEffect(() => {
    const bars = document.querySelectorAll(".skills-section .bg-gradient-to-r");

    const animateSkillBars = () => {
      bars.forEach((bar) => {
        const width = (bar as HTMLElement).dataset.width;
        setTimeout(() => {
          (bar as HTMLElement).style.width = width || "0%";
        }, 300);
      });
    };

    // Set up intersection observer to trigger animation when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector(".skills-section");
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
  const topSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Redux",
    "GraphQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="skills"
      className="py-24 skills-section relative overflow-hidden bg-secondary/30 dark:bg-secondary/10"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>

      <div className="container px-6 mx-auto mb-16">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              My Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over the years, I have mastered a variety of technologies and
            frameworks to build dynamic, interactive, and scalable web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div
            className="reveal neo-morphism rounded-xl"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-morphism rounded-xl p-8 h-full transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl md:text-xl font-bold tracking-tight mb-4">
                Frontend
              </h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div
            className="reveal neo-morphism rounded-xl"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass-morphism rounded-xl p-8 h-full transition-all duration-300 hover:translate-y-[-5px]">
              <h3 className="text-xl md:text-xl font-bold tracking-tight mb-4">
                Backend
              </h3>
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
              <h3 className="text-xl  font-bold tracking-tight mb-4 width-auto">
                Tools & Others
              </h3>
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
{/* Marquee banner */}
        <div className="py-6 bg-primary/10 backdrop-blur-sm overflow-hidden mb-16">
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {[...topSkills, ...topSkills].map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center px-6 py-2 rounded-full mx-2 bg-primary/20 text-primary-foreground font-semibold"
              >
                {skillIcons[skill] || (
                  <Settings className="h-4 w-4 text-gray-400" />
                )}
                <span style={{ marginLeft: "0.3rem" }}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Skills;
