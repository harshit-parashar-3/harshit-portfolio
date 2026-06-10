import React from "react";

const TECH = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "REDUX",
  "NODE.JS",
  "REACT QUERY",
  "MATERIAL UI",
  "MONGODB",
  "SQL",
];

/** Full-width strip of large outlined tech names drifting across the screen. */
const TechMarquee: React.FC = () => (
  <div className="marquee-row relative overflow-hidden border-y border-white/[0.05] py-7">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

    <div className="marquee-track" style={{ animationDuration: "50s" }}>
      {[0, 1].map((dup) => (
        <div
          key={dup}
          className="flex shrink-0 items-center"
          aria-hidden={dup === 1}
        >
          {TECH.map((t) => (
            <React.Fragment key={`${dup}-${t}`}>
              <span className="outline-text mx-7 whitespace-nowrap font-display text-4xl font-bold tracking-tight md:text-6xl">
                {t}
              </span>
              <span className="text-gradient font-display text-2xl md:text-3xl">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee;
