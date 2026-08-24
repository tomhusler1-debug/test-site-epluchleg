import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { GrainOverlay } from "@/components/GrainOverlay";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://epluchleg.fr"),
  title: {
    default: "EPLUCH'LEG — Transformation de légumes 4ᵉ & 5ᵉ gamme | Grand Est",
    template: "%s — EPLUCH'LEG",
  },
  description:
    "EPLUCH'LEG transforme légumes et pommes de terre pour les professionnels de la restauration collective, commerciale et de l'industrie agroalimentaire à Strasbourg, Haguenau, Colmar, Nancy et Metz.",
  keywords: [
    "légumes 4ème gamme",
    "légumes 5ème gamme",
    "pomme de terre épluchée",
    "grossiste légumes transformés",
    "restauration collective",
    "Strasbourg",
    "Grand Est",
  ],
  openGraph: {
    title: "EPLUCH'LEG — Transformation de légumes pour professionnels",
    description:
      "Expertise historique sur la pomme de terre et les légumes 4ᵉ/5ᵉ gamme, au service des professionnels du Grand Est.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-beige-800 focus:px-5 focus:py-3 focus:text-cream-100"
        >
          Aller au contenu principal
        </a>
        <SmoothScroll>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
        <GrainOverlay />
        <CustomCursor />
      </body>
    </html>
  );
}
