import React, { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import {
  useMagnetic,
  useTypewriter,
  prefersReducedMotion,
} from "@/lib/animations";

const ROLES = [
  "Frontend Engineer",
  "Freelance Developer",
  "React & Next.js Expert",
  "UI Craftsman",
];

const Hero: React.FC = () => {
  const orbARef = useRef<HTMLDivElement>(null);
  const orbBRef = useRef<HTMLDivElement>(null);
  const magneticCta = useMagnetic<HTMLAnchorElement>(0.2);
  const role = useTypewriter(ROLES);

  // Gentle mouse parallax on the background orbs
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        if (orbARef.current) {
          orbARef.current.style.transform = `translate(${nx * 28}px, ${ny * 28}px)`;
        }
        if (orbBRef.current) {
          orbBRef.current.style.transform = `translate(${nx * -36}px, ${ny * -36}px)`;
        }
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated aurora backdrop */}
      <div className="aurora" aria-hidden="true" />

      {/* Ambient gradient orbs (outer = mouse parallax, inner = idle float) */}
      <div
        ref={orbARef}
        className="pointer-events-none absolute -top-[15%] -left-[10%] transition-transform duration-700 ease-out"
      >
        <div className="orb-float-a h-[55vmax] w-[55vmax] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>
      <div
        ref={orbBRef}
        className="pointer-events-none absolute -bottom-[20%] -right-[10%] transition-transform duration-700 ease-out"
      >
        <div className="orb-float-b h-[50vmax] w-[50vmax] rounded-full bg-fuchsia-600/15 blur-[120px]" />
      </div>

      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div
          className="anim-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            AVAILABLE FOR FREELANCE PROJECTS
          </span>
        </div>

        <h1 className="mx-auto mb-8 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="line-mask">
            <span style={{ animationDelay: "0.35s" }}>Harshit Parashar</span>
          </span>
          <span className="line-mask">
            <span style={{ animationDelay: "0.5s" }}>
              <span className="text-gradient text-gradient-animate">
                {role || "\u00A0"}
              </span>
              <span className="type-caret" aria-hidden="true" />
            </span>
          </span>
        </h1>

        <p
          className="anim-fade-up mx-auto mb-10 max-w-2xl text-balance text-base text-muted-foreground md:text-xl"
          style={{ animationDelay: "0.75s" }}
        >
          I help startups and businesses ship polished, high-performance web
          products with <span className="text-foreground">React</span>,{" "}
          <span className="text-foreground">Next.js</span> &{" "}
          <span className="text-foreground">TypeScript</span> — 4+ years of
          experience across AI, fintech, telecom and HR platforms.
        </p>

        <div
          className="anim-fade-up flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.95s" }}
        >
          <a ref={magneticCta} href="#contact" className="btn-primary">
            Start a Project
            <ArrowUpRight size={16} />
          </a>
          <a href="#projects" className="btn-ghost">
            View My Work
            <ArrowDown size={16} />
          </a>
        </div>

        <div
          className="anim-fade-up mt-12 flex items-center justify-center gap-5"
          style={{ animationDelay: "1.15s" }}
        >
          <a
            href="https://github.com/harshit-parashar-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/harshit-parashar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <span className="h-4 w-px bg-border" />
          <a
            href="mailto:parasharharshit99@gmail.com"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            parasharharshit99@gmail.com
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="anim-fade-up absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="scroll-mouse" />
      </a>
    </section>
  );
};

export default Hero;
