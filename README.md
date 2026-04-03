# Restaurant des Promeneurs — Site vitrine

Site vitrine premium pour le **Restaurant des Promeneurs**, Nolhac, 43350 Saint-Paulien (Haute-Loire).

Stack : **Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Framer Motion**

---

## Démarrage rapide

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & déploiement local

```bash
npm run build
npm run start
```

---

## Déployer sur Vercel

### 1. Créer le repo GitHub

```bash
git remote add origin https://github.com/TON_USERNAME/restaurant-des-promeneurs.git
git branch -M main
git push -u origin main
```

### 2. Déployer

Importer le repo sur [vercel.com/new](https://vercel.com/new) — framework détecté automatiquement.  
Aucune variable d'environnement requise.

Ou via CLI :

```bash
npx vercel --prod
```

---

## Structure des fichiers

```
app/
  layout.tsx          ← métadonnées, polices, JSON-LD
  page.tsx            ← composition de la landing
  globals.css         ← tokens design, grain, scrollbar

components/
  sections/
    hero.tsx          ← section plein écran d'entrée
    chemin.tsx        ← scroll narratif sticky + dérive horizontale
    soul.tsx          ← fragments d'âme / citations
    signs.tsx         ← signes de vie / détails concrets
    revelation.tsx    ← informations pratiques, CTA
    footer.tsx        ← pied de page discret
  ui/
    reveal.tsx        ← animation de révélation au scroll (Framer Motion)

lib/
  site-content.ts     ← TOUTES les données texte + JSON-LD (modifier ici)
```

---

## Personnalisation

### Modifier les textes

Tout le contenu éditorial est centralisé dans :

```
lib/site-content.ts
```

Modifier `heroTitle`, `heroSubtitle`, `pathFragments`, `soulFragments`, `signs`, `hours`, etc.

### Remplacer les images

Actuellement le hero utilise un fond CSS (gradient + grain).  
Pour ajouter une vraie photo :

1. Déposer le fichier dans `public/images/hero.jpg`
2. Dans `components/sections/hero.tsx`, remplacer le fond par :

```tsx
import Image from "next/image";
// Dans le JSX, ajouter dans la section :
<Image
  src="/images/hero.jpg"
  alt="Restaurant des Promeneurs"
  fill
  className="object-cover object-center"
  priority
/>
```

### Mettre à jour l'URL de déploiement

Dans `app/layout.tsx`, remplacer :
```
https://restaurant-des-promeneurs.vercel.app
```
par l'URL Vercel réelle une fois le projet déployé.

### Mettre à jour le lien Google Maps

Dans `lib/site-content.ts`, champ `mapsLink` — remplacer par le lien Google Maps exact du restaurant.

---

## Polices utilisées

- **Playfair Display** (serif) — titres expressifs
- **Lato** (sans-serif) — corps de texte, légendes

Chargées via `next/font/google`, auto-hébergées, zéro requête externe.

---

## SEO inclus

- `<title>` et `<meta description>` optimisés
- Open Graph (Facebook / LinkedIn)
- Twitter Card
- JSON-LD `Restaurant` (Schema.org) dans `<head>`
- Langue `fr`, robots `index, follow`
