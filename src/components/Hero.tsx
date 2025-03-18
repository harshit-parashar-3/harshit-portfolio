
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!textRef.current) return;
      
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate percentage position
      const xPos = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply subtle 3D tilt effect
      const transformValue = `rotateX(${yPos * -3}deg) rotateY(${xPos * 3}deg)`;
      textRef.current.style.transform = transformValue;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
      
      <div className="container px-6 mx-auto text-center relative z-10">
        <div 
          className="mb-4 inline-block"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full tracking-wide">
            React Developer
          </span>
        </div>
        
        <div 
          ref={textRef}
          className="transition-transform duration-200 ease-out mx-auto max-w-4xl mb-8 lg:mb-12"
          style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <div className="mb-2 inline-block text-reveal-container">
              <span className="inline-block">Hello, I'm Alex Johnson</span>
            </div>
            <div className="mt-2 text-reveal-container" style={{animationDelay: '0.2s'}}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 inline-block">
                Frontend Developer
              </span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in" style={{animationDelay: '0.8s'}}>
            Crafting elegant user experiences with modern web technologies.
            I build responsive, accessible, and performant web applications.
          </p>
        </div>
        
        <div className="mt-8 md:mt-12 animate-fade-in" style={{animationDelay: '1.2s'}}>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:text-lg neo-morphism transition-all duration-300 hover:scale-105"
          >
            Explore My Work
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
