"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user" makes every framer-motion animation in the tree
  // (Reveal, KineticText, StatCounter, ProcessScroll transitions, Magnetic…)
  // collapse to its end state instantly when the OS-level reduce-motion
  // preference is on, with no per-component wiring needed.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
