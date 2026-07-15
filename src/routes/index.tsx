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

export const Route = createFileRoute("/")({
  component: Index,
});

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
};

const projects: Project[] = [
  {
    id: "acadpay",
    name: "AcadPay",
    tagline:
      "Plateforme complète de gestion académique — 5 portails web, app mobile Flutter et paiements intégrés.",
    status: "live",
    role: "Développeur Fullstack — projet de fin d'études (HECM)",
    problem:
      "Digitaliser tout le cycle académique et financier d'une université : inscriptions, scolarité, comptabilité, admin — pour étudiants, secrétaires, comptables, admins et superadmins.",
    stack: ["PHP natif", "MySQL", "Flutter / Dart", "REST API", "FedaPay"],
    highlights: [
      "5 portails web dédiés (étudiant, secrétaire, comptable, admin, superadmin)",
      "App mobile Flutter — paiement FedaPay via WebView, avatar builder, upload docs",
      "API REST + base MySQL structurée pour la scolarité complète",
      "Projet de soutenance validé — proposition de commercialisation à HECM",
    ],
    images: [acadpay1.url, acadpay2.url, acadpay3.url, acadpay4.url, acadpay5.url],
    accent: "brand",
  },
  {
    id: "veloce",
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
    githubUrl: "https://pinellkn.github.io/beta2/",
    accent: "orange",
  },
  {
    id: "cool-cariba",
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
    items: ["PHP natif", "Laravel", "Node.js", "API REST", "Auth OAuth / PKCE"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "TypeScript", "HTML5 / CSS3", "TailwindCSS", "JavaScript ES6+"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter / Dart", "WebView natif", "Intégration paiements mobiles"],
  },
  {
    icon: Database,
    title: "Bases de données",
    items: ["MySQL", "SQLite (node:sqlite)", "Supabase / PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Outils & Intégrations",
    items: ["Git & GitHub", "FedaPay", "Google OAuth", "Render", "VS Code"],
  },
  {
    icon: Sparkles,
    title: "Soft skills",
    items: ["Gestion client", "Livraison en autonomie", "Travail en équipe", "Rigueur produit"],
  },
];

const experiences = [
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
            Disponible pour un stage — juillet à octobre 2026
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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              ou me contacter →
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "5+", v: "projets livrés" },
              { k: "5", v: "portails AcadPay" },
              { k: "3+", v: "stacks maîtrisées" },
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
              <span className="text-muted-foreground">Calavi · Parana, Bénin</span>
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
            développeur Fullstack basé à Calavi (Bénin). Passé par <span className="text-foreground">HECM</span>{" "}
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
            Aujourd'hui, je cherche un <span className="text-foreground">stage de 3 à 4 mois</span> pour
            rejoindre une équipe qui livre — et apporter mes projets déjà en production comme point de
            départ. Je reste aussi <span className="text-foreground">ouvert aux opportunités en CDD</span>.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Chip icon={Calendar}>Stage — Juillet → Octobre 2026</Chip>
            <Chip icon={MapPin}>Calavi · Cotonou · Remote</Chip>
            <Chip icon={CheckCircle2}>Ouvert au CDI après stage</Chip>
            <Chip icon={Briefcase}>Ouvert aux missions CDD</Chip>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={cvEmploi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Eye className="h-4 w-4" /> Voir le CV — Emploi
            </a>
            <a
              href={cvStage.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Eye className="h-4 w-4" /> Voir le CV — Stage
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
function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projets"
      title="Le cœur du portfolio."
      subtitle="Cinq projets réels — dont un projet phare de fin d'études, deux missions client et des sites en production."
    >
      <div className="space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const accentClass = project.accent === "orange" ? "from-orange/30" : "from-brand/30";
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Gallery */}
      <div className={`relative ${reversed ? "lg:order-2" : ""}`}>
        <div className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${accentClass} via-transparent to-transparent blur-3xl`} />
        {project.images.length > 0 ? (
          <div className="relative">
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Agrandir la photo — ${project.name}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <img
                src={project.images[0]}
                alt={`${project.name} — aperçu principal`}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/30 group-hover:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/90 text-foreground backdrop-blur">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>
            </button>
            {project.images.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-3">
                {project.images.slice(1, 5).map((src, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setLightboxIndex(i + 1)}
                    aria-label={`Agrandir la photo ${i + 2} — ${project.name}`}
                    className="group relative overflow-hidden rounded-lg border border-border"
                  >
                    <img
                      src={src}
                      alt={`${project.name} — capture ${i + 2}`}
                      className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-opacity group-hover:bg-background/30 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4 text-foreground" />
                    </div>
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
      <div className={`flex flex-col justify-center ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
            0{index + 1} — {project.role?.split(" — ")[0] ?? "Projet"}
          </span>
          {project.status === "wip" && (
            <span className="rounded-full border border-orange/40 bg-orange/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange">
              🚧 En développement
            </span>
          )}
          {project.status === "live" && (
            <span className="rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-glow">
              ● En production
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">{project.name}</h3>
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

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
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
      value: "pinel-lokonon",
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
              Un stage, un projet, une idée qui traîne ?
            </h3>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Je suis disponible pour un <span className="text-foreground">stage 3–4 mois</span>{" "}
              (juillet → octobre 2026) et pour des missions freelance. Basé à{" "}
              <span className="text-foreground">Calavi · Parana, Bénin</span> — ouvert au remote.
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
            Développeur Fullstack Web & Mobile · Calavi, Bénin
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm animate-fade-up"
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
