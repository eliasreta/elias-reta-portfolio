import { approach } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
          How I work
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-brown-900 sm:text-4xl">
          Empathy and rigor, applied to systems that can&rsquo;t afford to be
          wrong
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {approach.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-brown-200 bg-cream-100 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300/50 font-display text-lg text-brown-900">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-xl text-brown-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-700">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
