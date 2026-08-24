"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "./Button";
import { HeroVisual } from "./HeroVisual";
import { KineticText } from "./KineticText";
import { Reveal } from "./Reveal";
import { cities } from "@/lib/data";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Scroll-linked motion values bypass MotionConfig's reducedMotion handling,
  // so the parallax/fade ranges are collapsed to no-ops by hand here.
  const visualY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 90]);
  const visualScale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.75], prefersReducedMotion ? [1, 1] : [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-200 pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Animated gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-forest-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-clay-300/25 blur-[90px]"
        />
        <div className="veg-divider absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-[0.09]" />
      </div>

      <motion.div style={{ opacity: fade }} className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div style={{ y: contentY }}>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-700/8 px-4 py-1.5 text-sm font-medium text-forest-700">
              Légumes 4ᵉ &amp; 5ᵉ gamme — spécialiste pomme de terre
            </span>
          </Reveal>

          <h1 className="mt-6 text-display-xl font-display font-medium text-ink text-balance">
            <KineticText as="div" text="Le légume transformé," delay={0.15} />
            <KineticText
              as="div"
              text="prêt à l'emploi."
              delay={0.42}
              className="italic text-forest-700"
            />
          </h1>

          <Reveal delay={0.75}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
              EPLUCH&apos;LEG épluche, découpe et prépare pommes de terre et légumes frais pour
              les professionnels de la restauration et de l&apos;industrie agroalimentaire —
              de Strasbourg à Metz.
            </p>
          </Reveal>

          <Reveal delay={0.85}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact">Demander un devis</Button>
              <Button href="/produits" variant="ghost">
                Découvrir nos produits
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.95}>
            <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted/70">
                Zone d&apos;intervention
              </span>
              {cities.map((c) => (
                <span
                  key={c.name}
                  className="rounded-full border border-forest-700/15 bg-cream-50 px-3 py-1 text-xs font-medium text-ink-light"
                >
                  {c.name}
                </span>
              ))}
            </div>
          </Reveal>
        </motion.div>

        <motion.div style={{ y: visualY, scale: visualScale }}>
          <Reveal delay={0.3} y={30}>
            <HeroVisual />
          </Reveal>
        </motion.div>
      </motion.div>
    </section>
  );
}
