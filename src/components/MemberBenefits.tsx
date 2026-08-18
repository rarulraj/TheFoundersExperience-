"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { memberBenefits } from "@/data/content";

export function MemberBenefits() {
  return (
    <section className="section-stack border-t border-border/60">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-brand">
              What members get
            </p>
            <h2 className="mt-3 text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
              More than another founder LinkedIn chat.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Real conversations, curated relationships, and gatherings that
              help you make better decisions.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {memberBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 border-b border-border/60 py-3.5 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <Check className="size-4 shrink-0 text-brand" strokeWidth={2.5} />
                  <span className="text-sm text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
