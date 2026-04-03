"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import { IlluWheatSprig, IlluFlowers, IlluFork, IlluLeaf } from "@/components/ui/illustrations";
import { Logo } from "@/components/ui/logo";
import { HeroPath } from "@/components/ui/hero-path";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-14 pt-24 sm:px-10 md:pb-20 lg:px-16">
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <motion.div
        aria-hidden
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(181,126,76,0.28),_transparent_66%)] blur-2xl"
        animate={{ y: [0, -15, 0], x: [0, 14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(137,147,116,0.24),_transparent_70%)] blur-2xl"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo signature — en haut de page */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 top-6 z-20 w-16 sm:left-10 sm:top-8 sm:w-20 lg:left-16 lg:w-24"
      >
        <Logo variant="dark" className="h-full w-full" />
      </motion.div>

      {/* ── Chemin narratif horizontal droite → gauche ── */}
      <HeroPath />

      {/* ── Visuels décoratifs — repositionnés aux coins pour ne pas couvrir le chemin ── */}

      {/* Blé — coin supérieur droit, loin du chemin */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 18, rotate: -8 }}
        animate={{ opacity: 0.72, y: 0, rotate: -14 }}
        transition={{ duration: 1.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-3 top-3 w-16 sm:right-6 sm:top-4 sm:w-20 md:right-10 md:w-24 lg:right-14"
      >
        <IlluWheatSprig className="h-full w-full" />
      </motion.div>

      {/* Fleurs — coin inférieur droit */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 0.62, x: 0 }}
        transition={{ duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-32 right-3 w-16 sm:right-6 sm:w-20 md:bottom-36 md:right-10 md:w-24"
      >
        <IlluFlowers className="h-full w-full" />
      </motion.div>

      {/* Fourche — bord gauche, milieu bas, sous le chemin */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: 12 }}
        animate={{ opacity: 0.48, rotate: 8 }}
        transition={{ duration: 2.0, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-40 left-3 w-7 sm:left-6 sm:w-9 md:left-10 md:bottom-44 md:w-11"
      >
        <IlluFork className="h-full w-full" />
      </motion.div>

      {/* Feuille — coin inférieur gauche */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ duration: 1.5, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-24 left-6 w-12 sm:left-10 sm:w-14 md:left-16 md:w-16"
      >
        <IlluLeaf className="h-full w-full" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-5 text-xs uppercase tracking-[0.24em] text-[var(--muted)]"
        >
          Nolhac · Saint-Paulien · Haute-Loire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25 }}
          className="font-serif-display max-w-3xl text-4xl leading-[1.04] text-[var(--foreground)] sm:text-5xl md:text-6xl"
        >
          {siteContent.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--soft-foreground)] sm:text-base"
        >
          {siteContent.heroSubtitle}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          href="#chemin"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--line)] px-6 py-3 text-sm tracking-wide text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(181,126,76,0.08)]"
        >
          Suivre le chemin
          <span aria-hidden>→</span>
        </motion.a>
      </div>
    </section>
  );
}
