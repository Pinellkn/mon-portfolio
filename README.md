# Pinel LOKONON — Portfolio

Portfolio personnel de **Pinel LOKONON**, développeur Fullstack Web & Mobile basé à Calavi / Parana, Bénin. Présente mon parcours, mes compétences et mes projets réels (AcadPay, Veloce, ONG Nature & Compassion, Beta2, Cool Cariba), avec CV consultable en ligne et contact direct (email, WhatsApp, LinkedIn).

## 🎯 Contexte

Site vitrine conçu pour appuyer ma recherche de stage (3-4 mois, juillet → octobre 2026) et mes missions freelance, en montrant des projets réellement livrés plutôt qu'une simple liste de compétences.

## ✨ Fonctionnalités

- **Hero** avec présentation rapide, statut de disponibilité et accès direct au CV
- **À propos** avec parcours, stack de prédilection et statut (stage / CDD / CDI)
- **Compétences** groupées par catégorie (Backend, Frontend, Mobile, Bases de données, Outils, Soft skills)
- **Projets** détaillés (problème résolu, stack, points forts, liens live/GitHub) avec galerie photo
- **Modale plein écran (lightbox)** sur les images de projets : navigation précédent/suivant, compteur, fermeture au clic ou à la touche Échap
- **Expérience** présentée en timeline (stage, projet de fin d'études, missions freelance)
- **Contact** avec liens directs email, WhatsApp, téléphone, LinkedIn
- **CV consultable** en ligne (version Emploi et version Stage), sans téléchargement forcé
- **Thème clair / sombre** avec bascule manuelle
- Design entièrement **responsive** (mobile → desktop)

## 🛠️ Stack technique

- **[TanStack Start](https://tanstack.com/start)** (React 19, SSR/streaming via Nitro)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix UI) pour les composants de base
- **lucide-react** pour les icônes
- **Bun** comme gestionnaire de paquets (npm/yarn compatibles également)

## 📂 Structure du projet

```
src/
  routes/
    index.tsx       # Page principale (Hero, About, Skills, Projects, Experience, Contact)
    __root.tsx       # Layout racine + métadonnées SEO
  components/ui/      # Composants shadcn/ui
  hooks/               # Hooks (thème, mobile, etc.)
  styles.css           # Styles globaux + variables de thème
public/
  assets/
    me/                # Photos personnelles
    projects/          # Captures d'écran par projet (acadpay, veloce, ong, beta2, cool-cariba)
    CV_Pinel_Emploi.pdf
    CV_Pinel_Stage.pdf
  favicon.ico          # Logo "PL"
```

## 🚀 Installation et lancement local

```bash
git clone https://github.com/Pinellkn/your-digital-showcase.git
cd your-digital-showcase

# avec Bun (recommandé)
bun install
bun run dev

# ou avec npm
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000` (ou le port indiqué dans le terminal).

## 📦 Scripts disponibles

| Commande         | Description                              |
|------------------|-------------------------------------------|
| `dev`            | Lance le serveur de développement         |
| `build`          | Build de production                       |
| `build:dev`      | Build en mode développement                |
| `preview`        | Prévisualise le build de production        |
| `lint`           | Vérifie le code avec ESLint                |
| `format`         | Formate le code avec Prettier              |

## 🌐 Déploiement

Le build (Nitro) est configuré par défaut sur un preset **Cloudflare Workers**. Pour déployer ailleurs (Render, Vercel, VPS Node.js...), il faut adapter le preset Nitro (`node-server` pour un hébergeur Node classique) dans la configuration Vite avant de builder.

```bash
bun run build
```

## 📸 Aperçu

*(à compléter avec une capture d'écran de la page d'accueil)*

## 👤 Contact

**Pinel LOKONON** — Développeur Fullstack Web & Mobile
📞 +229 01 42 05 14 99 / +229 01 47 64 26 01
💬 WhatsApp : +229 01 65 25 32 79
📧 lokononpinel@gmail.com
💼 [LinkedIn](https://www.linkedin.com/in/pinel-lokonon-665610416)
📍 Calavi · Parana, Bénin
