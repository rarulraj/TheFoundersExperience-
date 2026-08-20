"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { speakers } from "@/data/content";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="section-stack section-divider scroll-mt-24 bg-surface/40"
    >
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Speakers</p>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-[1.75rem] tracking-tight text-ink sm:text-4xl">
                Learn from people who are actually building.
              </h2>
            </div>
            <Button
              render={<Link href="/events#speak" />}
              variant="outline"
              className="h-11 w-full border-brand/25 px-5 text-brand transition-colors hover:border-brand/50 hover:bg-accent sm:w-fit"
            >
              Interested in Speaking?
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <FadeIn key={speaker.name} delay={index * 0.05} as="article">
              <div className="surface-card group h-full overflow-hidden rounded-2xl">
                <div className="relative flex h-28 items-end overflow-hidden bg-secondary p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_120%_at_20%_0%,rgba(0,198,252,0.16),transparent_70%)]" />
                  <div className="relative flex w-full items-end justify-between gap-3">
                    <div className="flex size-14 items-center justify-center rounded-full bg-background font-display text-lg text-ink ring-1 ring-border transition-all duration-500 group-hover:ring-brand/50">
                      {speaker.initials}
                    </div>
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-border/80 bg-background/70 text-muted-foreground transition-colors hover:border-brand/40 hover:bg-accent hover:text-brand"
                      aria-label={`${speaker.name} on LinkedIn`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-brand"
                    >
                      {speaker.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {speaker.role}, {speaker.company}
                  </p>
                  <div className="rule-fade my-5" />
                  <p className="text-sm leading-relaxed text-ink/75">
                    {speaker.topic}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
