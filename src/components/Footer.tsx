import React from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Logo from "./Logo";

const EXPLORE = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const SERVICES = [
  "Corporate & Marketing Websites",
  "Web App Development",
  "E-commerce Solutions",
  "Design Systems & UI Kits",
  "Performance Optimisation",
  "API Integration",
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/harshit-parashar-3",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshit-parashar",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:parasharharshit99@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918349234481",
  },
];

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[70vmax] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/[0.07] via-fuchsia-500/[0.06] to-cyan-400/[0.07] blur-[100px]" />

      {/* ===== Main columns ===== */}
      <div className="container relative mx-auto grid gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        {/* Brand */}
        <div>
          <a href="/#" aria-label="Back to top" onClick={scrollToTop}>
            <Logo />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Frontend engineer & freelance developer crafting fast, polished web
            products that help businesses win customers.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for projects
          </span>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Explore
          </h3>
          <ul className="space-y-3">
            {EXPLORE.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-3">
            {SERVICES.map((service) => (
              <li key={service}>
                <a
                  href="/#services"
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Get in touch
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="mailto:parasharharshit99@gmail.com"
                className="inline-flex items-center gap-2.5 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Mail size={14} className="text-primary" />
                parasharharshit99@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+918349234481"
                className="inline-flex items-center gap-2.5 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Phone size={14} className="text-primary" />
                +91 83492 34481
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-foreground/70">
              <MapPin size={14} className="text-primary" />
              Indore, India · Remote worldwide
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="glass-card glass-card-hover inline-flex h-10 w-10 items-center justify-center !rounded-full text-muted-foreground transition-colors hover:text-foreground"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Giant outline wordmark ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-4 select-none overflow-hidden md:-mb-8"
      >
        <p className="outline-text whitespace-nowrap text-center font-display text-[18vw] font-bold leading-none tracking-tight opacity-40 md:text-[15vw]">
          HARSHIT
        </p>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="relative border-t border-white/[0.06]">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harshit Parashar. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with <Heart size={12} className="text-rose-400" /> using
            React, TypeScript & Tailwind
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="glass-card glass-card-hover group inline-flex h-11 w-11 items-center justify-center !rounded-full text-muted-foreground hover:text-foreground"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
