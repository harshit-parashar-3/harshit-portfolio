
import React from 'react';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="aspect-square w-full max-w-md mx-auto lg:ml-0 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Alex Johnson" 
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="reveal" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">About Me</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              I'm a passionate frontend developer with 5 years of experience creating beautiful and functional web applications. Specializing in React and modern JavaScript, I combine technical expertise with an eye for design to build exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground text-lg mb-6">
              My journey in web development began when I discovered my passion for creating intuitive interfaces that solve real-world problems. I've since worked with startups and established companies to bring their visions to life.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Full Resume 
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
