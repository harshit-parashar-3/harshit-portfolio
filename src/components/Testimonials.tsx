
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  content, 
  author, 
  role, 
  company, 
  rating, 
  image 
}) => (
  <Card className="h-full border border-primary/10 bg-card/50 backdrop-blur">
    <CardContent className="p-8 h-full flex flex-col">
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"} 
          />
        ))}
      </div>
      
      <div className="relative mb-6 flex-grow">
        <QuoteIcon className="absolute -top-2 -left-2 text-primary/20" size={24} />
        <p className="text-muted-foreground relative z-10 italic">{content}</p>
      </div>
      
      <div className="flex items-center mt-auto">
        {image ? (
          <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role} at {company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Working with this developer was a game-changer for our project. Their attention to detail and expertise in React transformed our application beyond expectations.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechInnovate",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "I've worked with many developers over the years, but few have matched the level of expertise and professionalism that I experienced on our recent collaboration.",
      author: "Michael Chen",
      role: "CTO",
      company: "StartupVision",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "Their understanding of modern UI principles and ability to implement complex features with clean, maintainable code truly sets them apart.",
      author: "Emily Rodriguez",
      role: "Design Lead",
      company: "CreativeDigital",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "Our web application's performance improved significantly after their optimization work. Users have noticed the difference, and our metrics show it too.",
      author: "David Kim",
      role: "Technical Director",
      company: "WebSolutions",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "Not only did they deliver high-quality code, but they were also excellent at communicating complex technical concepts to our non-technical stakeholders.",
      author: "Lisa Thompson",
      role: "Project Manager",
      company: "EnterpriseGrowth",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/0 to-background/10 pointer-events-none"></div>
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Client Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me
          </p>
        </div>
        
        <div className="reveal" style={{animationDelay: '0.2s'}}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className="h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-4" />
              <CarouselNext className="relative static right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
