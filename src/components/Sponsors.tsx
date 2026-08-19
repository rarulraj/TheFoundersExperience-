"use client";

import { FadeIn } from "@/components/FadeIn";
import { companiesWorkedWith, companiesWorkedWithNote, partnerLogos } from "@/data/content";

export function Sponsors() {
  return (
    <section className="section-stack border-t border-border/60">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Sponsors
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
            Backed by TSE Technical and TSE.
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="flex min-h-14 items-center justify-center rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold tracking-wide text-ink/80"
              >
                {logo}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-12 text-sm text-muted-foreground">
            Made by people who have worked with
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {companiesWorkedWith.map((company) => (
              <div
                key={company}
                className="flex min-h-14 items-center justify-center rounded-xl border border-border bg-surface px-3 py-3 text-center text-sm font-semibold tracking-wide text-ink/80"
              >
                {company}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {companiesWorkedWithNote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
