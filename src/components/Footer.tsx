import Link from "next/link";
import Image from "next/image";
import { company, cities } from "@/lib/data";
import { IconPin } from "./icons";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/produits", label: "Produits" },
      { href: "/secteurs", label: "Secteurs" },
      { href: "/entreprise", label: "Entreprise" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream-200">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-24">
        <div>
          <Link href="/" className="inline-flex items-center rounded-lg bg-cream-50 px-3 py-2">
            <Image src="/images/logo.jpg" alt="EPLUCH'LEG" width={220} height={49} className="h-7 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream-300/80">
            Transformation de légumes 4ᵉ et 5ᵉ gamme, expertise historique sur la pomme de terre,
            au service de la restauration collective, commerciale et de l&apos;industrie
            agroalimentaire.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium uppercase tracking-wider text-cream-400/60">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-cream-300/85 transition-colors hover:text-orange-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-cream-400/60">
            Zone d&apos;intervention
          </p>
          <ul className="mt-5 space-y-2.5">
            {cities.map((c) => (
              <li key={c.name} className="flex items-center gap-2 text-[0.95rem] text-cream-300/85">
                <IconPin className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-cream-400/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <p>{company.region} — Site vitrine à vocation professionnelle (B2B).</p>
        </div>
      </div>
    </footer>
  );
}
