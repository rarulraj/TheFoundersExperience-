"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { memberBenefits } from "@/data/content";

export function MemberBenefits() {
  return (
    <section className="py-section-sm section-divider">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <FadeIn>
            <p className="eyebrow">What members get</p>
            <h2 className="mt-5 text-balance font-display text-h2 text-ink">
              More than another founder LinkedIn chat.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Real conversations, curated relationships, and gatherings that
              help you make better decisions.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {memberBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="group flex items-center gap-3.5 border-b border-border/60 py-4 transition-colors last:border-b-0 hover:border-brand/30 sm:[&:nth-last-child(2)]:border-b-0"
                >
                  <span className="icon-tile flex size-7 shrink-0 items-center justify-center rounded-lg text-brand">
                    <Check className="size-3.5" strokeWidth={2.75} />
                  </span>
                  <span className="text-sm text-ink transition-colors group-hover:text-brand">
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
