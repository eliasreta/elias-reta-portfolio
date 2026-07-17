"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-cream-200/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-orange-500"
        >
          {site.role} · Microsoft
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl leading-tight text-brown-900 sm:text-5xl md:text-6xl"
        >
          I turn ambiguous, high-stakes commerce systems into{" "}
          <span className="italic text-orange-500">measurable outcomes</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-brown-700"
        >
          Three years leading Microsoft&rsquo;s commerce, payouts, and
          platform-security ecosystems across Xbox, M365, and Digital Retail
          Commerce &mdash; connecting cross-org stakeholders to ship what
          ambiguity alone couldn&rsquo;t.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-orange-400 px-7 py-3 text-sm font-medium text-brown-900 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-orange-500"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-brown-200 px-7 py-3 text-sm font-medium text-brown-900 transition-transform hover:-translate-y-0.5 hover:border-orange-400"
          >
            View my work
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.a
          href="#proof"
          aria-label="Scroll to metrics"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 inline-flex text-brown-500"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
