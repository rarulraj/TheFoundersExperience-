"use client";

import { Check, Search, MapPin, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { showcaseFeatures } from "@/data/content";
import { cn } from "@/lib/utils";

/* Stylized mock-UI visuals — illustrative, not real member data. */

function DirectoryVisual() {
  const members = [
    { initials: "AP", name: "A. Patel", detail: "Founder · Fintech", stage: "Seed" },
    { initials: "JK", name: "J. Kim", detail: "Operator · Devtools", stage: "Series A" },
    { initials: "ML", name: "M. Lopez", detail: "GTM Lead · Healthtech", stage: "Pre-seed" },
  ];
  return (
    <div className="surface-panel w-full max-w-md rounded-3xl p-5">
      <div className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-muted-foreground">
        <Search className="size-4 text-brand" />
        Who has hired a first sales leader?
      </div>
      <div className="mt-3 flex gap-2">
        {["Stage", "Function", "Industry"].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-border bg-card px-3 py-1 text-[0.68rem] font-semibold text-muted-foreground"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-4 space-y-2.5">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card px-4 py-3"
          >
            <span className="icon-tile flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold">
              {member.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-ink">
                {member.name}
              </span>
              <span className="block truncate text-xs text-muted-foreground">
                {member.detail}
              </span>
            </span>
            <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold text-accent-foreground">
              {member.stage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventVisual() {
  return (
    <div className="surface-panel w-full max-w-md rounded-3xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase">
            Oct
          </span>
          <span className="font-display text-lg leading-none font-bold">
            2026
          </span>
        </div>
        <div className="min-w-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/25 bg-accent px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.12em] text-accent-foreground uppercase">
            <span className="size-1 rounded-full bg-brand" />
            Coming soon
          </span>
          <p className="mt-2 font-display text-lg text-ink">
            The Founders Panel
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-brand" />
            San Francisco · Panel
          </p>
        </div>
      </div>
      <div className="rule-fade my-5" />
      <div className="flex items-center justify-between gap-3">
        <div className="flex -space-x-2.5">
          {["JM", "JG", "DC", "LB", "+"].map((initials) => (
            <span
              key={initials}
              className="icon-tile flex size-8 items-center justify-center rounded-full text-[0.6rem] font-bold ring-2 ring-card"
            >
              {initials}
            </span>
          ))}
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          Members only · Free
        </span>
      </div>
    </div>
  );
}

function IntroVisual() {
  return (
    <div className="surface-panel w-full max-w-md rounded-3xl p-6">
      <div className="flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.14em] text-brand uppercase">
        <Sparkles className="size-3.5" />
        Curated introduction
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="icon-tile flex size-10 items-center justify-center rounded-full text-xs font-bold">
          SD
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-brand-bright/60 via-brand-bright/30 to-brand-bright/60" />
        <span className="icon-tile flex size-10 items-center justify-center rounded-full text-xs font-bold">
          RH
        </span>
      </div>
      <div className="mt-4 rounded-2xl rounded-tl-md border border-border/70 bg-surface px-4 py-3.5 text-sm leading-relaxed text-ink">
        You’re both hiring your first sales leader. Worth 30 minutes this
        week?
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Hand-matched · Double opt-in · Context shared up front
      </p>
    </div>
  );
}

const visuals = {
  directory: DirectoryVisual,
  event: EventVisual,
  intro: IntroVisual,
};

export function FeatureShowcase() {
  return (
    <section className="py-section section-divider">
      <div className="container-site space-y-20 sm:space-y-28">
        {showcaseFeatures.map((feature, index) => {
          const Visual = visuals[feature.visual];
          const reversed = index % 2 === 1;
          return (
            <FadeIn key={feature.title}>
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={cn(reversed && "lg:order-2")}>
                  <p className="eyebrow">{feature.eyebrow}</p>
                  <h3 className="mt-5 max-w-md text-balance font-display text-h3 text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm font-medium text-ink"
                      >
                        <span className="icon-tile flex size-6 shrink-0 items-center justify-center rounded-full">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={cn(
                    "relative flex justify-center",
                    reversed && "lg:order-1"
                  )}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 scale-90 rounded-[3rem] bg-[radial-gradient(ellipse_65%_65%_at_50%_45%,rgba(var(--brand-rgb),0.16),transparent_70%)] blur-xl"
                  />
                  <Visual />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
