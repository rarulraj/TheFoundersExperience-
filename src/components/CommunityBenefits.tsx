"use client";

import { MessageCircle, Users, Handshake, Sprout } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whyCards } from "@/data/content";

const icons = [MessageCircle, Users, Handshake, Sprout];

export function CommunityBenefits() {
  return (
    <section id="community" className="section-stack scroll-mt-24">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Why join
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
            The conversations founders actually need.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <FadeIn key={card.title} delay={index * 0.04}>
                <article className="group h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-colors duration-300 hover:border-brand/40">
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
