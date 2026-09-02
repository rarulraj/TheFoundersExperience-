"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { memberBenefits } from "@/data/content";

export function MemberBenefits() {
  return (
    <section className="py-section section-divider">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <FadeIn>
            <p className="eyebrow">What members get</p>
            <h2 className="mt-5 text-balance font-display text-h2 text-ink">
              More than another founder LinkedIn chat.
            </h2>
            <p className="mt-5 max-w-md text-lead text-muted-foreground">
              Real conversations, curated relationships, and gatherings that
              help you make better decisions.
            </p>
            <div className="brand-flare mt-8" />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
              Everything is designed around one goal: you leave each
              conversation with something you can use: an answer, an
              introduction, or the confidence to make the call.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ul className="surface-panel grid gap-x-8 rounded-3xl p-6 sm:grid-cols-2 sm:p-8">
              {memberBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="group flex items-center gap-3.5 border-b border-border/70 py-4 transition-colors last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <span className="icon-tile flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                    <Check className="size-3.5" strokeWidth={2.75} />
                  </span>
                  <span className="text-sm font-medium text-ink transition-colors group-hover:text-brand">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
