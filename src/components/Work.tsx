import { additionalImpact, caseStudies } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
          Selected work
        </p>
        <h2 className="mt-3 font-display text-3xl text-brown-900 sm:text-4xl">
          Programs I led from ambiguity to impact
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} delay={(i % 2) * 0.1}>
            <article className="group flex h-full flex-col rounded-2xl border border-brown-200 bg-cream-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-300/20">
              <p className="text-xs font-medium uppercase tracking-wide text-brown-500">
                {study.org} &middot; {study.timeframe}
              </p>
              <h3 className="mt-2 font-display text-2xl text-brown-900">
                {study.title}
              </h3>

              <dl className="mt-5 space-y-4 text-sm text-brown-700">
                <div>
                  <dt className="font-medium text-brown-900">Context</dt>
                  <dd className="mt-1">{study.context}</dd>
                </div>
                <div>
                  <dt className="font-medium text-brown-900">My role</dt>
                  <dd className="mt-1">{study.role}</dd>
                </div>
                <div>
                  <dt className="font-medium text-brown-900">The work</dt>
                  <dd className="mt-1">{study.work}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-brown-200 pt-6">
                {study.impact.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-orange-300/40 px-4 py-1.5 text-sm font-medium text-brown-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-10 rounded-2xl border border-brown-200 bg-cream-50 p-8">
          <h3 className="font-display text-lg text-brown-900">
            Additional impact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-brown-700">
            {additionalImpact.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
