"use client";

import { FadeIn } from "@/components/FadeIn";
import { personas } from "@/data/content";

export function WhoShouldJoin() {
  return (
    <section className="py-section">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Who should join</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-h2 text-ink">
            Built for people building companies.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-muted-foreground">
            We prioritize people actively building, scaling, or leading startup
            companies.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <FadeIn key={persona.title} delay={index * 0.05}>
              <article className="surface-card group h-full rounded-3xl p-7">
                <div className="mb-6 h-1 w-10 rounded-full bg-gradient-to-r from-brand-bright to-brand-bright/30 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-h4 text-ink">
                  {persona.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {persona.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
