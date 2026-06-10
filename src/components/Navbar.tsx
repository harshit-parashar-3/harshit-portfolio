import React, { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll behaviour: glass background, hide-on-scroll-down, progress bar
  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > lastY && !mobileOpen);
      lastY = y;

      if (progressRef.current) {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (y / max) * 100 : 0;
        progressRef.current.style.width = `${pct}%`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [mobileOpen]);

  // Section tracking (scrollspy)
  useEffect(() => {
    const sections = NAV_ITEMS.map((i) =>
      document.querySelector(i.href),
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      // A narrow horizontal band around the upper-middle of the viewport:
      // whichever section crosses it becomes "active".
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));

    // Reset to top state when scrolled above the first section
    const onTop = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  return (
    <header
      className={`anim-nav-drop fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || mobileOpen
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Reading progress bar */}
      <div
        ref={progressRef}
        className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400"
        aria-hidden="true"
      />

      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" aria-label="Back to top">
          <Logo size={34} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${active === item.href ? "active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/utils/Resume.pdf"
            download="Harshit_Parashar_Resume.pdf"
            className="btn-ghost !px-5 !py-2.5 text-xs"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "max-h-[30rem] border-b border-white/[0.06] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-4 py-3 font-display text-base font-medium transition-colors hover:bg-white/5 hover:text-foreground ${
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2 px-4 pb-2">
            <a
              href="/utils/Resume.pdf"
              download="Harshit_Parashar_Resume.pdf"
              className="btn-primary w-full !py-3 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              <Download size={14} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
