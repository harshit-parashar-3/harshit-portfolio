import React from "react";
import {
  AppWindow,
  Globe,
  Layers,
  Gauge,
  ShoppingCart,
  Plug,
} from "lucide-react";
import { useReveal } from "@/lib/animations";

const SERVICES = [
  {
    icon: Globe,
    title: "Corporate & Marketing Websites",
    description:
      "Fast, SEO-friendly websites that make your business look as good as it is. Designed, built and deployed end-to-end with React or Next.js.",
  },
  {
    icon: AppWindow,
    title: "Web App Development",
    description:
      "Full product UIs — dashboards, portals, SaaS platforms — built with scalable architecture, clean state management and pixel-perfect attention to detail.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description:
      "Store fronts, inventory management and B2B ordering flows with smooth checkout experiences that convert visitors into customers.",
  },
  {
    icon: Layers,
    title: "Design Systems & UI Libraries",
    description:
      "Reusable component libraries that keep your product consistent and let your team ship new features dramatically faster.",
  },
  {
    icon: Gauge,
    title: "Performance Optimisation",
    description:
      "Audits and fixes for slow React apps — lazy loading, memoisation, bundle trimming — so your users stop waiting and start engaging.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Secure integration of REST APIs, payment systems, Twilio and third-party services, with robust loading, caching and error handling.",
  },
];

const Services: React.FC = () => {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="services" ref={scope} className="relative py-28 md:py-36">
      {/* soft backdrop accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-indigo-600/[0.07] blur-[120px]" />

      <div className="container relative mx-auto px-6">
        <div className="relative mx-auto mb-16 max-w-2xl text-center">
          <span className="ghost-title centered" aria-hidden="true">
            SERVICES
          </span>
          <span className="section-kicker justify-center" data-reveal>
            What I Do
          </span>
          <h2 className="section-title mt-4" data-reveal data-reveal-delay="0.1">
            Services that help your{" "}
            <span className="text-gradient">business grow</span>
          </h2>
          <p
            className="mt-5 text-muted-foreground md:text-lg"
            data-reveal
            data-reveal-delay="0.2"
          >
            Whether you need a brand-new website, a complex product UI, or a
            rescue mission for an underperforming app — I've got you covered.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="glass-card glass-card-hover spot-card group p-7"
              data-reveal
              data-reveal-delay={(i % 3) * 0.12}
            >
              <div className="mb-5 inline-flex rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                <service.icon size={22} />
              </div>
              <h3 className="mb-2.5 font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
