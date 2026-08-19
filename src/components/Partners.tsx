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
import {
  partnerBenefits,
  partnerLogos,
  companiesWorkedWith,
  companiesWorkedWithNote,
} from "@/data/content";

const icons = [UsersRound, Eye, CalendarRange, FileText, Package, Infinity];

export function Partners() {
  return (
    <section id="partners" className="section-stack scroll-mt-24">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Partners
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
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
                <article className="h-full rounded-2xl border border-border bg-surface p-5 sm:p-6 transition-colors hover:border-brand/30">
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
            <p className="text-sm text-muted-foreground">Sponsors</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
              {partnerLogos.map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="flex min-h-14 items-center justify-center rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm font-semibold tracking-wide text-ink/80"
                >
                  {logo}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              TSE Technical and TSE are founding sponsors of The Founders
              Experience.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground">
              Made by people who have worked with
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {companiesWorkedWith.map((company) => (
                <div
                  key={company}
                  className="flex min-h-14 items-center justify-center rounded-xl border border-border bg-surface px-3 py-3 text-center text-sm font-semibold tracking-wide text-ink/80"
                >
                  {company}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {companiesWorkedWithNote}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 rounded-2xl border border-border bg-surface px-5 py-8 text-center sm:px-10 sm:py-10">
            <h3 className="font-display text-2xl tracking-tight text-ink sm:text-4xl">
              Become a Founding Partner
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Interested in supporting founders? Let’s build something together.
            </p>
            <Button
              render={<Link href="/partners#partner-form" />}
              className="mt-7 h-12 w-full bg-brand px-6 text-brand-foreground hover:bg-brand/90 sm:w-auto"
            >
              Become a Founding Partner
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
