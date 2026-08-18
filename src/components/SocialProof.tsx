"use client";

import { FadeIn } from "@/components/FadeIn";
import { memberLogos, socialProofPoints } from "@/data/content";

export function SocialProof() {
  return (
    <section id="community" className="section-padding scroll-mt-24">
      <div className="container-site">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-medium tracking-wide text-brand">
                Community
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                A community built around real experience.
              </h2>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-surface p-8 shadow-[0_0_40px_rgba(0,198,252,0.08)]">
              <p className="font-display text-5xl tracking-tight text-brand sm:text-6xl">
                100+
              </p>
              <p className="mt-2 text-lg text-ink">
                founders and startup leaders
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A curated circle of people building from Seed through Series B+,
                sharing what actually works between the public milestones.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialProofPoints.map((point, index) => (
            <FadeIn key={point} delay={index * 0.06}>
              <div className="rounded-xl border border-border/80 bg-surface/80 px-5 py-6">
                <div className="mb-4 h-px w-10 bg-brand/50" />
                <p className="text-base font-medium text-ink">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-14">
            <p className="text-sm text-muted-foreground">
              Member companies include
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {memberLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border bg-surface/60 px-3 text-center text-xs font-medium tracking-wide text-muted-foreground"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
