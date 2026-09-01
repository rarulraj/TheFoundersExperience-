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
  siteConfig,
} from "@/data/content";

const icons = [UsersRound, Eye, CalendarRange, FileText, Package, Infinity];

export function Partners() {
  return (
    <section id="partners" className="py-section-sm overflow-hidden">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Partners</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-h2 text-ink">
            Build relationships with the people building what’s next.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-muted-foreground">
            The Founders Experience gives select brands the opportunity to
            support a growing founder community while building authentic
            relationships with startup leaders.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerBenefits.map((benefit, index) => {
            const Icon = icons[index] ?? UsersRound;
            return (
              <FadeIn key={benefit.title} delay={index * 0.05}>
                <article className="surface-card group h-full rounded-3xl p-7">
                  <div className="icon-tile mb-6 inline-flex size-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display text-h4 text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <div className="mt-20 overflow-hidden">
        <p className="container-site text-center text-[0.72rem] font-bold tracking-[0.18em] text-muted-foreground uppercase">
          Made by people who have worked with
        </p>
        <div className="relative mt-8 py-4">
          <div className="relative space-y-2">
            <LogoMarquee items={companiesWorkedWith} />
            <LogoMarquee items={[...companiesWorkedWith].reverse()} reverse />
          </div>
        </div>
        <p className="container-site mt-4 text-center text-sm text-muted-foreground">
          {companiesWorkedWithNote}
        </p>
      </div>

      <div className="container-site">
        <FadeIn delay={0.1}>
          <a
            href={foundingSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card mx-auto mt-16 flex max-w-4xl flex-col gap-3 rounded-3xl px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10"
          >
            <span className="flex items-center gap-4 sm:shrink-0">
              <span className="icon-tile flex size-11 items-center justify-center rounded-2xl font-display text-sm font-bold">
                {foundingSponsor.name.slice(0, 1)}
              </span>
              <span>
                <span className="block text-[0.68rem] font-bold tracking-[0.18em] text-brand uppercase">
                  Founding sponsor
                </span>
                <span className="mt-0.5 block font-display text-lg tracking-[0.12em] text-ink uppercase">
                  {foundingSponsor.name}
                </span>
              </span>
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-right">
              {foundingSponsor.description}
            </span>
          </a>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="dark-panel relative mt-16 overflow-hidden rounded-[2rem] px-7 py-14 text-center sm:px-10 sm:py-18">
            <div className="grain pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative">
              <h3 className="text-balance font-display text-h2 text-white">
                Become a Founding Partner
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lead text-white/70">
                Interested in supporting founders? Let’s build something
                together.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  render={
                    <Link
                      href={siteConfig.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-12 w-full rounded-full bg-brand-bright px-7 text-base font-semibold text-navy shadow-[0_16px_40px_-14px_rgba(0,198,252,0.65)] transition-all hover:-translate-y-0.5 hover:bg-brand-bright/90 sm:w-auto"
                >
                  Book a meeting with us
                </Button>
                <Link
                  href="#partner-form"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  Send an inquiry
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
