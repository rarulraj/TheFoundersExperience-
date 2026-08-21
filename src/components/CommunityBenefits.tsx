"use client";

import { MessageCircle, Users, Handshake, Sprout } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whyCards } from "@/data/content";

const icons = [MessageCircle, Users, Handshake, Sprout];

export function CommunityBenefits() {
  return (
    <section id="community" className="py-section">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Why join</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-h2 text-ink">
            The conversations founders actually need.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-muted-foreground">
            No feeds, no noise, no pitch floors. Just people who are in the
            work, sharing what it really takes.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <FadeIn key={card.title} delay={index * 0.06}>
                <article className="surface-card group h-full rounded-3xl p-7 sm:p-8">
                  <div className="icon-tile mb-6 inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-h4 text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
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
