"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { memberBenefits } from "@/data/content";

export function MemberBenefits() {
  return (
    <section className="section-padding pt-4">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            What members get
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
            More than another founder LinkedIn chat.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Real conversations, curated relationships, and gatherings that help
            you make better decisions.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {memberBenefits.map((benefit, index) => (
            <FadeIn key={benefit} delay={index * 0.03}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-4">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                  <Check className="size-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-ink">{benefit}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
