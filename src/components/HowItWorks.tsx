"use client";

import { FadeIn } from "@/components/FadeIn";
import { howItWorks } from "@/data/content";

export function HowItWorks() {
  return (
    <section className="py-section-sm section-divider bg-surface/70">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">How it works</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-h2 text-ink">
            From application to your first table in three steps.
          </h2>
        </FadeIn>

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {/* Connector line behind the step cards on desktop. */}
          <div
            aria-hidden
            className="absolute top-16 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-brand-bright/50 to-transparent md:block"
          />
          {howItWorks.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.08}>
              <article className="surface-card relative h-full rounded-3xl p-7 text-center sm:p-8">
                <div className="btn-glow mx-auto flex size-12 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-6 font-display text-h4 text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
