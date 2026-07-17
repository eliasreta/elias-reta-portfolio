import { Quote } from "lucide-react";
import { site, testimonials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            What colleagues say
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown-900 sm:text-4xl">
            Recommendations
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col rounded-2xl border border-brown-200 bg-cream-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-300/20"
              >
                <Quote className="text-orange-400" size={28} />
                <p className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-brown-900">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-brown-200 pt-4">
                  <p className="font-medium text-brown-900">{t.name}</p>
                  <p className="mt-1 text-sm text-brown-700">{t.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-orange-500">
                    {t.relationship} &middot; View on LinkedIn
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
