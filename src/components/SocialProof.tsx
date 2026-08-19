"use client";

import { FadeIn } from "@/components/FadeIn";
import { LogoMarquee } from "@/components/LogoMarquee";
import { memberLogos, socialProofPoints } from "@/data/content";

export function SocialProof() {
  return (
    <section id="community" className="section-padding scroll-mt-24 overflow-hidden">
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
          <p className="mt-14 text-sm text-muted-foreground">
            Made by people who have worked with
          </p>
        </FadeIn>
      </div>

      <div className="mt-6 space-y-1 border-y border-border/50 bg-surface/40 py-4">
        <LogoMarquee items={memberLogos} />
        <LogoMarquee items={[...memberLogos].reverse()} reverse />
      </div>
      <p className="container-site mt-5 text-sm text-muted-foreground">
        and other Fortune 500 enterprises
      </p>
    </section>
  );
}
