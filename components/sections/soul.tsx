import { Reveal } from "@/components/ui/reveal";
import { ScrollVisual } from "@/components/ui/scroll-visual";
import { IlluPlate, IlluWineGlass, IlluBowl } from "@/components/ui/illustrations";
import { siteContent } from "@/lib/site-content";

export function SoulSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      {/* Visuels flottants qui apparaissent et disparaissent au scroll */}
      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute -right-6 top-12 w-36 opacity-70 sm:right-2 sm:w-44 md:right-8 md:w-52"
        delay={0.1}
      >
        <IlluPlate className="h-full w-full" />
      </ScrollVisual>

      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute right-16 top-48 w-16 opacity-60 sm:right-24 sm:w-20 md:right-32 md:w-24"
        delay={0.3}
      >
        <IlluWineGlass className="h-full w-full" />
      </ScrollVisual>

      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute -left-4 bottom-16 w-28 opacity-50 sm:left-2 sm:w-36 md:left-6 md:w-44"
        delay={0.2}
      >
        <IlluBowl className="h-full w-full" />
      </ScrollVisual>

      <div className="relative z-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">L'âme du lieu</p>
      </Reveal>

      <Reveal delay={0.08} className="mt-4 max-w-2xl">
        <h2 className="font-serif-display text-3xl leading-[1.08] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
          Ici, on ne vient pas seulement manger.
          <br />
          On vient retrouver une chaleur.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {siteContent.soulFragments.map((fragment, index) => (
          <Reveal key={fragment} delay={0.1 + index * 0.08}>
            <blockquote className="rounded-2xl border border-[var(--line)] bg-[rgba(249,246,239,0.68)] p-5 text-sm leading-relaxed text-[var(--soft-foreground)] sm:p-6 sm:text-base">
              “{fragment}”
            </blockquote>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  );
}
