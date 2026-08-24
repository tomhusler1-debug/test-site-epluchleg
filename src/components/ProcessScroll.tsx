"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { IconBox, IconKnife, IconPotato, IconShield, IconTruck } from "./icons";

const steps = [
  {
    n: "01",
    title: "Réception",
    text: "Chaque arrivage est contrôlé à réception : origine, fraîcheur et conformité avant transformation.",
    icon: IconShield,
  },
  {
    n: "02",
    title: "Épluchage",
    text: "Pommes de terre et légumes sont épluchés avec précision, pour un rendement optimal et un produit net.",
    icon: IconPotato,
  },
  {
    n: "03",
    title: "Découpe",
    text: "Cubes, lamelles, rondelles, bâtonnets : chaque référence est découpée selon le format demandé.",
    icon: IconKnife,
  },
  {
    n: "04",
    title: "Conditionnement",
    text: "Sous vide ou en sachet, le conditionnement est pensé pour préserver fraîcheur et sécurité alimentaire.",
    icon: IconBox,
  },
  {
    n: "05",
    title: "Livraison",
    text: "Nos tournées couvrent l'Alsace et le Grand Est, dans des délais adaptés à votre activité.",
    icon: IconTruck,
  },
];

export function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive(idx);
  });

  const ActiveIcon = steps[active].icon;

  return (
    <section ref={ref} className="relative bg-ink" style={{ height: `${steps.length * 62}vh` }}>
      <div className="veg-divider pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-16">
        <div className="container-page">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-200">
            Notre process
          </span>
          <h2 className="mt-3 max-w-lg text-display-sm font-display font-medium text-cream-50 text-balance">
            De la réception à la livraison
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-20">
            <div className="hidden flex-col gap-5 lg:flex">
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  data-cursor-hover
                  onClick={() => {
                    const el = ref.current;
                    if (!el) return;
                    const target = el.offsetTop + (i / steps.length) * el.offsetHeight + 10;
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }}
                  className="group flex items-center gap-3 text-left"
                >
                  <span
                    className={`font-display text-sm transition-colors duration-300 ${
                      active === i ? "text-orange-300" : "text-cream-100/30"
                    }`}
                  >
                    {s.n}
                  </span>
                  <span
                    className={`h-px flex-1 max-w-6 transition-all duration-300 ${
                      active === i ? "bg-orange-300" : "bg-cream-100/20"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      active === i ? "text-cream-50" : "text-cream-100/40"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative min-h-[220px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16, position: "absolute", top: 0, left: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex w-full flex-col gap-6 sm:flex-row sm:items-start"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
                    <ActiveIcon className="h-8 w-8" />
                  </span>
                  <div>
                    <span className="font-display text-sm text-orange-300 lg:hidden">
                      {steps[active].n} — {steps[active].title}
                    </span>
                    <h3 className="hidden font-display text-3xl font-medium text-cream-50 lg:block">
                      {steps[active].title}
                    </h3>
                    <p className="mt-3 max-w-md text-lg leading-relaxed text-cream-300/80">
                      {steps[active].text}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex gap-2 lg:hidden">
                {steps.map((s, i) => (
                  <span
                    key={s.n}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      active === i ? "bg-orange-300" : "bg-cream-100/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
