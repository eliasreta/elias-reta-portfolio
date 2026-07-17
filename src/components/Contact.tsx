import { ArrowUpRight, Download, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-brown-200 bg-cream-100 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl"
          />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            Let&rsquo;s talk
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl text-brown-900 sm:text-4xl">
            Have a complex, high-stakes program that needs an owner?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brown-700">
            I&rsquo;m open to conversations about product and technical
            program leadership roles. The fastest ways to reach me are below.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full bg-orange-400 px-7 py-3 text-sm font-medium text-brown-900 transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
            >
              <Mail size={16} />
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-brown-200 px-7 py-3 text-sm font-medium text-brown-900 transition-transform hover:-translate-y-0.5 hover:border-orange-400"
            >
              <LinkedinIcon size={16} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href={site.resumeHref}
              download
              className="flex items-center gap-2 rounded-full border border-brown-200 px-7 py-3 text-sm font-medium text-brown-900 transition-transform hover:-translate-y-0.5 hover:border-orange-400"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
