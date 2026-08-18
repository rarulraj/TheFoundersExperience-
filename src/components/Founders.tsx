"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { founders } from "@/data/content";

export function Founders() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            The co-founders
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
            Built by people who live the founder journey.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            The Founders Experience is led by operators with deep technical
            expertise and a decade of recruiting experience inside high-growth
            startups.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FadeIn key={founder.name} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative size-16 overflow-hidden rounded-full bg-secondary">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      style={{ objectPosition: founder.imagePosition }}
                    />
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>

                <h3 className="mt-5 font-display text-2xl tracking-tight text-ink">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  {founder.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {founder.companyRole}, {founder.company}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-ink/80">
                  {founder.bio}
                </p>

                <div className="mt-5">
                  <span className="inline-flex rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                    {founder.focus}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
