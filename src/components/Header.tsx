"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconClose, IconMenu } from "./icons";

const links = [
  { href: "/produits", label: "Produits" },
  { href: "/secteurs", label: "Secteurs" },
  { href: "/entreprise", label: "Entreprise" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
        scrolled || open
          ? "bg-cream-100/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="EPLUCH'LEG — Accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-700 text-cream-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c-4-3-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-3 8-7 11z" />
              <path d="M12 21V10" />
            </svg>
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            EPLUCH&apos;LEG
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.95rem] font-medium tracking-tight transition-colors duration-200 ${
                  active ? "text-forest-700" : "text-ink-light hover:text-forest-700"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-clay-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-clay-400 px-5 py-2.5 text-sm font-medium text-cream-100 shadow-soft transition-all duration-300 ease-premium hover:bg-clay-500 hover:shadow-card active:scale-[0.97]"
          >
            Demander un devis
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-forest-700/10 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-forest-700/10 bg-cream-100 lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-6" aria-label="Navigation mobile">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3.5 text-lg font-medium tracking-tight transition-colors ${
                    pathname === link.href
                      ? "bg-forest-700/10 text-forest-700"
                      : "text-ink-light active:bg-forest-700/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-clay-400 px-5 py-4 text-base font-medium text-cream-100 shadow-soft"
              >
                Demander un devis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
