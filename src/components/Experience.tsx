import React from "react";
import { Briefcase, GraduationCap, Rocket, BadgeCheck } from "lucide-react";
import { useReveal } from "@/lib/animations";

const TIMELINE = [
  {
    icon: Briefcase,
    period: "Apr 2022 — Present",
    title: "Software Analyst · Frontend Engineer",
    place: "Clecotech International Pvt. Ltd. · Indore, India",
    points: [
      "Built and maintained frontend applications for multiple enterprise SaaS platforms using React, TypeScript, Redux and React Query.",
      "Designed reusable component architectures, improving delivery speed across projects.",
      "Developed dynamic dashboards and data-driven interfaces integrated with REST APIs.",
      "Optimised performance with lazy loading, memoisation and efficient state management.",
      "Mentored junior developers on debugging, architecture and code quality.",
    ],
  },
  {
    icon: Rocket,
    period: "Ongoing",
    title: "Freelance Frontend Developer",
    place: "Remote · Worldwide",
    points: [
      "Delivered corporate websites, e-commerce platforms and product UIs end-to-end for clients in healthcare, industrial engineering and retail.",
      "Owned the full project lifecycle: scoping, design collaboration, development, deployment and post-launch support.",
    ],
  },
  {
    icon: GraduationCap,
    period: "Graduated",
    title: "B.Tech — Computer Science",
    place: "Jaypee University of Engineering and Technology · Guna, India",
    points: [
      "Letter of Appreciation — Jaypee Youth Club (2021).",
    ],
  },
];

const CERTS = [
  "Front End Development with React — AchieverIT",
  "Certified Network Security Specialist — ICSI",
  "Multi Cloud Network Associate — Aviatrix",
  "Cisco Certified Network Associate (CCNA)",
];

const Experience: React.FC = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="experience" ref={scope} className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[35vmax] w-[35vmax] rounded-full bg-fuchsia-600/[0.06] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="relative mb-16 max-w-xl">
          <span className="ghost-title" aria-hidden="true">
            JOURNEY
          </span>
          <span className="section-kicker" data-reveal>
            Journey
          </span>
          <h2 className="section-title mt-4" data-reveal data-reveal-delay="0.1">
            Experience & <span className="text-gradient">education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400/50 via-fuchsia-400/30 to-transparent md:left-[23px]" />

          <ol className="space-y-12">
            {TIMELINE.map((item, i) => (
              <li
                key={item.title}
                className="relative pl-16 md:pl-20"
                data-reveal
                data-reveal-delay={i * 0.1}
              >
                {/* node */}
                <span className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-secondary text-primary glow-ring md:h-12 md:w-12">
                  <item.icon size={18} />
                </span>

                <p className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
                  {item.period}
                </p>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.place}
                </p>
                <ul className="space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3
            className="mb-6 font-display text-lg font-semibold text-muted-foreground"
            data-reveal
          >
            Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {CERTS.map((cert, i) => (
              <div
                key={cert}
                className="glass-card flex items-center gap-3 px-5 py-4 text-sm text-muted-foreground"
                data-reveal
                data-reveal-delay={i * 0.08}
              >
                <BadgeCheck size={18} className="shrink-0 text-primary" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
