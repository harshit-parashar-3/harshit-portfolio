import React, { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Layers,
} from "lucide-react";
import { useReveal } from "@/lib/animations";
import { PROJECTS, getProject } from "@/data/projects";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import CursorFX from "@/components/CursorFX";

const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;
  const scope = useReveal<HTMLElement>([slug]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study · Harshit Parashar`;
    }
    return () => {
      document.title = "Harshit Parashar — Frontend Engineer & Freelance Developer";
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorFX />

      {/* Minimal top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">All projects</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <Link to="/" aria-label="Home">
            <Logo />
          </Link>
          <a href="/#contact" className="btn-primary !px-5 !py-2.5 !text-xs">
            Start a Project
          </a>
        </div>
      </header>

      <main ref={scope} className="relative pt-16">
        {/* ===== Hero banner ===== */}
        <section className="relative overflow-hidden">
          <div className="aurora pointer-events-none absolute inset-0 opacity-60" />
          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-[35vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-gradient-to-br ${project.gradient} opacity-[0.12] blur-[120px]`}
          />

          <div className="container relative mx-auto px-6 pb-16 pt-20 md:pb-24 md:pt-28">
            <div className="mx-auto max-w-4xl">
              <div
                className="mb-6 flex flex-wrap items-center gap-3"
                data-reveal
              >
                <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
                  {project.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {project.industry}
                </span>
              </div>

              <h1
                className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
                data-reveal
                data-reveal-delay="0.1"
              >
                {project.title}
              </h1>

              <p
                className="mt-4 font-mono text-sm uppercase tracking-widest text-gradient text-gradient-animate md:text-base"
                data-reveal
                data-reveal-delay="0.2"
              >
                {project.tagline}
              </p>

              <p
                className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
                data-reveal
                data-reveal-delay="0.3"
              >
                {project.description}
              </p>

              {/* Meta strip */}
              <div
                className="mt-10 grid gap-4 sm:grid-cols-3"
                data-reveal
                data-reveal-delay="0.4"
              >
                <div className="glass-card px-5 py-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Role
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Briefcase size={14} className="text-primary" />
                    {project.role}
                  </p>
                </div>
                <div className="glass-card px-5 py-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Industry
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Layers size={14} className="text-primary" />
                    {project.industry}
                  </p>
                </div>
                <div className="glass-card px-5 py-4">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Type
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles size={14} className="text-primary" />
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Cover visual */}
            <div
              className="relative mx-auto mt-14 max-w-5xl"
              data-reveal="zoom"
              data-reveal-delay="0.2"
            >
              <div
                className={`shine glass-card relative overflow-hidden !rounded-3xl bg-gradient-to-br ${project.gradient}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    className="w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-64 items-center justify-center md:h-96">
                    <span className="font-display text-[10rem] font-bold text-white/[0.08] md:text-[16rem]">
                      {project.initials}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Body ===== */}
        <section className="container mx-auto px-6 pb-24 md:pb-32">
          <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[1fr_320px]">
            {/* Main column */}
            <div className="space-y-16">
              {/* Overview */}
              <div data-reveal>
                <span className="section-kicker">Overview</span>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                  About the <span className="text-gradient">project</span>
                </h2>
                <div className="mt-6 space-y-4">
                  {project.overview.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contributions */}
              <div data-reveal>
                <span className="section-kicker">My Work</span>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                  What I <span className="text-gradient">built</span>
                </h2>
                <ul className="mt-6 space-y-4">
                  {project.contributions.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex gap-3 leading-relaxed text-muted-foreground"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div data-reveal>
                <span className="section-kicker">Impact</span>
                <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                  Results & <span className="text-gradient">outcomes</span>
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <div
                      key={result.slice(0, 40)}
                      className="glass-card glass-card-hover spot-card p-5 text-sm leading-relaxed text-muted-foreground"
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:pt-2">
              <div
                className="glass-card sticky top-24 p-6"
                data-reveal="left"
              >
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Tech Stack
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Want something similar for your business?
                </p>
                <a
                  href="/#contact"
                  className="btn-primary mt-4 w-full justify-center !py-3 !text-sm"
                >
                  Let's talk
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* ===== Prev / Next navigation ===== */}
        <section className="border-t border-white/5">
          <div className="container mx-auto grid gap-px px-0 md:grid-cols-2">
            <Link
              to={`/project/${prev.slug}`}
              className="group flex flex-col gap-2 px-6 py-12 transition-colors hover:bg-white/[0.02] md:px-12"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Previous project
              </span>
              <span className="font-display text-xl font-semibold transition-colors group-hover:text-primary md:text-2xl">
                {prev.title}
              </span>
            </Link>
            <Link
              to={`/project/${next.slug}`}
              className="group flex flex-col items-start gap-2 border-t border-white/5 px-6 py-12 transition-colors hover:bg-white/[0.02] md:items-end md:border-l md:border-t-0 md:px-12"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Next project
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <span className="font-display text-xl font-semibold transition-colors group-hover:text-primary md:text-2xl">
                {next.title}
              </span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
