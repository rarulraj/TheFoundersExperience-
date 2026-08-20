"use client";

import { FadeIn } from "@/components/FadeIn";
import { LogoMarquee } from "@/components/LogoMarquee";
import { memberLogos, socialProofPoints } from "@/data/content";

export function SocialProof() {
  return (
    <section id="community" className="py-section overflow-hidden">
      <div className="container-site">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Community</p>
              <h2 className="mt-5 max-w-xl text-balance font-display text-h2 text-ink">
                A community built around real experience.
              </h2>
            </div>
            <div className="glow-brand relative overflow-hidden rounded-3xl border border-brand/25 bg-surface p-8">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_80%_0%,rgba(0,198,252,0.18),transparent_70%)]" />
              <div className="relative">
                <p className="font-display text-h1 text-brand">100+</p>
                <p className="mt-3 text-lead text-ink">
                  founders and startup leaders
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A curated circle of people building from Seed through Series
                  B+, sharing what actually works between the public milestones.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialProofPoints.map((point, index) => (
            <FadeIn key={point} delay={index * 0.06}>
              <div className="surface-card group h-full rounded-2xl px-6 py-7">
                <div className="mb-5 h-px w-10 bg-brand/50 transition-all duration-500 group-hover:w-16" />
                <p className="text-base font-medium text-ink">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-16 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Made by people who have worked with
          </p>
        </FadeIn>
      </div>

      <div className="relative mt-7 border-y border-border/60 bg-surface/40 py-5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_120%_at_50%_50%,rgba(0,198,252,0.07),transparent_70%)]" />
        <div className="relative space-y-1">
          <LogoMarquee items={memberLogos} />
          <LogoMarquee items={[...memberLogos].reverse()} reverse />
        </div>
      </div>

      <p className="container-site mt-6 text-sm text-muted-foreground">
        and other Fortune 500 enterprises
      </p>
    </section>
  );
}
