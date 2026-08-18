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
      className="section-stack scroll-mt-24 border-y border-border/60 bg-surface/50"
    >
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Partnership options
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
            Ways to support the community.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Partnerships are tailored. These tiers show how brands typically
            engage, from community support to long-term founding partnerships.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {partnershipTiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.06}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-5 sm:p-7",
                  tier.featured
                    ? "border-brand bg-accent/50 text-ink"
                    : "border-border bg-surface text-ink"
                )}
              >
                <p className="text-xs font-medium tracking-wide text-brand">
                  Tier {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">
                  {tier.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      <span className="text-ink">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Button
              render={<Link href="/partners#partner-form" />}
              className="h-12 w-full bg-brand px-6 text-brand-foreground hover:bg-brand/90 sm:w-auto"
            >
              Talk to Us About Partnership
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
