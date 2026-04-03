import { Reveal } from "@/components/ui/reveal";
import { ScrollVisual } from "@/components/ui/scroll-visual";
import { IlluWheatSprig, IlluLeaf, IlluRoad, IlluFlowers } from "@/components/ui/illustrations";
import { siteContent } from "@/lib/site-content";

export function SignsSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(137,147,116,0.15),transparent_45%),radial-gradient(circle_at_90%_88%,rgba(181,126,76,0.18),transparent_40%)]" />

      {/* Visuels éphémères qui apparaissent et disparaissent */}
      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute right-0 top-0 w-28 opacity-60 sm:w-36 md:w-44"
        delay={0.15}
      >
        <IlluWheatSprig className="h-full w-full" />
      </ScrollVisual>

      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute -left-2 top-1/3 w-20 opacity-55 sm:w-24 md:w-32"
        delay={0.25}
      >
        <IlluLeaf className="h-full w-full" />
      </ScrollVisual>

      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute bottom-10 left-0 right-0 mx-auto w-56 opacity-40 sm:w-72 md:w-96"
        delay={0.35}
      >
        <IlluRoad className="h-full w-full" />
      </ScrollVisual>

      <ScrollVisual
        mode="ephemeral"
        className="pointer-events-none absolute -right-4 bottom-16 w-24 opacity-55 sm:w-32 md:w-40"
        delay={0.2}
      >
        <IlluFlowers className="h-full w-full" />
      </ScrollVisual>

      <div className="relative z-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Signes de vie</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 max-w-2xl">
          <h2 className="font-serif-display text-3xl leading-[1.1] text-[var(--foreground)] sm:text-4xl">
            Des détails concrets.
            <br />
            Jamais tout à fait dévoilés.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {siteContent.signs.map((item, index) => (
            <Reveal key={item.title} delay={0.14 + index * 0.06}>
              <article className="group h-full rounded-2xl border border-[var(--line)] bg-[rgba(249,246,239,0.74)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_14px_30px_rgba(15,17,15,0.08)]">
                <h3 className="font-serif-display text-2xl text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--soft-foreground)] sm:text-base">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
