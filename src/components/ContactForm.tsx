"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectors, company } from "@/lib/data";
import { IconCheck } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-cream-50 px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-muted/50 transition-colors duration-200 focus:border-ink focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      sector: String(data.get("sector") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(
          json.error ?? "Une erreur est survenue. Merci de réessayer.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage(
        "Impossible d'envoyer le message pour le moment. Merci de nous contacter directement.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl3 border border-ink/10 bg-cream-50 p-10 text-center"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream-100">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-ink">Message envoyé</h3>
        <p className="mt-2.5 max-w-sm text-ink-muted">
          Merci pour votre demande. Notre équipe revient vers vous rapidement pour échanger sur
          votre besoin.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={status === "error" ? "form-error" : undefined}>
      {/* Honeypot field — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir ce champ</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Nom complet <span className="text-orange-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`mt-2 ${inputClasses}`}
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={`mt-2 ${inputClasses}`}
            placeholder="Nom de votre établissement"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email <span className="text-orange-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-2 ${inputClasses}`}
            placeholder="vous@exemple.fr"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`mt-2 ${inputClasses}`}
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sector" className="text-sm font-medium text-ink">
          Votre secteur d&apos;activité
        </label>
        <select id="sector" name="sector" className={`mt-2 ${inputClasses} appearance-none`} defaultValue="">
          <option value="" disabled>
            Sélectionnez votre secteur
          </option>
          {sectors.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Votre besoin <span className="text-orange-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 ${inputClasses} resize-none`}
          placeholder="Décrivez vos besoins : produits, volumes, fréquence de livraison souhaitée…"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            id="form-error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-700"
          >
            {errorMessage} Vous pouvez aussi nous joindre au{" "}
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="font-semibold underline">
              {company.phone}
            </a>
            .
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold text-cream-100 shadow-soft transition-all duration-300 ease-premium hover:bg-orange-600 hover:shadow-card disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
