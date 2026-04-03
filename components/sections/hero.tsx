"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";

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
