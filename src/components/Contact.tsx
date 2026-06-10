import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  CalendarCheck,
} from "lucide-react";
import { useReveal, useMagnetic } from "@/lib/animations";

const Contact: React.FC = () => {
  const scope = useReveal<HTMLElement>();
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.2);

  return (
    <section id="contact" ref={scope} className="relative py-28 md:py-40">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[45vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/[0.08] blur-[140px]" />

      <div className="container relative mx-auto px-6 text-center">
        {/* Spinning circular badge */}
        <div
          className="relative mx-auto mb-10 h-28 w-28 md:h-32 md:w-32"
          data-reveal="zoom"
        >
          <svg
            viewBox="0 0 100 100"
            className="spin-slow h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <path
                id="badge-circle"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="fill-muted-foreground font-mono text-[8.2px] uppercase tracking-[2.5px]">
              <textPath href="#badge-circle">
                Let's work together • Open for freelance •
              </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center">
            <ArrowUpRight size={26} className="text-primary" />
          </span>
        </div>

        <span className="section-kicker justify-center" data-reveal>
          Contact
        </span>

        <h2
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          data-reveal
          data-reveal-delay="0.1"
        >
          Have a project in mind?{" "}
          <span className="text-gradient text-gradient-animate">
            Let's build it together.
          </span>
        </h2>

        <p
          className="mx-auto mt-6 max-w-xl text-muted-foreground md:text-lg"
          data-reveal
          data-reveal-delay="0.2"
        >
          I'm currently taking on freelance projects — websites, web apps and
          everything in between. Tell me what you're building and I'll get
          back to you within 24 hours.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          data-reveal
          data-reveal-delay="0.3"
        >
          <a
            ref={magneticBtn}
            href="mailto:parasharharshit99@gmail.com?subject=Project%20Inquiry"
            className="btn-primary !px-9 !py-4 !text-base"
          >
            <Mail size={18} />
            parasharharshit99@gmail.com
          </a>
          <a
            href="https://wa.me/918349234481?text=Hi%20Harshit%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-9 !py-4 !text-base"
          >
            <CalendarCheck size={18} />
            Chat on WhatsApp
          </a>
        </div>

        <div
          className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground"
          data-reveal
          data-reveal-delay="0.4"
        >
          <a
            href="tel:+918349234481"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone size={15} className="text-primary" />
            +91 83492 34481
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-primary" />
            Indore, India · Open to remote
          </span>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-6"
          data-reveal
          data-reveal-delay="0.5"
        >
          <a
            href="https://github.com/harshit-parashar-3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-card glass-card-hover inline-flex h-12 w-12 items-center justify-center !rounded-full text-muted-foreground hover:text-foreground"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/harshit-parashar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass-card glass-card-hover inline-flex h-12 w-12 items-center justify-center !rounded-full text-muted-foreground hover:text-foreground"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.harshitparashar.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="glass-card glass-card-hover inline-flex h-12 w-12 items-center justify-center !rounded-full text-muted-foreground hover:text-foreground"
          >
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
