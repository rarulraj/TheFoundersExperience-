"use client";

import { FadeIn } from "@/components/FadeIn";
import { FoundingSponsor } from "@/components/FoundingSponsor";
import { LogoMarquee } from "@/components/LogoMarquee";
import { companiesWorkedWith, companiesWorkedWithNote } from "@/data/content";

export function Sponsors() {
  return (
    <section className="py-section-sm section-divider overflow-hidden bg-surface/70">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Backed by operators</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-h2 text-ink">
            Made by people who have worked with the best.
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.08}>
        <div className="relative mt-12 py-4">
          <div className="relative space-y-2">
            <LogoMarquee items={companiesWorkedWith} />
            <LogoMarquee items={[...companiesWorkedWith].reverse()} reverse />
          </div>
        </div>
        <p className="container-site caption mt-4 text-center text-muted-foreground">
          {companiesWorkedWithNote}
        </p>
      </FadeIn>

      <div className="container-site">
        <FadeIn delay={0.12}>
          <FoundingSponsor className="mt-14" />
        </FadeIn>
      </div>
    </section>
  );
}
