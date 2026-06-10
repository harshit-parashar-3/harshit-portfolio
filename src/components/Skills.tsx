import React from "react";
import { Sparkles } from "lucide-react";
import { useReveal } from "@/lib/animations";

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const ico = (slug: string, variant = "original") =>
  `${DEVICON}/${slug}/${slug}-${variant}.svg`;

interface Tech {
  name: string;
  icon?: string;
  /** white-out dark logos (Next.js, Express, GitHub) for the dark theme */
  invert?: boolean;
}

/* ---------- Marquee rows ---------- */
const ROW_A: Tech[] = [
  { name: "React.js", icon: ico("react") },
  { name: "Next.js", icon: ico("nextjs"), invert: true },
  { name: "TypeScript", icon: ico("typescript") },
  { name: "JavaScript (ES6+)", icon: ico("javascript") },
  { name: "HTML5", icon: ico("html5") },
  { name: "CSS3", icon: ico("css3") },
  { name: "Redux Toolkit", icon: ico("redux") },
  { name: "React Query" },
  { name: "Material UI", icon: ico("materialui") },
];

const ROW_B: Tech[] = [
  { name: "Node.js", icon: ico("nodejs") },
  { name: "Express", icon: ico("express"), invert: true },
  { name: "SQL", icon: ico("mysql") },
  { name: "MongoDB", icon: ico("mongodb") },
  { name: "REST APIs" },
  { name: "Git / GitHub", icon: ico("git") },
  { name: "Jira", icon: ico("jira") },
  { name: "Bootstrap", icon: ico("bootstrap") },
  { name: "Twilio" },
];

/* ---------- Core stack tiles ---------- */
interface CoreTech extends Tech {
  level: string;
  width: number; // proficiency bar %
}

const CORE_STACK: CoreTech[] = [
  { name: "React.js", icon: ico("react"), level: "Expert · 4+ yrs", width: 95 },
  { name: "Next.js", icon: ico("nextjs"), invert: true, level: "Advanced", width: 90 },
  { name: "TypeScript", icon: ico("typescript"), level: "Advanced", width: 88 },
  { name: "JavaScript", icon: ico("javascript"), level: "Expert · 4+ yrs", width: 93 },
  { name: "Redux Toolkit", icon: ico("redux"), level: "Advanced", width: 90 },
  { name: "Node.js", icon: ico("nodejs"), level: "Proficient", width: 78 },
  { name: "MongoDB", icon: ico("mongodb"), level: "Proficient", width: 74 },
  { name: "SQL", icon: ico("mysql"), level: "Proficient", width: 72 },
];

/* ---------- Supporting toolbox chips ---------- */
const TOOLBOX = [
  "React Query",
  "REST API Integration",
  "Express",
  "Material UI",
  "Bootstrap",
  "Tailwind CSS",
  "Git & GitHub",
  "Jira",
  "Twilio",
  "Responsive Design",
  "Web Performance",
  "Agile / Scrum",
];

const TechLogo: React.FC<{ tech: Tech; size?: string }> = ({
  tech,
  size = "h-5 w-5",
}) =>
  tech.icon ? (
    <img
      src={tech.icon}
      alt=""
      loading="lazy"
      className={`${size} object-contain ${tech.invert ? "invert" : ""}`}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  ) : (
    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
  );

const MarqueeRow: React.FC<{ items: Tech[]; reverse?: boolean }> = ({
  items,
  reverse,
}) => (
  <div className="marquee-row relative overflow-hidden py-3">
    {/* edge fades */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

    <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
      {[0, 1].map((dup) => (
        <div
          key={dup}
          className="flex shrink-0 items-center"
          aria-hidden={dup === 1}
        >
          {items.map((item) => (
            <span
              key={`${dup}-${item.name}`}
              className="mx-3 inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-display text-sm font-medium text-foreground/80 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <TechLogo tech={item} />
              {item.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={scope} className="relative py-28 md:py-36">
      {/* ambient glow behind the grid */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/[0.06] via-fuchsia-500/[0.05] to-cyan-400/[0.06] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="relative mx-auto mb-14 max-w-2xl text-center">
          <span className="ghost-title centered" aria-hidden="true">
            SKILLS
          </span>
          <span className="section-kicker justify-center" data-reveal>
            Toolbox
          </span>
          <h2 className="section-title mt-4" data-reveal data-reveal-delay="0.1">
            Skills & <span className="text-gradient">technologies</span>
          </h2>
          <p
            className="mt-5 text-muted-foreground"
            data-reveal
            data-reveal-delay="0.2"
          >
            The stack I use daily to ship fast, reliable and pixel-perfect
            products.
          </p>
        </div>
      </div>

      {/* Full-width marquees */}
      <div className="relative mb-16 space-y-2" data-reveal data-reveal-delay="0.2">
        <MarqueeRow items={ROW_A} />
        <MarqueeRow items={ROW_B} reverse />
      </div>

      {/* Core stack tiles */}
      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
          {CORE_STACK.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card spot-card tech-tile p-5 md:p-6"
              data-reveal
              data-reveal-delay={(i % 4) * 0.08}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <TechLogo tech={tech} size="tech-logo h-6 w-6" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display text-sm font-semibold md:text-base">
                {tech.name}
              </h3>
              <p className="mb-4 mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {tech.level}
              </p>

              <div className="skill-bar">
                <span
                  className="skill-bar-fill"
                  style={{ "--w": `${tech.width}%` } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting toolbox */}
        <div
          className="mx-auto mt-12 max-w-3xl text-center"
          data-reveal
          data-reveal-delay="0.15"
        >
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <Sparkles size={13} className="text-primary" />
            Also in my toolbox
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {TOOLBOX.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
