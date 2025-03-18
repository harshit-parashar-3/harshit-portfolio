import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CodeIcon,
  DatabaseIcon,
  PaintbrushIcon,
  BrainCircuitIcon,
  LayoutDashboardIcon,
  ZapIcon,
} from "lucide-react";

const ExpertiseCard = ({
  icon: Icon,
  title,
  description1,
  description2,
  description3,
}: {
  icon: React.ElementType;
  title: string;
  description1: string;
  description2: string;
  description3: string;
}) => (
  <Card className="border border-primary/10 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{description1}</p>
        <p className="text-muted-foreground">{description2}</p>
        <p className="text-muted-foreground">{description3}</p>
      </div>
    </CardContent>
  </Card>
);

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      icon: CodeIcon,
      title: "Frontend Development",
      description1:
        "Expert in React, Next.js, TypeScript, and modern CSS frameworks like Tailwind CSS.",
      description2:
        "Creating modular, reusable components for better code maintainability.",
      description3:
        "Optimizing UI performance for seamless navigation and rendering.",
    },
    {
      icon: DatabaseIcon,
      title: "API & Backend Integration",
      description1:
        "Experience in fetching and managing data from RESTful and GraphQL APIs.",
      description2:
        "Implementing server-side rendering (SSR) and static site generation (SSG) with Next.js.",
      description3: "Building secure authentication and authorization systems.",
    },
    {
      icon: LayoutDashboardIcon,
      title: "Responsive UI/UX Design",
      description1:
        "Developing mobile-first, highly responsive user interfaces.",
      description2:
        "Ensuring accessibility (WCAG) compliance for better usability.",
      description3:
        "Designing smooth animations and transitions using Framer Motion.",
    },
    {
      icon: BrainCircuitIcon,
      title: "State Management & Performance Optimization",
      description1: "Proficient in Redux, React Query, and Context API.",
      description2:
        "Implementing lazy loading, code-splitting, and caching techniques.",
    },
    {
      icon: PaintbrushIcon,
      title: "Design Systems & Component Libraries",
      description1:
        "Building scalable design systems with reusable UI components.",
      description2:
        "Ensuring consistency in themes, typography, and branding across applications.",
    },
    {
      icon: ZapIcon,
      title: "Performance & Optimization",
      description1: "Reducing bundle size and improving load times.",
      description2: "Implementing progressive web app (PWA) techniques.",
      description3:
        "Enhancing SEO performance with proper semantic HTML and metadata.",
    },
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              My Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I specialize in various aspects of frontend development and web
            application architecture, making sure that every project I work on
            is efficient, scalable, and visually appealing.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal"
          style={{ animationDelay: "0.1s" }}
        >
          {expertiseAreas.map((expertise, index) => (
            <div
              key={index}
              className="reveal"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ExpertiseCard
                icon={expertise.icon}
                title={expertise.title}
                description1={expertise.description1}
                description2={expertise.description2}
                description3={expertise?.description3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
