import { metrics } from "@/lib/content";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

export function ProofBand() {
  return (
    <section id="proof" className="border-y border-brown-200 bg-cream-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl text-orange-500 sm:text-4xl">
                <CountUp
                  value={metric.value}
                  decimals={metric.decimals}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-2 text-sm text-brown-700">{metric.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
