"use client";

import { FadeIn } from "@/components/FadeIn";
import { manifestoStats } from "@/data/content";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden py-section section-divider">
      <div className="mesh-light absolute inset-0" />
      <div className="container-site relative text-center">
        <FadeIn>
          <p className="eyebrow-center">Why we exist</p>
          <h2 className="mx-auto mt-7 max-w-4xl text-balance font-display text-h1 text-ink">
            Great companies aren’t built alone.{" "}
            <span className="bg-[linear-gradient(100deg,#7ed4e2_10%,var(--brand-bright)_70%,var(--brand)_100%)] bg-clip-text text-transparent">
              They’re built in community.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-muted-foreground">
            Every milestone you celebrate publicly has a hundred hard
            conversations behind it. We built The Founders Experience so those
            conversations happen with people who understand them.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-10 lg:grid-cols-4">
            {manifestoStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 border-l border-border/80 px-4 first:border-l-0 max-lg:[&:nth-child(3)]:border-l-0"
              >
                <dt className="caption order-2 max-w-[12rem] leading-snug text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-h2 text-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
