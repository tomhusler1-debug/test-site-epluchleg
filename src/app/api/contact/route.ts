import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  message: string;
  website: string; // honeypot
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Honeypot — bots fill every field, real users never see or fill this one.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const company = (body.company ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const sector = (body.sector ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, votre email et votre message." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "[contact] Envoi désactivé : RESEND_API_KEY, CONTACT_TO_EMAIL ou CONTACT_FROM_EMAIL manquant dans les variables d'environnement Vercel.",
    );
    return NextResponse.json(
      {
        error:
          "L'envoi de messages n'est pas encore configuré sur ce site. Merci de nous contacter directement par téléphone ou email.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject: `Nouvelle demande de devis — ${company || name}`,
        text: [
          `Nom : ${name}`,
          `Entreprise : ${company || "—"}`,
          `Email : ${email}`,
          `Téléphone : ${phone || "—"}`,
          `Secteur : ${sector || "—"}`,
          "",
          "Message :",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact] Échec Resend:", res.status, errText);
      return NextResponse.json(
        { error: "L'envoi a échoué. Merci de réessayer ou de nous contacter directement." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Erreur réseau:", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de réessayer ou de nous contacter directement." },
      { status: 502 },
    );
  }
}
