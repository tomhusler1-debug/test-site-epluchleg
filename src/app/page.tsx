import Link from "next/link";
import { Button } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { GrandEstMap } from "@/components/GrandEstMap";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { ProductCard } from "@/components/ProductCard";
import { SectorCard } from "@/components/SectorCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconPin,
  IconShield,
  IconSnowflake,
  sectorIconMap,
  vegIconMap,
} from "@/components/icons";
import { activities, cities, potatoForms, potatoLines, sectors, stats, vegetables } from "@/lib/data";

const values = [
  {
    icon: IconShield,
    title: "Qualité maîtrisée",
    description:
      "Un savoir-faire éprouvé sur la pomme de terre, exigeant sur le calibrage et la régularité de chaque livraison.",
  },
  {
    icon: IconSnowflake,
    title: "Fraîcheur préservée",
    description:
      "Conditionnement sous vide et process pensés pour conserver texture, goût et sécurité alimentaire.",
  },
  {
    icon: IconClock,
    title: "Réactivité pro",
    description:
      "Des délais adaptés aux contraintes de la restauration collective et de l'industrie agroalimentaire.",
  },
  {
    icon: IconPin,
    title: "Ancrage régional",
    description:
      "Une couverture dédiée à l'Alsace et au Grand Est, pour une relation de proximité avec nos clients.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-200 pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div
          aria-hidden
          className="veg-divider pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.08]"
        />
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-forest-700/8 px-4 py-1.5 text-sm font-medium text-forest-700">
                Légumes 4ᵉ &amp; 5ᵉ gamme — spécialiste pomme de terre
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-display-xl font-display font-medium text-ink text-balance">
                Le légume transformé,
                <br />
                <span className="italic text-forest-700">prêt à l&apos;emploi.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
                EPLUCH&apos;LEG épluche, découpe et prépare pommes de terre et légumes frais pour
                les professionnels de la restauration et de l&apos;industrie agroalimentaire —
                de Strasbourg à Metz.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact">Demander un devis</Button>
                <Button href="/produits" variant="ghost">
                  Découvrir nos produits
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
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
          </div>

          <Reveal delay={0.15} y={30}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section className="border-y border-forest-700/8 bg-forest-800 py-6">
        <div className="container-page overflow-hidden">
          <div className="flex animate-marquee gap-10 whitespace-nowrap">
            {[...activities, ...activities].map((a, i) => (
              <span
                key={`${a}-${i}`}
                className="flex items-center gap-3 text-sm font-medium text-cream-300/80"
              >
                <IconCheck className="h-4 w-4 text-clay-300" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POMME DE TERRE SPOTLIGHT */}
      <section className="bg-cream-200 py-24 sm:py-32">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative overflow-hidden rounded-xl3 bg-forest-800 p-10 sm:p-14">
                <div
                  aria-hidden
                  className="veg-divider pointer-events-none absolute inset-0 opacity-[0.06]"
                />
                <span className="inline-flex items-center rounded-full bg-clay-400/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-clay-200">
                  Activité principale
                </span>
                <h3 className="mt-5 font-display text-3xl font-medium text-cream-50 sm:text-4xl">
                  La pomme de terre,
                  <br />
                  notre expertise historique
                </h3>
                <p className="mt-5 max-w-md leading-relaxed text-cream-300/80">
                  Épluchée crue sous vide ou précuite, déclinée sous toutes les formes pour
                  s&apos;adapter à vos préparations et réduire votre temps de cuisine.
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {potatoForms.map((f) => (
                    <span
                      key={f.label}
                      className="rounded-full border border-cream-100/20 px-3.5 py-1.5 text-sm text-cream-200"
                    >
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="space-y-5">
              {potatoLines.map((line, i) => (
                <Reveal key={line.title} delay={0.1 + i * 0.1}>
                  <div className="rounded-xl2 border border-forest-700/10 bg-cream-50 p-7 shadow-soft transition-shadow duration-300 hover:shadow-card">
                    <span className="text-xs font-semibold uppercase tracking-wider text-clay-500">
                      {line.tag}
                    </span>
                    <h4 className="mt-2 font-display text-xl font-medium text-ink">
                      {line.title}
                    </h4>
                    <p className="mt-2.5 leading-relaxed text-ink-muted">{line.description}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <Link
                  href="/produits"
                  className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-forest-700"
                >
                  Voir toute la gamme pomme de terre
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES LÉGUMES */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Notre gamme"
              title="Bien plus que la pomme de terre"
              description="Carottes, céleris, poireaux, patates douces et asperges : une gamme de légumes frais préparés pour répondre à l'ensemble de vos besoins de cuisine."
            />
            <Reveal delay={0.1}>
              <Button href="/produits" variant="ghost" className="shrink-0">
                Tous les produits
              </Button>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {vegetables.map((v) => {
              const Icon = vegIconMap[v.icon];
              return (
                <StaggerItem key={v.slug}>
                  <div className="flex h-full flex-col items-center rounded-xl2 border border-forest-700/10 bg-cream-50 px-4 py-8 text-center transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-700/8 text-forest-700">
                      <Icon className="h-7 w-7" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-ink">{v.name}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* SECTEURS CLIENTS */}
      <section className="bg-forest-900 py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Nos clients"
            title="Un partenaire pour chaque métier de bouche"
            description="De la cuisine centrale à l'industrie agroalimentaire, nous adaptons nos préparations aux contraintes de chaque secteur."
            tone="light"
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => {
              const Icon = sectorIconMap[s.icon];
              return (
                <SectorCard key={s.name} icon={Icon} name={s.name} description={s.description} index={i + 1} />
              );
            })}
          </StaggerGroup>
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button href="/secteurs" variant="secondary">
              Découvrir tous les secteurs
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ZONE D'INTERVENTION */}
      <section className="bg-cream-200 py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Zone d'intervention"
              title="Ancrés en Alsace, au service du Grand Est"
              description="Une couverture pensée pour garantir réactivité et fraîcheur, de Metz à Colmar."
            />
            <StaggerGroup className="mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
              {stats.map((s, i) => (
                <StatCounter key={s.label} value={s.value} label={s.label} delay={i * 0.05} />
              ))}
            </StaggerGroup>
          </div>
          <Reveal delay={0.15}>
            <GrandEstMap />
          </Reveal>
        </div>
      </section>

      {/* POURQUOI EPLUCH'LEG */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Pourquoi EPLUCH'LEG"
            title="Une exigence de tous les instants"
            align="center"
            className="mx-auto"
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-xl2 bg-cream-50 p-7 shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay-400/10 text-clay-400">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cream-200 pb-24 sm:pb-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl3 bg-clay-400 px-8 py-16 text-center sm:px-16 sm:py-20">
              <div
                aria-hidden
                className="veg-divider pointer-events-none absolute inset-0 opacity-[0.08]"
              />
              <h2 className="font-display text-display-sm font-medium text-cream-50 text-balance sm:text-display-md">
                Discutons de vos besoins en légumes transformés
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-cream-100/90">
                Volumes, formats de découpe, fréquence de livraison : parlons de votre cuisine et
                construisons ensemble un approvisionnement sur mesure.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-semibold text-clay-500 shadow-lifted transition-transform duration-300 ease-premium hover:scale-[1.03] active:scale-[0.98]"
                >
                  Demander un devis
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/entreprise"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cream-50/90 underline-offset-4 hover:underline"
                >
                  En savoir plus sur l&apos;entreprise
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
