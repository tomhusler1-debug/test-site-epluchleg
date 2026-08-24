"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { KineticText } from "./KineticText";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-200 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-beige-400/15 blur-[100px]"
        />
        <div className="veg-divider absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-[0.07]" />
      </div>
      <div className="container-page relative max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-beige-200 px-4 py-1.5 text-sm font-medium text-beige-800">
            {eyebrow}
          </span>
        </Reveal>
        <h1 className="mt-6 text-display-lg font-display font-medium text-ink text-balance">
          <KineticText text={title} delay={0.1} />
        </h1>
        <Reveal delay={0.35}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
