"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { speakers } from "@/data/content";

export function Speakers() {
  return (
    <section id="speakers" className="py-section-sm section-divider bg-surface/70">
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Speakers</p>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-h2 text-ink">
                Learn from people who are actually building.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Many more speakers come from enterprises and small startups,
                sharing what they’re learning in the work.
              </p>
            </div>
            <Button
              render={<Link href="/events#speak" />}
              variant="outline"
              className="h-11 w-full shrink-0 rounded-full border-border bg-card px-6 font-semibold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand sm:w-fit"
            >
              Interested in Speaking?
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <FadeIn key={speaker.name} delay={index * 0.05} as="article">
              <div className="surface-card group flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="relative size-16 overflow-hidden rounded-2xl bg-secondary ring-1 ring-border transition-all duration-500 group-hover:ring-brand/40">
                    {"image" in speaker && speaker.image ? (
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                        style={{ objectPosition: speaker.imagePosition }}
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-[linear-gradient(140deg,var(--accent),#fff)] font-display text-lg text-brand">
                        {speaker.initials}
                      </div>
                    )}
                  </div>
                  {speaker.linkedin ? (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-brand/40 hover:bg-accent hover:text-brand"
                      aria-label={`${speaker.name} on LinkedIn`}
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-h4 text-ink">
                  {speaker.linkedin ? (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-brand"
                    >
                      {speaker.name}
                    </a>
                  ) : (
                    speaker.name
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {speaker.role}
                </p>
                <div className="rule-fade my-5" />
                <p className="text-sm leading-relaxed text-ink/75">
                  {speaker.topic}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
