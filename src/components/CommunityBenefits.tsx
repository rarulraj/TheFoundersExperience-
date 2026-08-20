"use client";

import { MessageCircle, Users, Handshake, Sprout } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whyCards } from "@/data/content";

const icons = [MessageCircle, Users, Handshake, Sprout];

export function CommunityBenefits() {
  return (
    <section id="community" className="py-section-sm">
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">Why join</p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-h2 text-ink">
            The conversations founders actually need.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <FadeIn key={card.title} delay={index * 0.06}>
                <article className="surface-card group h-full overflow-hidden rounded-2xl p-6 sm:p-7">
                  <div className="icon-tile mb-5 inline-flex size-11 items-center justify-center rounded-xl text-brand transition-transform duration-500 group-hover:scale-105">
                    <Icon className="size-[1.15rem]" />
                  </div>
                  <h3 className="font-display text-h4 text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
