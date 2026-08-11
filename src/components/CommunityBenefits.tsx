"use client";

import { MessageCircle, Users, Handshake, Sprout } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whyCards } from "@/data/content";

const icons = [MessageCircle, Users, Handshake, Sprout];

export function CommunityBenefits() {
  return (
    <section className="section-padding bg-ink text-white">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Why The Founders Experience
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            The conversations founders actually need.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {whyCards.map((card, index) => {
            const Icon = icons[index] ?? MessageCircle;
            return (
              <FadeIn key={card.title} delay={index * 0.05}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-brand/40 hover:bg-white/[0.05]">
                  <div className="mb-5 inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-brand transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
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
