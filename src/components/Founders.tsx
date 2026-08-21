"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { founders } from "@/data/content";

export function Founders() {
  return (
    <section className="py-section-sm section-divider bg-surface/70">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">The co-founders</p>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-h2 text-ink">
            Built by people who have worked with the companies shaping this
            space.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-muted-foreground">
            The Founders Experience is made by people who have worked with
            TDengine, C3.ai, OpenAI, Meta, Google, Workday, Wave, Anthropic, and
            other Fortune 500 enterprises.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FadeIn key={founder.name} delay={index * 0.08}>
              <article className="surface-card group flex h-full flex-col rounded-3xl p-7 sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -inset-1.5 rounded-full bg-[radial-gradient(circle,rgba(0,198,252,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative size-20 overflow-hidden rounded-full bg-secondary ring-1 ring-border transition-all duration-500 group-hover:ring-brand/50">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                        style={{ objectPosition: founder.imagePosition }}
                      />
                    </div>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-brand/40 hover:bg-accent hover:text-brand"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                <h3 className="mt-6 font-display text-h3 text-ink">
                  {founder.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-brand">
                  {founder.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {founder.companyRole}, {founder.company}
                </p>

                <div className="rule-fade my-6" />

                <p className="text-sm leading-relaxed text-ink/75">
                  {founder.bio}
                </p>

                <div className="mt-6">
                  <span className="inline-flex rounded-full border border-brand/20 bg-accent px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.14em] text-accent-foreground uppercase">
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
