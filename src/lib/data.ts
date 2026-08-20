export const company = {
  name: "EPLUCH'LEG",
  baseline: "Le légume transformé, prêt à l'emploi, pour les professionnels",
  region: "Alsace & Grand Est",
  // Placeholder — à remplacer par les vraies coordonnées de l'entreprise
  phone: "03 88 00 00 00",
  email: "contact@epluchleg.fr",
  address: "Zone d'activité — Alsace, France",
};

export const cities = [
  { name: "Strasbourg", x: 74, y: 22 },
  { name: "Haguenau", x: 70, y: 8 },
  { name: "Colmar", x: 62, y: 46 },
  { name: "Nancy", x: 22, y: 40 },
  { name: "Metz", x: 14, y: 18 },
] as const;

export type PotatoForm = {
  label: string;
};

export const potatoForms: PotatoForm[] = [
  { label: "Frites" },
  { label: "Lamelles" },
  { label: "Cubes" },
  { label: "Rondelles" },
  { label: "Quartiers" },
];

export const potatoLines = [
  {
    title: "Pomme de terre épluchée crue sous vide",
    description:
      "Épluchée, calibrée et conditionnée sous vide pour une conservation optimale et une fraîcheur préservée jusqu'en cuisine.",
    tag: "Crue",
  },
  {
    title: "Pomme de terre cuite",
    description:
      "Précuite et prête à l'emploi, elle réduit le temps de préparation en cuisine tout en garantissant une texture régulière.",
    tag: "Cuite",
  },
];

export type Vegetable = {
  slug: string;
  name: string;
  description: string;
  icon: "carrot" | "celery" | "cabbage" | "leek" | "sweetpotato" | "asparagus";
};

export const vegetables: Vegetable[] = [
  {
    slug: "carotte",
    name: "Carotte",
    description: "Épluchée et découpée selon le format souhaité (rondelles, bâtonnets, dés).",
    icon: "carrot",
  },
  {
    slug: "celeri",
    name: "Céleri",
    description: "Préparé et découpé, prêt à intégrer vos préparations chaudes ou froides.",
    icon: "celery",
  },
  {
    slug: "choux",
    name: "Choux",
    description: "Émincés ou coupés sur mesure pour la restauration collective et commerciale.",
    icon: "cabbage",
  },
  {
    slug: "poireau",
    name: "Poireau",
    description: "Nettoyé et émincé, débarrassé de toute terre résiduelle, prêt à cuisiner.",
    icon: "leek",
  },
  {
    slug: "patate-douce",
    name: "Patate douce épluchée",
    description: "Épluchée et calibrée, une alternative gourmande à forte valeur ajoutée.",
    icon: "sweetpotato",
  },
  {
    slug: "asperges",
    name: "Asperges",
    description: "Épluchées et parées avec soin pour une présentation impeccable en salle.",
    icon: "asparagus",
  },
];

export type Sector = {
  name: string;
  description: string;
  icon: "collective" | "school" | "restaurant" | "catering" | "industry" | "wholesale";
};

export const sectors: Sector[] = [
  {
    name: "Restauration collective",
    description: "Des volumes réguliers et une qualité constante pour vos cuisines centrales.",
    icon: "collective",
  },
  {
    name: "Cantines scolaires",
    description: "Des produits calibrés et sûrs, adaptés aux exigences de la restauration scolaire.",
    icon: "school",
  },
  {
    name: "Restaurants",
    description: "Un gain de temps en cuisine sans compromis sur la qualité des produits.",
    icon: "restaurant",
  },
  {
    name: "Traiteurs",
    description: "Des découpes sur mesure pour s'adapter à vos préparations événementielles.",
    icon: "catering",
  },
  {
    name: "Industriels agroalimentaires",
    description: "Un partenaire de transformation fiable pour vos lignes de production.",
    icon: "industry",
  },
  {
    name: "Grossistes",
    description: "Un approvisionnement régulier en légumes transformés pour votre distribution.",
    icon: "wholesale",
  },
];

export const stats = [
  { value: "5", label: "villes desservies en Grand Est" },
  { value: "2", label: "gammes maîtrisées — 4ᵉ & 5ᵉ" },
  { value: "8+", label: "légumes travaillés au quotidien" },
  { value: "6", label: "profils clients accompagnés" },
];

export const activities = [
  "Transformation de légumes 4ᵉ gamme",
  "Transformation de légumes 5ᵉ gamme",
  "Préparation de pommes de terre",
  "Produits prêts à l'emploi",
  "Légumes frais préparés",
  "Légumes épluchés et découpés",
  "Grossiste légumes transformés",
];
