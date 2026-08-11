"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { memberBenefits } from "@/data/content";

export function MemberBenefits() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-brand">
              What members get
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              More than another founder Slack.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Membership is designed around real conversations, curated
              relationships, and experiences that help founders make better
              decisions — not another noisy channel.
            </p>

            <div className="mt-8 rounded-2xl border border-brand/20 bg-[linear-gradient(145deg,#ffffff_0%,#e8f3f2_100%)] p-7">
              <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Membership is free for founders and startup leaders.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                The community is supported by carefully selected brand partners
                who believe in helping founders build stronger companies.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2">
              {memberBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-4 transition-colors hover:border-brand/30"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-ink sm:text-[0.95rem]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
