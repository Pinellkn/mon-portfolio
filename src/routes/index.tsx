import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  Server,
  Wrench,
  Sparkles,
  Calendar,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Menu,
  X,
  Sun,
  Moon,
  Eye,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Star,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

// Assets servis depuis /public/assets — fonctionnent aussi hors Lovable (export/téléchargement).
const pinel1 = { url: "/assets/me/pinel-1.jpg" };
const pinel2 = { url: "/assets/me/pinel-3.jpg" };
const cvEmploi = { url: "/assets/CV_Pinel_Emploi.pdf" };
const cvStage = { url: "/assets/CV_Pinel_Stage.pdf" };

const acadpay1 = { url: "/assets/projects/acadpay/acadpay-1.png" };
const acadpay2 = { url: "/assets/projects/acadpay/acadpay-2.png" };
const acadpay3 = { url: "/assets/projects/acadpay/acadpay-3.png" };
const acadpay4 = { url: "/assets/projects/acadpay/acadpay-4.png" };
const acadpay5 = { url: "/assets/projects/acadpay/acadpay-5.png" };

const veloce1 = { url: "/assets/projects/veloce/veloce-1.png" };
const veloce2 = { url: "/assets/projects/veloce/veloce-2.png" };
const veloce3 = { url: "/assets/projects/veloce/veloce-3.png" };
const veloce4 = { url: "/assets/projects/veloce/veloce-4.png" };
const veloce5 = { url: "/assets/projects/veloce/veloce-5.png" };

const ong1 = { url: "/assets/projects/ong/ong-1.png" };
const ong2 = { url: "/assets/projects/ong/ong-2.png" };
const ong3 = { url: "/assets/projects/ong/ong-3.png" };
const ong4 = { url: "/assets/projects/ong/ong-4.png" };
const ong5 = { url: "/assets/projects/ong/ong-5.png" };

const beta21 = { url: "/assets/projects/beta2/beta2-1.png" };
const beta22 = { url: "/assets/projects/beta2/beta2-2.png" };
const beta23 = { url: "/assets/projects/beta2/beta2-3.png" };

const cariba1 = { url: "/assets/projects/cool-cariba/cool-cariba-1.jpg" };
const cariba2 = { url: "/assets/projects/cool-cariba/cool-cariba-2.jpg" };
const cariba3 = { url: "/assets/projects/cool-cariba/cool-cariba-3.jpg" };

const allopharm1 = { url: "/assets/projects/allopharm/allopharm-1.jpg" };
const allopharm2 = { url: "/assets/projects/allopharm/allopharm-2.jpg" };
const allopharm3 = { url: "/assets/projects/allopharm/allopharm-3.jpg" };
const allopharm4 = { url: "/assets/projects/allopharm/allopharm-4.jpg" };

const edugest1 = { url: "/assets/projects/edugest/edugest-1.jpg" };
const edugest2 = { url: "/assets/projects/edugest/edugest-2.jpg" };
const edugest3 = { url: "/assets/projects/edugest/edugest-3.jpg" };
const edugest4 = { url: "/assets/projects/edugest/edugest-4.jpg" };
const edugest5 = { url: "/assets/projects/edugest/edugest-5.jpg" };

const fripay1 = { url: "/assets/projects/fripay/fripay-1.jpg" };
const fripay2 = { url: "/assets/projects/fripay/fripay-2.jpg" };
const fripay3 = { url: "/assets/projects/fripay/fripay-3.jpg" };
const fripay4 = { url: "/assets/projects/fripay/fripay-4.jpg" };
const fripay5 = { url: "/assets/projects/fripay/fripay-5.jpg" };
const fripay6 = { url: "/assets/projects/fripay/fripay-6.jpg" };

const klebe1 = { url: "/assets/projects/klebe/klebe-1.jpg" };
const klebe2 = { url: "/assets/projects/klebe/klebe-2.jpg" };
const klebe3 = { url: "/assets/projects/klebe/klebe-3.jpg" };
const klebe4 = { url: "/assets/projects/klebe/klebe-4.jpg" };

const lbc1 = { url: "/assets/projects/lbc/lbc-1.jpg" };
const lbc2 = { url: "/assets/projects/lbc/lbc-2.jpg" };
const lbc3 = { url: "/assets/projects/lbc/lbc-3.jpg" };
const lbc4 = { url: "/assets/projects/lbc/lbc-4.jpg" };

