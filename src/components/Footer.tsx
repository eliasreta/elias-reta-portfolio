import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-brown-200 bg-cream-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-brown-700 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-orange-500"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-orange-500"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
