import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { GrandEstMap } from "@/components/GrandEstMap";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { IconClock, IconPin, IconShield, IconSnowflake } from "@/components/icons";
import { cities } from "@/lib/data";

export const metadata: Metadata = {
  title: "L'entreprise — expertise pomme de terre & légumes transformés",
  description:
    "EPLUCH'LEG, entreprise spécialisée dans la transformation de légumes 4ᵉ et 5ᵉ gamme, avec une expertise historique sur la pomme de terre, au service du Grand Est.",
};

const commitments = [
  {
    icon: IconShield,
    title: "Exigence sur chaque lot",
    text: "Un contrôle attentif du calibrage, de la découpe et de la propreté de chaque préparation, dans le respect des bonnes pratiques d'hygiène agroalimentaire.",
  },
  {
    icon: IconSnowflake,
    title: "Chaîne du froid maîtrisée",
    text: "Des process de conditionnement pensés pour préserver la fraîcheur du produit, de notre atelier jusqu'à votre cuisine.",
  },
  {
    icon: IconClock,
    title: "Fiabilité des délais",
    text: "Une organisation calibrée pour tenir les délais exigeants de la restauration collective et de l'industrie.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title="Une expertise historique sur la pomme de terre"
        description="EPLUCH'LEG est une entreprise spécialisée dans la transformation de légumes de 4ᵉ et 5ᵉ gamme, avec un savoir-faire reconnu sur la pomme de terre — épluchée crue sous vide ou précuite, sous toutes les formes."
      />

      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-wider text-clay-500">
                Notre métier
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-display text-display-sm font-medium text-ink text-balance">
                Le légume transformé, pensé pour les professionnels
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
                <p>
                  Nous préparons également des carottes, céleris, poireaux, patates douces et
                  autres légumes destinés aux professionnels de la restauration collective, de la
                  restauration commerciale et de l&apos;industrie agroalimentaire.
                </p>
                <p>
                  Notre zone d&apos;intervention principale couvre l&apos;Alsace et le Grand Est,
                  notamment Strasbourg, Haguenau, Colmar, Nancy et Metz — un ancrage régional qui
                  nous permet de rester proches de nos clients et réactifs à leurs besoins.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-xl3 bg-forest-800 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-clay-200">
                En bref
              </p>
              <dl className="mt-6 space-y-5">
                <div className="border-b border-cream-100/10 pb-5">
                  <dt className="text-sm text-cream-300/70">Spécialité</dt>
                  <dd className="mt-1 font-display text-lg text-cream-50">
                    Pomme de terre 4ᵉ &amp; 5ᵉ gamme
                  </dd>
                </div>
                <div className="border-b border-cream-100/10 pb-5">
                  <dt className="text-sm text-cream-300/70">Clientèle</dt>
                  <dd className="mt-1 font-display text-lg text-cream-50">
                    Restauration &amp; industrie agroalimentaire
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-cream-300/70">Zone d&apos;intervention</dt>
                  <dd className="mt-1 font-display text-lg text-cream-50">Alsace &amp; Grand Est</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="bg-cream-200 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nos engagements"
            title="Une exigence de tous les instants"
            description="De l'atelier à la livraison, chaque étape est pensée pour garantir un produit sûr, frais et régulier."
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {commitments.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-xl2 bg-cream-50 p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700/10 text-forest-700">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">{c.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{c.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="bg-cream-100 py-20 sm:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <GrandEstMap />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Zone d'intervention"
              title="Alsace & Grand Est"
              description="Une couverture géographique dense, pour garantir fraîcheur et réactivité à chacun de nos clients professionnels."
            />
            <Reveal delay={0.2}>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cities.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-center gap-2 rounded-full border border-forest-700/15 bg-cream-50 px-4 py-2.5 text-sm font-medium text-ink-light"
                  >
                    <IconPin className="h-4 w-4 text-clay-400" />
                    {c.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Envie de rencontrer notre équipe ?"
        description="Contactez-nous pour échanger sur votre activité et découvrir comment nous pouvons vous accompagner."
      />
    </>
  );
}
