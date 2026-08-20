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
      className="py-section-sm section-divider bg-surface/40"
    >
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">Partnership options</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-h2 text-ink">
            Ways to support the community.
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-muted-foreground">
            Partnerships are tailored. These tiers show how brands typically
            engage, from community support to long-term founding partnerships.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {partnershipTiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.06}>
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7",
                  tier.featured
                    ? "glow-brand border border-brand/40 bg-surface text-ink"
                    : "surface-card text-ink"
                )}
              >
                {tier.featured && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,198,252,0.16),transparent_70%)]" />
                )}
                <div className="relative flex flex-1 flex-col">
                  <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-brand uppercase">
                    Tier {index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-h4">{tier.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>
                  <div className="rule-fade my-6" />
                  <ul className="flex-1 space-y-3.5">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          strokeWidth={2.5}
                        />
                        <span className="text-ink/85">{benefit}</span>
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
              className="btn-glow h-auto min-h-12 w-full whitespace-normal bg-brand px-6 py-3 text-center text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
            >
              Talk to Us About Partnership
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
