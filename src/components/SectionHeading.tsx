import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-ink" : "text-cream-100";
  const descColor = tone === "dark" ? "text-ink-muted" : "text-cream-300/85";
  const eyebrowColor = tone === "dark" ? "text-orange-600" : "text-orange-200";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] ${eyebrowColor}`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`mt-3 text-display-md font-display font-medium text-balance ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={`mt-5 text-lg leading-relaxed ${descColor} ${isCenter ? "mx-auto" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
