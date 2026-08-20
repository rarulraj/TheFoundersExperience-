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
import { LogoMarquee } from "@/components/LogoMarquee";
import { Button } from "@/components/ui/button";
import {
  partnerBenefits,
  foundingSponsor,
  companiesWorkedWith,
  companiesWorkedWithNote,
} from "@/data/content";

const icons = [UsersRound, Eye, CalendarRange, FileText, Package, Infinity];

export function Partners() {
  return (
    <section id="partners" className="py-section-sm overflow-hidden">
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">Partners</p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-h2 text-ink">
            Build relationships with the people building what’s next.
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-muted-foreground">
            The Founders Experience gives select brands the opportunity to
            support a growing founder community while building authentic
            relationships with startup leaders.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.map((benefit, index) => {
            const Icon = icons[index] ?? UsersRound;
            return (
              <FadeIn key={benefit.title} delay={index * 0.05}>
                <article className="surface-card group h-full rounded-2xl p-6">
                  <div className="icon-tile mb-5 inline-flex size-11 items-center justify-center rounded-xl text-brand transition-transform duration-500 group-hover:scale-105">
                    <Icon className="size-[1.15rem]" />
                  </div>
                  <h3 className="font-display text-h4 text-ink">
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
          <div className="mt-16">
            <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Sponsors
            </p>
            <a
              href={foundingSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card mt-5 flex flex-col gap-2 rounded-2xl px-6 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-8"
            >
              <span className="font-display text-lg tracking-[0.14em] text-ink uppercase sm:shrink-0">
                {foundingSponsor.name}
              </span>
              <span className="text-sm text-muted-foreground sm:max-w-xl sm:text-right">
                {foundingSponsor.description}
              </span>
            </a>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {foundingSponsor.name} is the founding sponsor of The Founders
              Experience.
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="mt-16 overflow-hidden">
        <p className="container-site text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Made by people who have worked with
        </p>
        <div className="relative mt-7 border-y border-border/60 bg-surface/40 py-5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_120%_at_50%_50%,rgba(0,198,252,0.07),transparent_70%)]" />
          <div className="relative space-y-1">
            <LogoMarquee items={companiesWorkedWith} />
            <LogoMarquee items={[...companiesWorkedWith].reverse()} reverse />
          </div>
        </div>
        <p className="container-site mt-6 text-sm text-muted-foreground">
          {companiesWorkedWithNote}
        </p>
      </div>

      <div className="container-site">
        <FadeIn delay={0.1}>
          <div className="glow-brand relative mt-16 overflow-hidden rounded-3xl border border-brand/25 bg-surface px-6 py-10 text-center sm:px-10 sm:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_0%,rgba(0,198,252,0.16),transparent_70%)]" />
            <div className="relative">
              <h3 className="text-balance font-display text-h2 text-ink">
                Become a Founding Partner
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lead text-muted-foreground">
                Interested in supporting founders? Let’s build something
                together.
              </p>
              <Button
                render={<Link href="/partners#partner-form" />}
                className="btn-glow mt-8 h-auto min-h-12 w-full whitespace-normal bg-brand px-6 py-3 text-center text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
              >
                Become a Founding Partner
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
