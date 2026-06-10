# Harshit Parashar — Portfolio

Personal portfolio of Harshit Parashar, Frontend Engineer & freelance web developer.

Dark, premium single-page design with smooth scroll-reveal animations, section tracking (scrollspy + reading progress bar), animated stat counters, a skills marquee and a freelance-focused services section.

## Tech Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** with a custom dark design system
- **Native animations** — IntersectionObserver scroll reveals + CSS keyframes (no animation library needed)
- shadcn/ui component primitives

## Getting Started

```sh
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Structure

```
src/
├── components/      # Hero, About, Services, Projects, Experience, Skills, Contact, Navbar, Footer, Logo
├── lib/animations.ts  # useReveal, useCountUp, useMagnetic hooks
├── pages/           # Index (single page), NotFound
└── index.css        # design tokens + animation utilities
public/
├── favicon.svg      # HP monogram logo
└── utils/Resume.pdf # downloadable resume
```

## Animation System

- `data-reveal` attributes (`up | left | right | zoom`) + `useReveal()` hook for scroll-triggered reveals, with optional `data-reveal-delay` stagger.
- All animations respect `prefers-reduced-motion`.
- Content is never hidden if JavaScript fails (reveal styles are gated behind a `.js` class on `<html>`).
