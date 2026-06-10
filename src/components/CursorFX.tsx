import React, { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/animations";

/**
 * Premium cursor effects (desktop only):
 *  - a soft ambient glow that follows the cursor
 *  - a trailing ring that expands over interactive elements
 *  - powers the mouse-tracked `.spot-card` glow via CSS variables
 * Native cursor stays visible; everything degrades gracefully.
 */
const CursorFX: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        visible = true;
        glow.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }

      // Glow follows instantly
      glow.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      // Interactive elements expand the ring
      const target = e.target as HTMLElement;
      const interactive = target.closest?.(
        "a, button, [role='button'], .tilt-card",
      );
      ring.classList.toggle("is-active", Boolean(interactive));

      // Spotlight cards: update CSS vars on the hovered card
      const card = target.closest?.(".spot-card") as HTMLElement | null;
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px)`;
      raf = requestAnimationFrame(lerp);
    };

    const onLeave = () => {
      visible = false;
      glow.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(lerp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CursorFX;
