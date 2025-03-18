
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, DatabaseIcon, PaintbrushIcon, BrainCircuitIcon, LayoutDashboardIcon, ZapIcon } from 'lucide-react';

const ExpertiseCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <Card className="border border-primary/10 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: CodeIcon,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.",
    },
    {
      icon: DatabaseIcon,
      title: "Backend Integration",
      description: "Proficient in connecting frontends to REST APIs, GraphQL, and serverless functions.",
    },
    {
      icon: LayoutDashboardIcon,
      title: "Responsive UI/UX",
      description: "Creating beautiful, responsive interfaces that work seamlessly across all devices.",
    },
    {
      icon: BrainCircuitIcon,
      title: "State Management",
      description: "Advanced knowledge of state management with Redux, Zustand, and React Context API.",
    },
    {
      icon: PaintbrushIcon,
      title: "Design Systems",
      description: "Building scalable design systems with reusable components and consistent aesthetics.",
    },
    {
      icon: ZapIcon,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
    }
  ];

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 to-background pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">My Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized skills and knowledge areas I bring to every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal" style={{animationDelay: '0.1s'}}>
          {expertiseAreas.map((expertise, index) => (
            <div key={index} className="reveal" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
              <ExpertiseCard 
                icon={expertise.icon} 
                title={expertise.title} 
                description={expertise.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
