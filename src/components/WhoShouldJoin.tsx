"use client";

import { FadeIn } from "@/components/FadeIn";
import { personas } from "@/data/content";

export function WhoShouldJoin() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">Who should join</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-[1.75rem] tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built for people building companies.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We prioritize people actively building, scaling, or leading startup
            companies.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <FadeIn key={persona.title} delay={index * 0.05}>
              <article className="surface-card group h-full rounded-2xl p-6">
                <div className="mb-5 h-px w-10 bg-brand/60 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-display text-2xl tracking-tight text-ink">
                  {persona.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
