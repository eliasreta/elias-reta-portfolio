import { experience } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-cream-100 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-500">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl text-brown-900 sm:text-4xl">
            A cross-org leader who asks &ldquo;why&rdquo; before &ldquo;how&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-brown-700">
            <p>
              I&rsquo;m a Product Manager / Technical Program Manager with
              three years driving Microsoft&rsquo;s commerce, payouts, and
              platform-security ecosystems across Xbox, M365, and Digital
              Retail Commerce. I connect the stakeholders that ambiguous,
              dependency-heavy programs need to move together, and turn that
              alignment into measurable outcomes.
            </p>
            <p>
              I hold a BS in Computational Media from Georgia Tech, blending
              computer science with media and design &mdash; a foundation
              that carries into a personal creative practice across audio
              production, video, photography, and dance. That builder&rsquo;s
              eye shows up in how I approach product work: with craft, not
              just process.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-brown-200 bg-cream-50 p-8">
            <h3 className="font-display text-lg text-brown-900">
              Career snapshot
            </h3>
            <ol className="mt-6 space-y-6 border-l border-brown-200 pl-6">
              {experience.map((role) => (
                <li key={role.title} className="relative">
                  <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-cream-50 bg-orange-400" />
                  <p className="text-xs font-medium uppercase tracking-wide text-orange-500">
                    {role.timeframe}
                  </p>
                  <p className="mt-1 text-sm text-brown-900">{role.title}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-brown-200 pt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-brown-500">
                Education
              </p>
              <p className="mt-1 text-sm text-brown-900">
                BS, Computational Media &mdash; Georgia Institute of Technology
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
