"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { partnershipTiers } from "@/data/content";
import { cn } from "@/lib/utils";

export function PartnershipTiers() {
  return (
    <section id="partnership-tiers" className="section-padding scroll-mt-24 bg-secondary/35">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Partnership options
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Ways to support the community.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Partnerships are tailored. These tiers show how brands typically
            engage — from community support to long-term founding partnerships.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {partnershipTiers.map((tier, index) => (
            <FadeIn key={tier.name} delay={index * 0.06}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7",
                  tier.featured
                    ? "border-brand/40 bg-ink text-white"
                    : "border-border bg-surface text-ink"
                )}
              >
                <p
                  className={cn(
                    "text-xs font-medium tracking-wide",
                    tier.featured ? "text-brand" : "text-brand"
                  )}
                >
                  Tier {index + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    tier.featured ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {tier.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.featured ? "text-brand" : "text-brand"
                        )}
                      />
                      <span
                        className={
                          tier.featured ? "text-white/90" : "text-ink/90"
                        }
                      >
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
              className="h-12 bg-brand px-6 text-brand-foreground hover:bg-brand/90"
            >
              Talk to Us About Partnership
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
