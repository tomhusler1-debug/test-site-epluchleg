import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { IconCheck, sectorIconMap } from "@/components/icons";
import { sectorDetails } from "@/lib/sectorDetails";

export const metadata: Metadata = {
  title: "Secteurs accompagnés — restauration collective, industriels, grossistes",
  description:
    "EPLUCH'LEG accompagne la restauration collective, les cantines scolaires, les restaurants, les traiteurs, les industriels agroalimentaires et les grossistes en légumes transformés.",
};

const iconOrder = ["collective", "school", "restaurant", "catering", "industry", "wholesale"] as const;

const process = [
  {
    step: "01",
    title: "Échange sur vos besoins",
    text: "Volumes, formats de découpe, fréquence de livraison : nous cadrons ensemble votre besoin.",
  },
  {
    step: "02",
    title: "Proposition sur mesure",
    text: "Nous vous proposons une gamme et un rythme d'approvisionnement adaptés à votre activité.",
  },
  {
    step: "03",
    title: "Livraison régulière",
    text: "Vos légumes transformés arrivent prêts à l'emploi, selon la fréquence convenue.",
  },
];

export default function SecteursPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos secteurs"
        title="Un partenaire adapté à chaque métier de bouche"
        description="Restauration collective, cantines scolaires, restaurants, traiteurs, industriels agroalimentaires, grossistes : nous adaptons nos préparations aux contraintes de chaque secteur."
      />

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page space-y-5">
          {sectorDetails.map((sector, i) => {
            const Icon = sectorIconMap[iconOrder[i]];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={sector.slug} delay={Math.min(i * 0.05, 0.2)}>
                <div
                  className={`flex flex-col gap-8 rounded-xl3 border border-ink/10 bg-cream-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-14 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-5 lg:w-64">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ink text-cream-100">
                      <Icon className="h-8 w-8" />
                    </span>
                    <h2 className="font-display text-xl font-medium text-ink lg:hidden">
                      {sector.name}
                    </h2>
                  </div>
                  <div className="flex-1">
                    <h2 className="hidden font-display text-2xl font-medium text-ink lg:block">
                      {sector.name}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink-muted lg:mt-3">
                      {sector.description}
                    </p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                      {sector.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-light">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                          <span className="leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-cream-200 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Comment ça se passe"
            title="Une mise en place simple, en trois étapes"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="text-center sm:text-left">
                  <span className="font-display text-4xl font-light text-ink/10">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-medium text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Votre secteur n'est pas listé ?"
        description="Parlons de votre activité : nous étudions chaque demande professionnelle, quel que soit votre volume."
        secondaryLabel="Voir notre gamme de produits"
        secondaryHref="/produits"
      />
    </>
  );
}
