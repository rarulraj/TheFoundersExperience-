"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { speakers } from "@/data/content";

export function Speakers() {
  return (
    <section id="speakers" className="section-padding scroll-mt-24 bg-secondary/40">
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-brand">
                Speakers
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                Learn from people who are actually building.
              </h2>
            </div>
            <Button
              render={<Link href="/events#speak" />}
              variant="outline"
              className="h-11 w-fit border-brand/25 px-5 text-brand hover:bg-accent"
            >
              Interested in Speaking?
            </Button>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <FadeIn key={speaker.name} delay={index * 0.04} as="article">
              <div className="h-full overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-300 hover:-translate-y-0.5">
                <div className="relative flex h-44 items-end bg-[linear-gradient(145deg,#d7e8e7_0%,#b9d2d0_45%,#2e8a99_100%)] p-5">
                  <div className="absolute inset-0 grain opacity-40" />
                  <div className="relative flex size-16 items-center justify-center rounded-full border border-white/40 bg-white/20 font-display text-xl text-white backdrop-blur-sm">
                    {speaker.initials}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {speaker.role}, {speaker.company}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">
                    Topic: {speaker.topic}
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
