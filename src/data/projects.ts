export type ProjectCategory = "Product Work" | "Freelance";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  contributions: string[];
  results: string[];
  tech: string[];
  category: ProjectCategory;
  industry: string;
  role: string;
  image?: string;
  gradient: string;
  initials: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "advisoriai",
    title: "AdvisoriAI",
    tagline: "AI Report Generation Platform",
    description:
      "AI-powered analytics platform that turns complex datasets into automated business reports, with an interactive report-builder UI and dynamic data visualisation.",
    overview: [
      "AdvisoriAI helps consultancies and business advisors transform raw client data into polished, presentation-ready reports in minutes instead of days.",
      "The platform combines AI-driven analysis with a flexible report-builder interface, letting users assemble narrative sections, charts and KPIs into branded documents.",
    ],
    contributions: [
      "Built the interactive report-builder UI with drag-and-drop section composition.",
      "Implemented dynamic data-visualisation components rendering live chart previews from API data.",
      "Integrated AI generation endpoints with optimistic UI states, streaming updates and robust error handling.",
      "Architected reusable form and layout components used across the entire platform.",
    ],
    results: [
      "Report creation flow reduced from a multi-step manual process to a guided builder experience.",
      "Component architecture adopted as the base for subsequent product modules.",
    ],
    tech: ["React", "TypeScript", "React Query", "Material UI", "REST APIs"],
    category: "Product Work",
    industry: "AI / Analytics",
    role: "Frontend Engineer",
    image: "/utils/advisory.png",
    gradient: "from-indigo-500/30 via-violet-500/20 to-transparent",
    initials: "AI",
  },
  {
    slug: "avcwise",
    title: "AVCWISE",
    tagline: "Pension Contribution Management",
    description:
      "Fintech platform managing salary-sacrifice AVC contributions for the UK Local Government Pension Scheme — secure data flows and rich financial visualisations.",
    overview: [
      "AVCWISE enables employees across UK local government organisations to manage Additional Voluntary Contributions to their pensions through salary sacrifice.",
      "The product handles sensitive financial data at scale, demanding precision, accessibility and a trustworthy user experience.",
    ],
    contributions: [
      "Developed contribution management flows with multi-step validation and clear financial summaries.",
      "Built data-visualisation dashboards presenting projections and contribution histories.",
      "Implemented secure, audited form flows aligned with strict compliance requirements.",
      "Optimised page performance with code splitting and memoised selectors.",
    ],
    results: [
      "Smooth onboarding experience for thousands of scheme members.",
      "Reduced UI defects through a shared validated-form component system.",
    ],
    tech: ["React", "Redux", "TypeScript", "REST APIs"],
    category: "Product Work",
    industry: "Fintech / Pensions",
    role: "Frontend Engineer",
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    initials: "AW",
  },
  {
    slug: "vivup",
    title: "VIVUP",
    tagline: "Employee Benefits Platform",
    description:
      "Employee benefits and wellbeing platform with dynamic reporting, user dashboards and tools supporting thousands of employees.",
    overview: [
      "VIVUP provides employee benefits, salary-sacrifice schemes and wellbeing support to large organisations, including NHS trusts.",
      "The platform serves a very large, diverse user base — clarity and accessibility were central to every UI decision.",
    ],
    contributions: [
      "Built employee-facing dashboards and benefits-browsing experiences.",
      "Developed dynamic reporting interfaces for HR administrators.",
      "Collaborated with designers to deliver a consistent, accessible component library.",
      "Integrated multiple internal APIs with caching and graceful degradation.",
    ],
    results: [
      "Supported a platform used by hundreds of thousands of employees.",
      "Faster feature delivery thanks to the shared component architecture.",
    ],
    tech: ["React", "JavaScript", "Material UI", "Redux"],
    category: "Product Work",
    industry: "HR / Wellbeing",
    role: "Frontend Engineer",
    gradient: "from-sky-500/25 via-blue-500/15 to-transparent",
    initials: "VP",
  },
  {
    slug: "voicerules",
    title: "VoiceRules",
    tagline: "Global Cloud Phone System",
    description:
      "Cloud communication platform offering virtual phone numbers, call routing and global connectivity, with intuitive call-flow configuration UIs.",
    overview: [
      "VoiceRules is a cloud telephony platform providing virtual numbers in 100+ countries, intelligent call routing and team calling features.",
      "Complex call-flow logic needed to feel simple — the UI had to make powerful routing rules accessible to non-technical users.",
    ],
    contributions: [
      "Built visual call-flow configuration interfaces with conditional routing rules.",
      "Integrated Twilio-powered features into the frontend with real-time status updates.",
      "Developed number purchasing and management flows.",
      "Improved app responsiveness through lazy loading and bundle optimisation.",
    ],
    results: [
      "Simplified complex telephony setup into an intuitive visual experience.",
      "Reliable real-time UI behaviour across global usage.",
    ],
    tech: ["React", "JavaScript", "Twilio", "REST APIs"],
    category: "Product Work",
    industry: "Telecom / SaaS",
    role: "Frontend Engineer",
    gradient: "from-fuchsia-500/25 via-purple-500/15 to-transparent",
    initials: "VR",
  },
  {
    slug: "invoicean",
    title: "Invoicean",
    tagline: "Invoicing & Billing Platform",
    description:
      "Billing platform helping businesses manage invoices, clients and financial reporting with interactive invoice-builder components.",
    overview: [
      "Invoicean streamlines invoicing for small and medium businesses — creating, sending and tracking invoices with built-in financial reporting.",
      "The core experience is the invoice builder: a live-preview editor where every change renders instantly.",
    ],
    contributions: [
      "Built the interactive invoice-builder with live preview and template switching.",
      "Developed client and payment management interfaces.",
      "Implemented financial reporting views with exportable summaries.",
      "Created a polished onboarding flow improving first-session activation.",
    ],
    results: [
      "Invoice creation experience praised for speed and simplicity.",
      "Reusable document-preview components powering multiple product areas.",
    ],
    tech: ["React", "TypeScript", "Material UI", "REST APIs"],
    category: "Product Work",
    industry: "Fintech / SMB Tools",
    role: "Frontend Engineer",
    gradient: "from-amber-500/25 via-orange-500/15 to-transparent",
    initials: "IN",
  },
  {
    slug: "sanchit-healthcare",
    title: "Sanchit Healthcare",
    tagline: "Corporate Website",
    description:
      "Official marketing website for a healthcare solutions company — professional brand presence, responsive design and optimised site structure.",
    overview: [
      "Sanchit Healthcare LLP needed a credible, professional web presence to support business development and partner outreach.",
      "Delivered end-to-end as a freelance engagement: scoping, design collaboration, development, deployment and handover.",
    ],
    contributions: [
      "Designed and built the full site with Next.js for SEO-friendly server rendering.",
      "Created responsive layouts covering products, certifications and company information.",
      "Optimised images, metadata and site structure for search visibility.",
      "Set up deployment and provided post-launch support.",
    ],
    results: [
      "Professional brand presence live and maintained with minimal ongoing cost.",
      "Fast load times and strong Lighthouse scores across pages.",
    ],
    tech: ["Next.js", "React", "CSS", "SEO"],
    category: "Freelance",
    industry: "Healthcare",
    role: "Freelance Developer (end-to-end)",
    image: "/utils/Sanchit-HealthCare-LLP.png",
    gradient: "from-cyan-500/25 via-sky-500/15 to-transparent",
    initials: "SH",
  },
  {
    slug: "nayrit-technology",
    title: "Nayrit Technology",
    tagline: "Industrial Engineering Website",
    description:
      "Corporate web presence for an industrial engineering company specialising in surface finishing and coating plant solutions.",
    overview: [
      "Nayrit Technology designs and manufactures surface-finishing and coating plants for industrial clients.",
      "The site needed to communicate engineering capability and credibility to procurement teams and industrial buyers.",
    ],
    contributions: [
      "Built a clean, technical corporate site presenting capabilities, plants and projects.",
      "Implemented responsive galleries and specification layouts for machinery.",
      "Structured content for search visibility within the industrial niche.",
      "Handled hosting setup and deployment end-to-end.",
    ],
    results: [
      "Credible digital presence supporting B2B sales conversations.",
      "Simple content structure the client can maintain independently.",
    ],
    tech: ["Next.js", "React", "CSS"],
    category: "Freelance",
    industry: "Industrial Engineering",
    role: "Freelance Developer (end-to-end)",
    gradient: "from-rose-500/25 via-pink-500/15 to-transparent",
    initials: "NT",
  },
  {
    slug: "ms-store-management",
    title: "MS Store Management",
    tagline: "B2B E-commerce Platform",
    description:
      "B2B e-commerce platform for store owners — product browsing, inventory management and order APIs in a scalable frontend architecture.",
    overview: [
      "A B2B ordering platform connecting store owners with suppliers — product catalogues, inventory tracking and order management in one place.",
      "Built as a freelance project with a focus on fast catalogue browsing and friction-free repeat ordering.",
    ],
    contributions: [
      "Developed product browsing with filtering, search and quick-order flows.",
      "Built inventory and order-management dashboards for store owners.",
      "Integrated order APIs with optimistic updates and offline-tolerant patterns.",
      "Designed a scalable frontend architecture ready for future modules.",
    ],
    results: [
      "Streamlined ordering workflow replacing manual phone/WhatsApp orders.",
      "Architecture supports adding suppliers and product lines without rework.",
    ],
    tech: ["React", "JavaScript", "REST APIs"],
    category: "Freelance",
    industry: "Retail / B2B",
    role: "Freelance Developer (end-to-end)",
    gradient: "from-lime-500/25 via-emerald-500/15 to-transparent",
    initials: "MS",
  },
];

export const getProject = (slug: string | undefined) =>
  PROJECTS.find((p) => p.slug === slug);
