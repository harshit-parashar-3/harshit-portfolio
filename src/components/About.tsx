import React from "react";
import { MapPin, GraduationCap, Award } from "lucide-react";
import { useReveal, useCountUp } from "@/lib/animations";

const StatCard: React.FC<{
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}> = ({ value, suffix = "+", label, delay = 0 }) => {
  const { ref, value: count } = useCountUp(value);
  return (
    <div
      className="glass-card glass-card-hover spot-card p-6 text-center"
      data-reveal="zoom"
      data-reveal-delay={delay}
    >
      <span
        ref={ref}
        className="font-display text-4xl font-bold text-gradient md:text-5xl"
      >
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

/** Syntax-highlighted "editor" card — a developer-brand visual signature. */
const CodeCard: React.FC = () => (
  <div
    className="glass-card spot-card overflow-hidden font-mono text-[13px] leading-relaxed"
    data-reveal="left"
  >
    <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-3.5">
      <span className="h-3 w-3 rounded-full bg-rose-400/80" />
      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      <span className="ml-3 text-xs text-muted-foreground">harshit.ts</span>
    </div>
    <pre className="overflow-x-auto p-5">
      <code>
        <span className="text-fuchsia-400">const</span>{" "}
        <span className="text-sky-300">harshit</span>{" "}
        <span className="text-muted-foreground">=</span>{" "}
        <span className="text-muted-foreground">{"{"}</span>
        {"\n"}
        {"  "}
        <span className="text-indigo-300">role</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-emerald-300">"Frontend Engineer"</span>
        <span className="text-muted-foreground">,</span>
        {"\n"}
        {"  "}
        <span className="text-indigo-300">experience</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-emerald-300">"4+ years"</span>
        <span className="text-muted-foreground">,</span>
        {"\n"}
        {"  "}
        <span className="text-indigo-300">stack</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-muted-foreground">[</span>
        <span className="text-emerald-300">"React"</span>
        <span className="text-muted-foreground">,</span>{" "}
        <span className="text-emerald-300">"Next.js"</span>
        <span className="text-muted-foreground">,</span>{" "}
        <span className="text-emerald-300">"TypeScript"</span>
        <span className="text-muted-foreground">]</span>
        <span className="text-muted-foreground">,</span>
        {"\n"}
        {"  "}
        <span className="text-indigo-300">freelance</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-amber-300">true</span>
        <span className="text-muted-foreground">,</span>
        {"\n"}
        {"  "}
        <span className="text-indigo-300">responseTime</span>
        <span className="text-muted-foreground">:</span>{" "}
        <span className="text-emerald-300">"&lt; 24 hours"</span>
        <span className="text-muted-foreground">,</span>
        {"\n"}
        <span className="text-muted-foreground">{"}"};</span>
      </code>
    </pre>
  </div>
);

const About: React.FC = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="about" ref={scope} className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: copy */}
          <div className="relative">
            <span className="ghost-title" aria-hidden="true">
              ABOUT
            </span>
            <span className="section-kicker" data-reveal>
              About Me
            </span>
            <h2 className="section-title mt-4" data-reveal data-reveal-delay="0.1">
              Turning complex problems into{" "}
              <span className="text-gradient">elegant interfaces</span>
            </h2>

            <div
              className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg"
              data-reveal
              data-reveal-delay="0.2"
            >
              <p>
                I'm a Frontend Engineer based in Indore, India, with 4+ years
                of experience building enterprise SaaS platforms and bespoke
                websites for clients around the world.
              </p>
              <p>
                From AI-powered analytics dashboards to UK pension-management
                systems, I specialise in reusable component architectures,
                performance optimisation and seamless API integrations — the
                stuff that makes products feel fast, reliable and effortless.
              </p>
              <p>
                Alongside my full-time engineering work, I take on freelance
                projects: corporate websites, e-commerce platforms and product
                UIs delivered end-to-end, from first wireframe to deployment.
              </p>
            </div>

            <div
              className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
              data-reveal
              data-reveal-delay="0.3"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-primary" />
                Indore, India · Remote-friendly
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={15} className="text-primary" />
                B.Tech CS, Jaypee University
              </span>
              <span className="inline-flex items-center gap-2">
                <Award size={15} className="text-primary" />
                Exceptional Talent Award '24
              </span>
            </div>
          </div>

          {/* Right: code card + stats */}
          <div className="space-y-6">
            <CodeCard />
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value={4} label="Years of Experience" delay={0} />
              <StatCard value={8} label="Products Shipped" delay={0.1} />
              <StatCard value={4} label="Industries Served" delay={0.2} />
              <StatCard value={3} label="Happy Freelance Clients" delay={0.3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
