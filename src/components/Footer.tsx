import Link from "next/link";
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
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-orange-500">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c-4-3-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-3 8-7 11z" />
                <path d="M12 21V10" />
              </svg>
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-cream-50">
              EPLUCH&apos;LEG
            </span>
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