export const Route = createFileRoute("/")({
  component: Index,
});

type ProjectCategory = "Web" | "Mobile" | "Backend";

type Project = {
  id: string;
  name: string;
  tagline: string;
  status?: "live" | "wip";
  role?: string;
  problem: string;
  stack: string[];
  highlights: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: "brand" | "orange";
  category?: ProjectCategory[];
  metrics?: { k: string; v: string }[];
};

const projects: Project[] = [
  {
    id: "allopharm",
    category: ["Web","Backend"],
    name: "AllôPharm",
    tagline:
      "Plateforme de réservation de médicaments en pharmacie — « Un clic, un prix, un sachet prêt ».",
    status: "wip",
    role: "Développeur Fullstack",
    problem:
      "En zone rurale, les patients parcourent 20 à 40 km pour découvrir qu'un médicament est en rupture. AllôPharm permet de vérifier la disponibilité et le prix, puis de réserver avant de se déplacer.",
    stack: ["React / TanStack Start","Tailwind CSS","Laravel","MySQL","REST API","Vercel / Render"],
    highlights: [
      "Recherche de médicaments tolérante aux fautes d'orthographe, avec prix et stock par officine",
      "Réservation avec code de retrait / ticket, suivi par code ou par numéro de téléphone",
      "Espaces officine par rôle : pharmacien, caissier et manager",
      "Backend Laravel : import de stock, expiration automatique des réservations, notifications et journal d'activité",
    ],
    images: [allopharm1.url, allopharm2.url, allopharm3.url, allopharm4.url],
    githubUrl: "https://github.com/Pinellkn/allopharm",
    accent: "brand",
  },
  {
    id: "edugest",
    category: ["Web","Backend"],
    name: "EduGest-Plus",
    tagline:
      "Application de gestion scolaire complète — de l'inscription au bulletin trimestriel.",
    status: "wip",
    role: "Développeur Fullstack",
    problem:
      "Un établissement secondaire (6ème → Terminale) gérait inscriptions, notes, paiements et bulletins à la main. EduGest-Plus centralise tout et calcule automatiquement moyennes et classements.",
    stack: ["React / TanStack Start","Tailwind CSS","Laravel 12","Laravel Sanctum","MySQL","REST API"],
    highlights: [
      "5 rôles : secrétariat, comptabilité, enseignants, direction et parents",
      "Saisie des notes avec moyennes, rangs de classe et rangs de promotion recalculés à chaque saisie",
      "Comptabilité par tranches, génération de reçus et suivi du recouvrement",
      "Bulletins trimestriels et espace parent sécurisé par code d'accès",
      "Fonctionne aussi hors connexion, sur le poste de l'école",
    ],
    images: [edugest1.url, edugest2.url, edugest3.url, edugest4.url, edugest5.url],
    accent: "orange",
  },
  {
    id: "fripay",
    category: ["Mobile","Web","Backend"],
    name: "FriPay",
    tagline:
      "Application de mobile money inter-opérateurs : MTN, Moov et Celtiis dans une seule app.",
    status: "wip",
    role: "Développeur Fullstack — projet en équipe (web, mobile, API)",
    problem:
      "Au Bénin, envoyer de l'argent d'un opérateur à un autre reste compliqué et coûteux. FriPay relie les portefeuilles, affiche les frais avant validation et sécurise les transferts par QR code.",
    stack: ["Flutter / Dart","React / TanStack Start","Laravel (microservices)","PHP (API gateway)","MySQL","QR code signé"],
    highlights: [
      "Projet réalisé en équipe (travail collaboratif sur le web, le mobile et l'API)",
      "App mobile Flutter portée à l'identique depuis la version web : transferts, recharge, retrait, factures, portefeuilles, historique, plaintes",
      "Backend en 3 microservices Laravel (utilisateurs, paiements, administration) derrière une API gateway",
      "Inscription avec OTP et code PIN, paiement de factures (eau, électricité, forfaits)",
      "Audit de l'API réalisé et corrigé, analyse Flutter sans aucune erreur",
    ],
    images: [fripay1.url, fripay2.url, fripay3.url, fripay4.url, fripay5.url, fripay6.url],
    accent: "brand",
  },
  {
    id: "klebe",
    category: ["Backend","Web"],
    name: "Klébé Plan Pro",
    tagline:
      "Assistant WhatsApp qui gère les rendez-vous d'un DG et envoie les rappels automatiquement.",
    status: "wip",
    role: "Développeur Backend — projet d'équipe (5 personnes)",
    problem:
      "Un dirigeant rate des rendez-vous faute de rappels fiables. Klébé planifie les rendez-vous avec son équipe et envoie des rappels WhatsApp à J-1, le jour même et 15 minutes avant.",
    stack: ["Laravel","MySQL","REST API","React / TanStack Start","WhatsApp","Scheduler / Cron"],
    highlights: [
      "Projet réalisé en équipe de 5 personnes : ma contribution porte sur le back-end",
      "Ma part : données et API des rendez-vous (modèle multi-tenant, endpoints REST)",
      "MySQL choisi pour les accès concurrents multi-tenant et le planificateur de rappels",
      "Interface : rendez-vous, messages, gestion d'équipe et suivi du quota de messages",
      "Travail en sprint avec 2 développeurs front et un collègue back-end",
    ],
    images: [klebe1.url, klebe2.url, klebe3.url, klebe4.url],
    accent: "orange",
  },
  {
    id: "lbc",
    category: ["Web","Mobile"],
    name: "LBC — Tout le Bénin en un clic",
    tagline:
      "Plateforme numérique du Bénin : entreprises, emplois & stages, actualités et démarches utiles.",
    status: "live",
    role: "Développeur Fullstack (web + mobile)",
    problem:
      "Les informations locales (entreprises, offres, démarches administratives) sont dispersées. LBC les regroupe au même endroit, avec recherche, filtres et assistant IA.",
    stack: ["React","Vite","TanStack Router","Tailwind CSS","Flutter / Dart","Vercel"],
    highlights: [
      "Annuaire des entreprises avec filtres par secteur, commune et statut de vérification",
      "Offres d'emploi, stages et alternances filtrables par type et niveau d'études",
      "Fil d'actualités multi-sources et guide des démarches du quotidien",
      "Site déployé sur Vercel + application mobile Flutter associée",
    ],
    images: [lbc1.url, lbc2.url, lbc3.url, lbc4.url],
    liveUrl: "https://lbclboncoin.vercel.app",
    accent: "brand",
  },
  {
    id: "acadpay",
    category: ["Web", "Mobile", "Backend"],
    metrics: [
      { k: "5", v: "portails web dédiés" },
      { k: "1", v: "app mobile Flutter" },
      { k: "3", v: "opérateurs de paiement mobile" },
      { k: "✓", v: "soutenance validée (HECM)" },
    ],
    name: "AcadPay",
    tagline:
      "Plateforme complète de gestion académique — 5 portails web, app mobile Flutter et paiements intégrés.",
    status: "live",
    role: "Développeur Fullstack — projet de fin d'études (HECM)",
    problem:
      "Digitaliser tout le cycle académique et financier d'une université : inscriptions, scolarité, comptabilité, admin — pour étudiants, secrétaires, comptables, directeurs et superadmins.",
    stack: ["PHP natif", "MySQL", "Flutter / Dart", "REST API", "FedaPay"],
    highlights: [
      "5 portails web dédiés (étudiant, secrétaire, comptable, directeur, superadmin)",
      "App mobile Flutter — paiement FedaPay via WebView, avatar builder, upload docs",
      "API REST + base MySQL structurée pour la scolarité complète",
      "Projet de soutenance validé — proposition de commercialisation à HECM",
    ],
    images: [acadpay1.url, acadpay2.url, acadpay3.url, acadpay4.url, acadpay5.url],
    accent: "brand",
  },
  {
    id: "veloce",
    category: ["Web","Backend"],
    name: "Veloce / Vogue Motors",
    tagline:
      "Plateforme de vente de véhicules avec authentification sécurisée et paiement en ligne.",
    status: "live",
    role: "Développeur Fullstack",
    problem:
      "Construire un marketplace véhicules fiable, avec un flux d'auth sécurisé et un checkout robuste — deux versions successives du backend pour valider l'architecture.",
    stack: ["Node.js", "SQLite (node:sqlite)", "Supabase", "Google OAuth (PKCE)", "FedaPay"],
    highlights: [
      "Auth Google OAuth avec flow PKCE",
      "Backend refactoré : Supabase → SQLite natif node:sqlite",
      "Paiement FedaPay pour l'achat de véhicules",
      "Interface responsive et déployée en production",
    ],
    images: [veloce1.url, veloce2.url, veloce3.url, veloce4.url, veloce5.url],
    liveUrl: "https://veloce-vogue-motors.onrender.com/",
    accent: "orange",
  },
  {
    id: "ong",
    category: ["Web","Backend"],
    name: "ONG Nature & Compassion",
    tagline: "Site vitrine solidaire avec dons en ligne pour un client réel.",
    status: "wip",
    role: "Développeur Fullstack — mission client (Mme LAWANI)",
    problem:
      "Donner à une ONG une vitrine crédible et un canal de dons en ligne fiable, tout en gérant l'ensemble du cycle client (devis, développement, livraison).",
    stack: ["PHP", "MySQL", "FedaPay"],
    highlights: [
      "Site PHP responsive orienté conversion",
      "Intégration FedaPay pour les dons en ligne",
      "Panel admin pour la gestion du contenu",
      "Gestion complète du cycle client : devis → livraison",
    ],
    images: [ong1.url, ong2.url, ong3.url, ong4.url, ong5.url],
    accent: "brand",
  },
  {
    id: "beta2",
    category: ["Web"],
    name: "Beta2 Afrique Technologies",
    tagline: "Site vitrine institutionnel pour un centre de formation en informatique & électronique.",
    status: "live",
    role: "Développeur Frontend — stage Beta2",
    problem:
      "Présenter clairement l'offre de formation, les événements et les tarifs (étudiants / lycéens) dans un site rapide et cohérent avec l'identité visuelle blanc / bleu / orange.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Design cohérent blanc / bleu / orange",
      "Présentation structurée des formations",
      "Gestion des événements et grille tarifaire",
      "Déployé en production via GitHub Pages",
    ],
    images: [beta21.url, beta22.url, beta23.url],
    liveUrl: "https://pinellkn.github.io/beta2/",
    githubUrl: "https://github.com/Pinellkn/mon-portfolio/",
    accent: "orange",
  },
  {
    id: "cool-cariba",
    category: ["Web","Backend"],
    name: "Cool Cariba",
    tagline: "Refonte d'un site restaurant avec menu réel et interface soignée.",
    status: "wip",
    role: "Développeur Fullstack",
    problem:
      "Refondre un site restaurant existant pour lui donner un menu à jour, une navigation claire et un rendu moderne sur mobile comme sur desktop.",
    stack: ["PHP", "HTML", "CSS"],
    highlights: [
      "Refonte complète de l'expérience",
      "Menu réel structuré et éditable",
      "Design responsive orienté restauration",
    ],
    images: [cariba1.url, cariba2.url, cariba3.url],
    accent: "brand",
  },
];

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    items: ["PHP natif", "Laravel (Sanctum, microservices)", "Node.js", "API REST", "Auth OAuth / PKCE", "OTP / PIN"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TanStack Start / Router", "TypeScript", "HTML5 / CSS3", "TailwindCSS", "JavaScript ES6+"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter / Dart", "WebView natif", "Intégration paiements mobiles", "Apps connectées à une API REST", "QR code"],
  },
  {
    icon: Database,
    title: "Bases de données",
    items: ["MySQL", "SQLite (node:sqlite)", "Supabase / PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Outils & Intégrations",
    items: ["Git & GitHub", "FedaPay", "Google OAuth", "Vercel", "Render", "VS Code"],
  },
  {
    icon: Sparkles,
    title: "Soft skills",
    items: ["Gestion client", "Livraison en autonomie", "Travail en équipe", "Rigueur produit"],
  },
];

