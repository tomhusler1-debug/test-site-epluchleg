# EPLUCH'LEG — Site vitrine

Site vitrine B2B pour EPLUCH&apos;LEG, transformateur de légumes 4ᵉ/5ᵉ gamme et spécialiste de la
pomme de terre, au service de la restauration collective, commerciale et de l&apos;industrie
agroalimentaire en Alsace &amp; Grand Est.

Stack : **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lenis** (scroll
storytelling, typographie cinétique, curseur magnétique, section pinnée "process").

## Développement local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Déploiement sur Vercel

1. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project**.
2. Importez ce repo GitHub (`tomhusler1-debug/test-site-epluchleg`).
3. Vercel détecte automatiquement Next.js — aucune configuration de build n'est nécessaire.
4. (Optionnel mais recommandé) Ajoutez les variables d'environnement du formulaire de contact
   dans **Project Settings → Environment Variables** (voir ci-dessous).
5. Cliquez sur **Deploy**.

Chaque push sur la branche `main` redéploie automatiquement le site.

### Formulaire de contact (envoi d'email)

Le formulaire `/contact` appelle une route API (`/api/contact`) qui envoie l'email via
[Resend](https://resend.com) (offre gratuite disponible). Sans configuration, le formulaire reste
utilisable mais affiche un message invitant à contacter l'entreprise par téléphone/email.

Pour activer l'envoi réel :

1. Créez un compte sur [resend.com](https://resend.com) et vérifiez votre domaine d'envoi.
2. Générez une clé API.
3. Dans Vercel, ajoutez ces variables d'environnement (voir aussi `.env.example`) :
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (adresse qui reçoit les demandes)
   - `CONTACT_FROM_EMAIL` (doit appartenir au domaine vérifié dans Resend)
4. Redéployez.

## Contenu à remplacer avant mise en ligne définitive

Certaines informations n'ont pas été fournies et ont été temporairement complétées pour que le
site soit complet et cohérent. À vérifier/remplacer avant publication :

- **Coordonnées** (`src/lib/data.ts`) : téléphone, email et adresse sont des valeurs provisoires.
- **Photographies** : l'environnement de génération n'a pas d'accès internet, donc le site utilise
  uniquement des compositions graphiques/animations (aucune photo). Ajouter de vraies photos
  (atelier, produits, équipe) renforcerait encore la crédibilité — pour les intégrer, remplacer les
  compositions dans `HeroVisual.tsx` et les sections concernées par des `<Image>` (`next/image`)
  pointant vers vos fichiers dans `public/`.
- **Certifications qualité** : la page Entreprise reste volontairement générique sur l'hygiène et
  la qualité (aucune certification — HACCP, IFS, BRC... — n'a été confirmée). À préciser si
  applicable.
- **Historique de l'entreprise** : année de création, effectif, etc. ne sont pas mentionnés sur le
  site — à ajouter si vous souhaitez les mettre en avant.

## Structure du projet

```
src/
  app/            Pages (App Router) : accueil, produits, secteurs, entreprise, contact
  components/     Composants UI réutilisables
  lib/            Données de contenu (produits, secteurs, villes, statistiques)
```
