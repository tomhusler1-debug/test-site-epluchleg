"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatCounterProps = {
  value: string;
  label: string;
  delay?: number;
};

export function StatCounter({ value, label, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const duration = 900;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="text-center sm:text-left"
    >
      <p className="font-display text-4xl font-medium text-forest-700 sm:text-5xl">
        {Number.isNaN(numeric) ? value : display}
        {suffix}
      </p>
      <p className="mt-2 text-sm leading-snug text-ink-muted">{label}</p>
    </motion.div>
  );
}
