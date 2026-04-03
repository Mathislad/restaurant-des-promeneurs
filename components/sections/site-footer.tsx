import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-7 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteContent.name}</p>
        <p>{siteContent.village} · {siteContent.postcodeCity}</p>
      </div>
    </footer>
  );
}
