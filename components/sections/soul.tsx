import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-content";

export function SoulSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">L’âme du lieu</p>
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
    </section>
  );
}
