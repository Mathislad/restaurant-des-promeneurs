import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif-display text-base text-[var(--foreground)]">
            {siteContent.name}
          </p>
          <p className="mt-0.5 text-xs text-[var(--muted)]">
            {siteContent.village}, {siteContent.postcodeCity}
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-[var(--muted)]">
          <a
            href={siteContent.phoneLink}
            className="transition-colors hover:text-[var(--foreground)]"
          >
            {siteContent.phoneDisplay}
          </a>
          <span aria-hidden className="text-[var(--line)]">|</span>
          <a
            href={siteContent.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            Itinéraire
          </a>
        </div>
      </div>
    </footer>
  );
}
