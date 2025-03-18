import React from "react";
import ResumeDownload from "./resumeDownload";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none"></div>

      <div className="container px-6 mx-auto relative z-10 text-center">
        <div className="grid grid-cols-1 lg:grid-cols gap-16 items-center justify-center">
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                👋 About Me
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              I'm a passionate frontend developer with 3+ years of experience in
              building high-performance, user-friendly web applications.
              Specializing in React, TypeScript, and modern JavaScript, I focus
              on creating intuitive interfaces that enhance user engagement.
            </p>

            <p className="text-muted-foreground text-lg mb-6">
              My journey in web development began with a deep curiosity for
              problem-solving and designing interactive digital experiences.
              Since then, I've worked with startups and established companies,
              contributing to products that impact thousands of users.
            </p>

            <p className="text-muted-foreground text-lg mb-8">
              When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and playing football to stay
              active and creative.
            </p>

            <ResumeDownload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
