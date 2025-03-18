
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ChevronLeft, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  technologies?: string[];
  date?: string;
  category?: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      const projectData: Project = {
        id: id || "",
        title: id === "ecommerce-platform" ? "E-Commerce Platform" : 
               id === "task-management" ? "Task Management App" : 
               id === "weather-dashboard" ? "Weather Dashboard" : 
               id === "fitness-tracker" ? "Fitness Tracker" : "Project Name",
        description: "A comprehensive project description.",
        longDescription: "This project was developed to solve various challenges in the e-commerce space. It features a fully responsive design, intuitive user interface, and secure payment processing. I was responsible for all aspects of the frontend development, from initial design to final implementation, focusing on creating a seamless shopping experience that drives conversions and enhances user engagement.\n\nThe application uses React for the frontend, with Redux managing global state. The backend is built on Node.js and Express, with MongoDB as the database. Authentication is handled through JWT tokens, ensuring secure user access.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        tags: ["React", "Redux", "Node.js", "MongoDB", "TypeScript", "CSS Modules"],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
        features: [
          "User authentication and profile management",
          "Product catalog with search and filtering",
          "Shopping cart and checkout process",
          "Payment processing with Stripe integration",
          "Order tracking and history",
          "Admin dashboard for product management"
        ],
        technologies: [
          "React 18",
          "Redux Toolkit",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Stripe API",
          "CSS Modules",
          "Jest & React Testing Library"
        ],
        date: "June 2023",
        category: "Web Application"
      };
      
      setProject(projectData);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="container px-6 mx-auto">
          {/* Back button */}
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ChevronLeft size={18} className="mr-1" />
            Back to Projects
          </Link>
          
          {/* Hero section */}
          <div className="relative rounded-2xl overflow-hidden h-96 mb-12 reveal">
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <div>
                {project.category && (
                  <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/80 text-white rounded-full mb-4">
                    {project.category}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
                {project.date && (
                  <p className="text-white/80 text-sm">{project.date}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 reveal" style={{animationDelay: '0.2s'}}>
              <div className="glass-morphism rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {project.longDescription?.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {project.features && (
                <div className="glass-morphism rounded-xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary mr-3"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 reveal" style={{animationDelay: '0.4s'}}>
              {/* Project links */}
              <div className="glass-morphism rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Project Links</h3>
                <div className="space-y-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium">Live Demo</span>
                      <ExternalLink size={18} />
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <span className="font-medium">GitHub Repository</span>
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Technologies */}
              {project.technologies && (
                <div className="glass-morphism rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-block py-1 px-3 text-sm font-medium bg-secondary/70 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Tags */}
              {project.tags && (
                <div className="glass-morphism rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block py-1 px-3 text-sm font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
