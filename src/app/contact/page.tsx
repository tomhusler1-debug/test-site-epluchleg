import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { IconClock, IconPin } from "@/components/icons";
import { company, cities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — demandez votre devis",
  description:
    "Contactez EPLUCH'LEG pour vos besoins en légumes transformés et pommes de terre : restauration collective, restaurants, traiteurs, industriels, grossistes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discutons de votre approvisionnement"
        description="Décrivez-nous votre besoin — produits, volumes, fréquence de livraison — et notre équipe revient vers vous rapidement avec une proposition adaptée."
      />

      <section className="bg-cream-100 pb-24 sm:pb-32">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-xl3 bg-forest-800 p-8 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-wider text-clay-200">
                  Coordonnées
                </p>
                <dl className="mt-6 space-y-5 text-cream-100">
                  <div>
                    <dt className="text-sm text-cream-300/70">Téléphone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${company.phone.replace(/\s/g, "")}`}
                        className="font-display text-xl transition-colors hover:text-clay-200"
                      >
                        {company.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-cream-300/70">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${company.email}`}
                        className="font-display text-xl transition-colors hover:text-clay-200"
                      >
                        {company.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-cream-300/70">Adresse</dt>
                    <dd className="mt-1 font-display text-xl">{company.address}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-xl3 border border-forest-700/10 bg-cream-50 p-8 sm:p-9">
                <div className="flex items-center gap-2.5 text-forest-700">
                  <IconClock className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-wider">Disponibilité</p>
                </div>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  Notre équipe traite les demandes professionnelles du lundi au vendredi. Pour
                  toute urgence de livraison, contactez-nous directement par téléphone.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-xl3 border border-forest-700/10 bg-cream-50 p-8 sm:p-9">
                <div className="flex items-center gap-2.5 text-forest-700">
                  <IconPin className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-wider">
                    Zone d&apos;intervention
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <span
                      key={c.name}
                      className="rounded-full bg-forest-700/8 px-3.5 py-1.5 text-sm font-medium text-forest-700"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-xl3 border border-forest-700/10 bg-cream-50 p-8 shadow-soft sm:p-10">
              <h2 className="font-display text-2xl font-medium text-ink">Demande de devis</h2>
              <p className="mt-2 text-ink-muted">
                Tous les champs marqués d&apos;un{" "}
                <span className="text-clay-500">*</span> sont obligatoires.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
