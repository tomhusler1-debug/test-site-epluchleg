import Link from "next/link";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className="bg-cream-100 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl3 bg-forest-800 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="veg-divider pointer-events-none absolute inset-0 opacity-[0.06]"
            />
            <h2 className="font-display text-display-sm font-medium text-cream-50 text-balance sm:text-display-md">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream-300/85">{description}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2.5 rounded-full bg-clay-400 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-lifted transition-transform duration-300 ease-premium hover:scale-[1.03] hover:bg-clay-500 active:scale-[0.98]"
              >
                {primaryLabel}
                <IconArrowRight className="h-4 w-4" />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cream-50/90 underline-offset-4 hover:underline"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
