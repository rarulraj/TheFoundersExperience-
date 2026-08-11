"use client";

import Link from "next/link";
import {
  Eye,
  CalendarRange,
  FileText,
  Package,
  Infinity,
  UsersRound,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { partnerBenefits, partnerLogos } from "@/data/content";

const icons = [UsersRound, Eye, CalendarRange, FileText, Package, Infinity];

export function Partners() {
  return (
    <section id="partners" className="section-padding scroll-mt-24">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Partners
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Build relationships with the people building what’s next.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The Founders Experience gives select brands the opportunity to
            support a growing founder community while building authentic
            relationships with startup leaders.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.map((benefit, index) => {
            const Icon = icons[index] ?? UsersRound;
            return (
              <FadeIn key={benefit.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand/30">
                  <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent text-brand">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.08}>
          <div className="mt-14">
            <p className="text-sm text-muted-foreground">
              Trusted by partners who support founders
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex h-16 items-center justify-center rounded-xl border border-border bg-surface px-3 text-center text-xs font-semibold tracking-wide text-ink/70"
                >
                  {logo}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              TSE Technical is a founding partner of The Founders Experience,
              supporting founder events and community programming.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-[linear-gradient(135deg,#002030_0%,#0f3f3d_55%,#2e8a99_100%)] px-7 py-10 text-center text-white sm:px-10">
            <h3 className="font-display text-3xl tracking-tight sm:text-4xl">
              Become a Founding Partner
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/75 sm:text-base">
              Interested in supporting founders? Let’s build something together.
            </p>
            <Button
              render={<Link href="/partners#partner-form" />}
              className="mt-7 h-12 bg-white px-6 text-ink hover:bg-white/90"
            >
              Become a Founding Partner
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
