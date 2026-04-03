"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/lib/site-content";

export function CheminSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const xDrift = useTransform(scrollYProgress, [0.25, 0.68], ["0%", "-34%"]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.28]);
  const introY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
  const endPanelOpacity = useTransform(scrollYProgress, [0.6, 0.86], [0.2, 1]);

  return (
    <section id="chemin" ref={sectionRef} className="relative h-[310vh]">
      <div className="sticky top-0 h-screen overflow-hidden border-y border-[var(--line)] bg-[var(--background)]">
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute left-0 right-0 top-16 z-20 px-6 sm:px-10 lg:px-16"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Le chemin</p>
          <p className="mt-4 max-w-md font-serif-display text-2xl leading-tight text-[var(--foreground)] sm:text-3xl">
            Descendre. Dériver. Revenir au cœur.
          </p>
        </motion.div>

        <motion.div
          style={{ x: xDrift }}
          className="absolute left-0 top-[28vh] grid w-[180vw] grid-cols-3 gap-5 px-6 sm:gap-8 sm:px-10 md:w-[150vw] lg:w-[130vw] lg:px-16"
        >
          {siteContent.pathFragments.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[var(--line)] bg-[rgba(249,246,239,0.62)] p-6 shadow-[0_12px_34px_rgba(15,17,15,0.06)] backdrop-blur-sm sm:p-8"
            >
              <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif-display text-2xl text-[var(--foreground)]">{item.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--soft-foreground)] sm:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </motion.div>

        <motion.div
          style={{ opacity: endPanelOpacity }}
          className="absolute bottom-12 right-6 max-w-xs rounded-2xl border border-[var(--line)] bg-[rgba(35,38,33,0.92)] px-5 py-4 text-[var(--foreground-soft)] sm:bottom-16 sm:right-10 sm:max-w-sm lg:right-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[rgba(249,246,239,0.75)]">Un indice</p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">
            La vraie découverte commence quand on coupe le moteur et qu’on pousse la porte.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
