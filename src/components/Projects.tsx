
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: "A productivity tool for managing tasks with drag-and-drop functionality, task prioritization, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description: "An interactive weather application with real-time updates, location-based forecasts, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      id: "fitness-tracker",
      title: "Fitness Tracker",
      description: "A health and fitness application for tracking workouts, setting goals, and monitoring progress with data visualization.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["React", "TypeScript", "Firebase", "Recharts"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here's a selection of projects I've worked on, showcasing my skills and experience
            in building modern web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-full bg-card rounded-xl overflow-hidden neo-morphism transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="py-1 px-2 text-xs font-medium bg-black/40 text-white rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="py-1 px-2 text-xs font-medium bg-black/40 text-white rounded-full backdrop-blur-sm">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-primary text-sm font-medium flex items-center hover:text-primary/80 transition-colors"
                    >
                      View Details
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                    
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View Github repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14 reveal">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
