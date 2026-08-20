import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream-200 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div
        aria-hidden
        className="veg-divider pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-[0.07]"
      />
      <div className="container-page max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-forest-700/8 px-4 py-1.5 text-sm font-medium text-forest-700">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 text-display-lg font-display font-medium text-ink text-balance">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
