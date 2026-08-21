"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { partnershipTiers } from "@/data/content";
import { cn } from "@/lib/utils";

export function PartnershipTiers() {
  return (
    <section
      id="partnership-tiers"
      className="py-section-sm section-divider bg-surface/70"
    >
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Partnership options</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-h2 text-ink">
            Ways to support the community.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-muted-foreground">
            Partnerships are tailored. These tiers show how brands typically
            engage, from community support to long-term founding partnerships.
          </p>
        </FadeIn>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {partnershipTiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.06} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8",
                  tier.featured
                    ? "dark-panel text-white shadow-[0_32px_80px_-40px_rgba(6,13,28,0.7)]"
                    : "surface-card text-ink"
                )}
              >
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={cn(
                        "text-[0.68rem] font-bold tracking-[0.18em] uppercase",
                        tier.featured ? "text-brand-bright" : "text-brand"
                      )}
                    >
                      Tier {index + 1}
                    </p>
                    {tier.featured && (
                      <span className="rounded-full bg-brand-bright px-3 py-1 text-[0.65rem] font-bold tracking-[0.12em] text-navy uppercase">
                        Most impact
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-h4">{tier.name}</h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed",
                      tier.featured ? "text-white/70" : "text-muted-foreground"
                    )}
                  >
                    {tier.description}
                  </p>
                  <div
                    className={cn(
                      "my-6 h-px",
                      tier.featured
                        ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        : "rule-fade"
                    )}
                  />
                  <ul className="flex-1 space-y-3.5">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                            tier.featured
                              ? "bg-brand-bright/15 text-brand-bright"
                              : "bg-accent text-brand"
                          )}
                        >
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span
                          className={
                            tier.featured ? "text-white/85" : "text-ink/85"
                          }
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button
              render={<Link href="/partners#partner-form" />}
              className="btn-glow h-12 w-full rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              Talk to Us About Partnership
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
