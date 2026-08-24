import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { IconCheck, IconPotato, vegIconMap } from "@/components/icons";
import { potatoForms, potatoLines, vegetables } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos produits — légumes 4ᵉ/5ᵉ gamme & pomme de terre",
  description:
    "Pomme de terre épluchée crue sous vide, pomme de terre cuite, carotte, céleri, choux, poireau, patate douce, asperges : découvrez notre gamme complète de légumes transformés pour professionnels.",
};

const potatoUseCases = [
  "Frites fraîches maison, sans épluchage en cuisine",
  "Gratins et purées avec un rendement optimisé",
  "Garnitures rôties ou sautées prêtes à cuisiner",
  "Grandes cuissons en restauration collective",
];

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos produits"
        title="Une gamme complète de légumes transformés"
        description="De la pomme de terre — notre spécialité historique — aux légumes de saison, chaque référence est épluchée, découpée et conditionnée pour vous faire gagner du temps sans compromis sur la qualité."
      />

      {/* POMME DE TERRE DETAIL */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest-700 text-cream-100">
                <IconPotato className="h-8 w-8" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-clay-500">
                  Activité principale
                </span>
                <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  Pomme de terre
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {potatoLines.map((line, i) => (
              <Reveal key={line.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-xl3 border border-forest-700/10 bg-cream-50 p-8 shadow-soft sm:p-10">
                  <span className="w-fit rounded-full bg-clay-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-clay-500">
                    {line.tag}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                    {line.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-muted">{line.description}</p>

                  <div className="mt-7">
                    <p className="text-sm font-semibold text-ink">Formats disponibles</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {potatoForms.map((f) => (
                        <span
                          key={f.label}
                          className="rounded-full border border-forest-700/15 px-3.5 py-1.5 text-sm text-ink-light"
                        >
                          {f.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 rounded-xl2 bg-forest-800 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-clay-200">
                Utilisations courantes
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {potatoUseCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-cream-200">
                    <IconCheck className="mt-1 h-4 w-4 shrink-0 text-clay-300" />
                    <span className="leading-snug">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUTRES LEGUMES DETAIL */}
      <section className="bg-cream-200 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Légumes frais préparés"
            title="Des légumes épluchés et découpés selon vos besoins"
            description="Chaque légume est préparé avec le même niveau d'exigence que la pomme de terre : découpe adaptée, conditionnement soigné, fraîcheur garantie."
          />

          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vegetables.map((v) => {
              const Icon = vegIconMap[v.icon];
              return (
                <StaggerItem key={v.slug}>
                  <div className="group flex h-full flex-col rounded-xl2 border border-forest-700/10 bg-cream-50 p-7 transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-700/8 text-forest-700 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-cream-100">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-medium text-ink">{v.name}</h3>
                    <p className="mt-2.5 leading-relaxed text-ink-muted">{v.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* FORMATS & CONDITIONNEMENT */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          {[
            {
              title: "Découpe sur mesure",
              text: "Cubes, lamelles, rondelles, bâtonnets, quartiers : nous adaptons le format à votre recette et à votre équipement.",
            },
            {
              title: "Conditionnement adapté",
              text: "Sous vide ou en sachet selon le produit, pour préserver fraîcheur et praticité jusqu'en cuisine.",
            },
            {
              title: "Volumes professionnels",
              text: "Des quantités pensées pour la restauration collective comme pour les besoins ponctuels des restaurants et traiteurs.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border-t-2 border-clay-400 pt-6">
                <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Un besoin spécifique de découpe ou de volume ?"
        description="Notre équipe étudie avec vous le format, le conditionnement et la fréquence de livraison adaptés à votre activité."
        secondaryLabel="Voir les secteurs que nous accompagnons"
        secondaryHref="/secteurs"
      />
    </>
  );
}
