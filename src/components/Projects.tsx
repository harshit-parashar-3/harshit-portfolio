import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal, useTilt } from "@/lib/animations";
import { PROJECTS, type Project } from "@/data/projects";

type Filter = "All" | "Product Work" | "Freelance";

const FILTERS: Filter[] = ["All", "Product Work", "Freelance"];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <Link
    to={`/project/${project.slug}`}
    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-2xl"
    aria-label={`View case study: ${project.title}`}
  >
    <article
      className="glass-card project-card spot-card tilt-card group flex h-full flex-col overflow-hidden"
      data-reveal
      data-reveal-delay={(index % 3) * 0.12}
    >
      {/* Cover */}
      <div
        className={`shine relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-white/[0.08] transition-transform duration-700 ease-out group-hover:scale-110">
            {project.initials}
          </span>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/80">
          {project.tagline}
        </p>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View case study
          <ArrowUpRight size={13} />
        </span>
      </div>
    </article>
  </Link>
);

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<Filter>("All");
  // Re-observe cards whenever the filter changes (new cards mount)
  const scope = useReveal<HTMLElement>([filter]);
  useTilt(scope, ".tilt-card", 5);

  const visible = PROJECTS.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section id="projects" ref={scope} className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="relative max-w-xl">
            <span className="ghost-title" aria-hidden="true">
              WORK
            </span>
            <span className="section-kicker" data-reveal>
              Selected Work
            </span>
            <h2
              className="section-title mt-4"
              data-reveal
              data-reveal-delay="0.1"
            >
              Projects I'm <span className="text-gradient">proud of</span>
            </h2>
          </div>

          {/* Filter */}
          <div className="flex gap-2" data-reveal data-reveal-delay="0.2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === f
                    ? "border-primary/50 bg-primary/15 text-foreground"
                    : "border-white/10 bg-transparent text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
