import { useEffect, useRef, useState, type RefObject } from "react";

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scroll-reveal hook (no animation library needed).
 *
 * Attach the returned ref to a section/container. Every descendant with a
 * `data-reveal` attribute is observed and receives the `is-visible` class
 * when it enters the viewport. Directions: data-reveal="up|left|right|zoom".
 * Optional stagger: data-reveal-delay="0.15" (seconds).
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  deps: unknown[] = [],
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (root.hasAttribute("data-reveal")) targets.unshift(root);
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}s`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

/** Animated count-up that starts when the element scrolls into view. */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

/** Typewriter effect cycling through a list of words. */
export function useTypewriter(
  words: string[],
  typeMs = 75,
  deleteMs = 38,
  holdMs = 1900,
) {
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) {
      setText(words[0] ?? "");
      return;
    }

    let wordIndex = 0;
    let len = words[0].length;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        len++;
        setText(word.slice(0, len));
        if (len >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, holdMs);
          return;
        }
      } else {
        len--;
        setText(word.slice(0, len));
        if (len <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = window.setTimeout(tick, deleting ? deleteMs : typeMs);
    };

    timer = window.setTimeout(tick, holdMs);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

/**
 * 3D tilt for cards matching `selector` inside the given scope ref.
 * Uses event delegation so it works with dynamically added cards.
 */
export function useTilt(
  scopeRef: RefObject<HTMLElement | null>,
  selector = ".tilt-card",
  maxDeg = 6,
) {
  useEffect(() => {
    const root = scopeRef.current;
    if (!root || prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.(
        selector,
      ) as HTMLElement | null;
      if (!card || !root.contains(card)) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transition = "transform 0.15s ease-out";
      card.style.transform = `perspective(900px) rotateX(${(-py * maxDeg).toFixed(2)}deg) rotateY(${(px * maxDeg).toFixed(2)}deg) translateY(-4px)`;
    };

    const onOut = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.(
        selector,
      ) as HTMLElement | null;
      if (!card) return;
      if (card.contains(e.relatedTarget as Node)) return;
      card.style.transition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
      card.style.transform = "";
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseout", onOut);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseout", onOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/** Subtle magnetic hover effect for buttons/links. */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.25,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transition = "transform 0.2s ease-out";
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    };

    const onLeave = () => {
      el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
