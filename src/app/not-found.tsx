import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-display text-display-lg font-medium text-forest-700">404</span>
      <h1 className="mt-4 font-display text-2xl font-medium text-ink">Page introuvable</h1>
      <p className="mt-3 max-w-md text-ink-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
      <Link href="/contact" className="mt-5 text-sm font-medium text-forest-700 underline-offset-4 hover:underline">
        Nous contacter
      </Link>
    </section>
  );
}
