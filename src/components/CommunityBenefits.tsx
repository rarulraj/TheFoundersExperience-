"use client";

import { MessageCircle, Users, Handshake, Sprout } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whyCards } from "@/data/content";

const icons = [MessageCircle, Users, Handshake, Sprout];

export function CommunityBenefits() {
  return (
    <section id="community" className="section-padding scroll-mt-24 pt-4">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Why join
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            The conversations founders actually need.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <FadeIn key={card.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-accent text-brand">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
