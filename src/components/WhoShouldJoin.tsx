"use client";

import { FadeIn } from "@/components/FadeIn";
import { personas } from "@/data/content";

export function WhoShouldJoin() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Who should join
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built for people building companies.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            We prioritize people actively building, scaling, or leading startup
            companies.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <FadeIn key={persona.title} delay={index * 0.04}>
              <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand/30">
                <div className="mb-4 h-px w-10 bg-brand/60" />
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