const experiences = [
  {
    role: "Développeur Fullstack & Backend",
    org: "Projets 2026 — FriPay, AllôPharm, EduGest-Plus, LBC, Klébé Plan Pro",
    period: "2026 — présent",
    icon: Code2,
    points: [
      "Apps mobiles Flutter et microservices Laravel (paiement mobile, API gateway, OTP / PIN)",
      "Plateformes locales : santé (réservation en pharmacie), éducation (notes et bulletins), emploi",
      "Travail en équipe sur FriPay et Klébé Plan Pro (équipe de 5 ; ma part : données et API des rendez-vous)",
    ],
  },
  {
    role: "Stagiaire Développeur",
    org: "Beta2 Afrique Technologies",
    period: "Stage — 2025",
    icon: Briefcase,
    points: [
      "Développement du site vitrine institutionnel (HTML/CSS/JS)",
      "Design cohérent blanc / bleu / orange, mobile-first",
      "Mise en ligne et itérations avec l'équipe pédagogique",
    ],
  },
  {
    role: "Développeur Fullstack — Projet de fin d'études",
    org: "AcadPay — HECM",
    period: "2024 — 2026",
    icon: GraduationCap,
    points: [
      "Conception d'une plateforme complète : 5 portails web + app Flutter",
      "Backend PHP natif, base MySQL, API REST, paiement FedaPay",
      "Soutenance validée, proposition de commercialisation à HECM",
    ],
  },
  {
    role: "Développeur freelance",
    org: "Missions clients — Nature & Compassion, Cool Cariba, Veloce",
    period: "2025 — présent",
    icon: Code2,
    points: [
      "Cycle client complet : devis, développement, livraison",
      "Intégration paiements FedaPay et auth Google OAuth (PKCE)",
      "Sites livrés en production, itérations avec retours clients",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-orange font-display text-sm font-bold text-brand-foreground">
            PL
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Pinel LOKONON
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Me contacter <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Me contacter <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-orange/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="relative animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            Développeur Fullstack disponible : Freelance, Emploi & Stage professionnel
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Développeur
            <br />
            <span className="text-gradient-brand">Fullstack</span> Web & Mobile.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Je conçois et livre des produits web et mobiles complets — de la base de données au
            paiement en ligne — avec <span className="text-foreground">PHP, Laravel, Node.js, React</span>{" "}
            et <span className="text-foreground">Flutter</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-brand-foreground transition-all hover:-translate-y-0.5 glow-brand"
            >
              Voir mes projets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={cvEmploi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              <Eye className="h-4 w-4" /> Voir le CV
            </a>
            <a
              href="#acadpay"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              Découvrir AcadPay, mon projet phare →
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: `${projects.length}+`, v: "projets réalisés" },
              { k: "5", v: "portails AcadPay" },
              { k: "3", v: "apps mobiles Flutter" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-gradient-brand">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto animate-fade-up">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/30 via-transparent to-orange/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border glow-brand animate-float-slow">
            <img
              src={pinel2.url}
              alt="Portrait de Pinel LOKONON, développeur Fullstack"
              className="h-[440px] w-[340px] object-cover md:h-[520px] md:w-[400px]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface/90 px-4 py-3 backdrop-blur glass-card">
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="h-3.5 w-3.5 text-orange" />
              <span className="text-muted-foreground">Abomey-Calavi · Maria-Gléta, Bénin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="À propos" title="Bâtir des produits qui tournent, du backend au mobile.">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,1.4fr)]">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange/20 to-brand/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img
              src={pinel1.url}
              alt="Pinel LOKONON"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="space-y-5 text-base text-muted-foreground md:text-lg">
          <p>
            Je m'appelle <span className="font-medium text-foreground">Pinel LOKONON</span>,
            développeur Fullstack basé à Abomey-Calavi (Bénin). Passé par <span className="text-foreground">HECM (Haute École de Commerce et de Management) Calavi</span>{" "}
            puis <span className="text-foreground">Beta2 Afrique Technologies</span>, j'ai appris à
            construire des applications complètes de bout en bout — du modèle de données à
            l'expérience mobile.
          </p>
          <p>
            Mon terrain de jeu : les <span className="text-foreground">API robustes en PHP / Laravel / Node.js</span>,
            les <span className="text-foreground">interfaces React</span> soignées et les{" "}
            <span className="text-foreground">apps Flutter</span> qui parlent vraiment aux utilisateurs.
            J'aime autant sécuriser une auth OAuth / PKCE que dessiner un flux de paiement FedaPay clair.
          </p>
          <p>
            Aujourd'hui, je suis{" "}
            <span className="text-foreground">développeur Fullstack disponible pour des missions freelance, un emploi ou un stage professionnel</span>{" "}
            — prêt à rejoindre une équipe qui livre, ou à apporter mes projets déjà en
            production comme point de départ à une mission.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Chip icon={Calendar}>Freelance, Emploi & Stage</Chip>
            <Chip icon={MapPin}>Abomey-Calavi · Cotonou · Remote</Chip>
            <Chip icon={CheckCircle2}>Ouvert aux missions freelance</Chip>
            <Chip icon={Briefcase}>Ouvert aux emplois CDD</Chip>
            <Chip icon={GraduationCap}>Ouvert aux stages professionnels</Chip>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={cvEmploi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Eye className="h-4 w-4" /> Voir mon CV Emploi
            </a>
            <a
              href={cvStage.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Eye className="h-4 w-4" /> Voir mon CV Stage
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Compétences"
      title="Une stack complète pour livrer du produit."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/40"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 blur-3xl transition-opacity group-hover:bg-brand/20" />
            <div className="relative">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-orange/20 text-brand">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */
const FILTERS = ["Tous", "Web", "Mobile", "Backend"] as const;
type ProjectFilter = (typeof FILTERS)[number];

function Projects() {
  const featured = projects.find((p) => p.id === "acadpay") ?? projects[0];
  const others = projects.filter((p) => p.id !== featured.id);
  const [filter, setFilter] = useState<ProjectFilter>("Tous");
  const [openId, setOpenId] = useState<string | null>(null);
  const visible = others.filter(
    (p) => filter === "Tous" || (p.category ?? ["Web"]).includes(filter),
  );
  const opened = projects.find((p) => p.id === openId) ?? null;

  return (
    <Section
      id="projects"
      eyebrow="Projets"
      title="Le cœur du portfolio."
      subtitle={`${projects.length} projets réels : un projet phare de fin d'études, des plateformes locales (santé, éducation, emploi, paiement), des missions client et des sites en production.`}
    >
      <FeaturedProject project={featured} />

      <div className="mt-20 md:mt-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Autres projets</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Cliquez sur un projet pour voir les captures, la stack et les détails.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer les projets">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectTile key={p.id} project={p} onOpen={() => setOpenId(p.id)} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mt-8 text-sm text-muted-foreground">Aucun projet dans cette catégorie.</p>
        )}
      </div>

      {opened && <ProjectDialog project={opened} onClose={() => setOpenId(null)} />}
    </Section>
  );
}

function StatusBadge({ status, className = "" }: { status?: Project["status"]; className?: string }) {
  if (status === "wip") {
    return (
      <span
        className={`rounded-full border border-orange/40 bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange backdrop-blur ${className}`}
      >
        🚧 En développement
      </span>
    );
  }
  if (status === "live") {
    return (
      <span
        className={`rounded-full border border-brand/40 bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-glow backdrop-blur ${className}`}
      >
        ● En production
      </span>
    );
  }
  return null;
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div
      id="acadpay"
      className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-brand/40 bg-surface/40 p-5 backdrop-blur glow-brand md:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
      <div className="relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-orange px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground">
          <Star className="h-3.5 w-3.5" /> Projet phare
        </div>
        <ProjectCard project={project} variant="featured" />
        {project.metrics && project.metrics.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 md:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.v} className="rounded-2xl border border-border bg-background/50 p-4">
                <dt className="font-display text-3xl font-bold text-gradient-brand">{m.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.v}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const cover = project.images[0];
  const extra = project.stack.length - 4;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Voir le projet ${project.name}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 text-left backdrop-blur transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        {cover ? (
          <img
            src={cover}
            alt={`${project.name} — aperçu`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-muted-foreground">
            <Wrench className="h-6 w-6" />
          </div>
        )}
        <StatusBadge status={project.status} className="absolute left-3 top-3" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold leading-tight">{project.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-background/50 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {s}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground">+{extra}</span>
          )}
        </div>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-brand-glow">
          Voir le projet
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.querySelector("[data-lightbox]")) onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] overflow-y-auto bg-background/90 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div className="mx-auto my-6 max-w-6xl px-4 md:my-10 md:px-6">
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative rounded-3xl border border-border bg-background p-5 shadow-2xl md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur transition-colors hover:bg-surface"
          >
            <X className="h-5 w-5" />
          </button>
          <ProjectCard project={project} variant="dialog" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  variant = "dialog",
}: {
  project: Project;
  variant?: "featured" | "dialog";
}) {
  const accentClass = project.accent === "orange" ? "from-orange/30" : "from-brand/30";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const featured = variant === "featured";
  const thumbs = project.images.slice(1);
  const shownThumbs = thumbs.slice(0, 4);
  const hidden = thumbs.length - shownThumbs.length;

  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Gallery */}
      <div className="relative">
        <div
          className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${accentClass} via-transparent to-transparent blur-3xl`}
        />
        {project.images.length > 0 ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Agrandir la capture — ${project.name}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={project.images[0]}
                alt={`${project.name} — aperçu principal`}
                className="aspect-[16/10] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/30 group-hover:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/90 text-foreground backdrop-blur">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
            </button>
            {shownThumbs.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {shownThumbs.map((src, i) => (
                  <button
                    type="button"
                    key={src}
                    onClick={() => setLightboxIndex(i + 1)}
                    aria-label={`Agrandir la capture ${i + 2} — ${project.name}`}
                    className="group relative overflow-hidden rounded-lg border border-border"
                  >
                    <img
                      src={src}
                      alt={`${project.name} — capture ${i + 2}`}
                      className="aspect-[4/3] w-full object-cover object-top transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    {hidden > 0 && i === shownThumbs.length - 1 ? (
                      <div className="absolute inset-0 grid place-items-center bg-background/70 font-display text-lg font-bold text-foreground backdrop-blur-[2px]">
                        +{hidden + 1}
                      </div>
                    ) : (
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/30 group-hover:opacity-100">
                        <Maximize2 className="h-4 w-4 text-foreground" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-dashed border-border bg-surface/40">
            <div className="grid h-full place-items-center text-center text-sm text-muted-foreground">
              <div>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-surface">
                  <Wrench className="h-5 w-5 text-orange" />
                </div>
                <p className="mt-3">Captures bientôt disponibles</p>
              </div>
            </div>
          </div>
        )}
        {lightboxIndex !== null && (
          <ImageLightbox
            images={project.images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {project.role ?? "Projet"}
          </span>
          <StatusBadge status={project.status} />
        </div>
        <h3
          className={`mt-2 font-display font-bold ${
            featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
          }`}
        >
          {project.name}
        </h3>
        <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-6 rounded-xl border border-border bg-surface/50 p-4 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Problème résolu
          </p>
          <p className="mt-2 text-sm text-foreground/90">{project.problem}</p>
        </div>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-glow" />
              <span className="text-muted-foreground">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Stack & compétences
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Voir le live <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-foreground hover:bg-surface"
              >
                <Github className="h-3.5 w-3.5" /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  return (
    <Section id="experience" eyebrow="Expérience" title="Parcours & missions.">
      <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
        {experiences.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[35px] md:-left-[43px] top-1 grid h-8 w-8 place-items-center rounded-full border border-border bg-surface text-brand">
              <e.icon className="h-4 w-4" />
            </span>
            <div className="rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-brand-glow">{e.org}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: "lokononpinel@gmail.com",
      href: "mailto:lokononpinel@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+229 01 65 25 32 79",
      href: "https://wa.me/2290165253279",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+229 01 42 05 14 99",
      href: "tel:+2290142051499",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pinel LOKONON",
      href: "https://www.linkedin.com/in/pinel-lokonon-665610416",
    },
  ];
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Travaillons ensemble."
      subtitle="Recruteur, client ou porteur de projet — écrivez-moi, je réponds vite."
    >
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur md:p-12">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="font-display text-3xl font-bold md:text-4xl">
              Une mission, un projet, une idée qui traîne ?
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Je suis <span className="text-foreground">développeur Fullstack disponible pour des missions freelance, un emploi ou un stage professionnel</span>. Basé à{" "}
              <span className="text-foreground">Abomey-Calavi · Maria-Gléta, Bénin</span> — ouvert au remote.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:lokononpinel@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-medium text-brand-foreground glow-brand transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Envoyer un email
              </a>
              <a
                href="https://wa.me/2290165253279"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 font-medium text-brand-foreground glow-orange transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-brand/40 hover:bg-background/70"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface text-brand">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">{c.value}</p>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div>
          <p className="font-display text-sm font-semibold">Pinel LOKONON</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Développeur Fullstack Web & Mobile · Abomey-Calavi, Bénin
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/pinel-lokonon-665610416"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/pinellkn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="mailto:lokononpinel@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pinel LOKONON. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- LIGHTBOX ---------------- */
function ImageLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && images.length > 1) onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft" && images.length > 1)
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, images.length, onClose, onNavigate]);

  return (
    <div
      data-lightbox className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur transition-colors hover:bg-surface"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          aria-label="Photo précédente"
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur transition-colors hover:bg-surface md:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[92vw] rounded-2xl border border-border object-contain shadow-2xl"
      />

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          aria-label="Photo suivante"
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur transition-colors hover:bg-surface md:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

/* ---------------- SHARED ---------------- */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-orange" /> {eyebrow}
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Chip({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-foreground">
      <Icon className="h-3.5 w-3.5 text-brand-glow" />
      {children}
    </span>
  );
}
