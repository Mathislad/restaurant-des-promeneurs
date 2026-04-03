import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-content";

export function RevelationSection() {
  return (
    <section className="px-6 pb-16 pt-14 sm:px-10 sm:pb-20 lg:px-16 lg:pt-18">
      <Reveal>
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--foreground)] p-6 text-[var(--foreground-soft)] shadow-[0_20px_50px_rgba(7,8,7,0.28)] sm:p-9 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[rgba(249,246,239,0.7)]">La révélation</p>

          <h2 className="mt-4 font-serif-display text-3xl text-[var(--foreground-soft)] sm:text-4xl">
            {siteContent.name}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[rgba(249,246,239,0.82)] sm:text-base">
            {siteContent.village}, {siteContent.postcodeCity} · {siteContent.region}
            <br />
            {siteContent.near}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[rgba(249,246,239,0.66)]">Contact</h3>
              <a
                href={siteContent.phoneLink}
                className="mt-3 inline-block font-serif-display text-3xl leading-none text-[var(--foreground-soft)] transition-opacity hover:opacity-85"
              >
                {siteContent.phoneDisplay}
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteContent.phoneLink}
                  className="rounded-full border border-[rgba(249,246,239,0.4)] px-5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground-soft)] hover:bg-[rgba(249,246,239,0.08)]"
                >
                  Appeler
                </a>
                <a
                  href={siteContent.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[rgba(249,246,239,0.4)] px-5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--foreground-soft)] hover:bg-[rgba(249,246,239,0.08)]"
                >
                  Itinéraire
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(249,246,239,0.2)] bg-[rgba(249,246,239,0.04)] p-5">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[rgba(249,246,239,0.66)]">Repères d’ouverture</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[rgba(249,246,239,0.88)]">
                {siteContent.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
