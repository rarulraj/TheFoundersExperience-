"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { founders } from "@/data/content";

export function Founders() {
  return (
    <section className="section-stack section-divider bg-surface/40">
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">The co-founders</p>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-[1.75rem] tracking-tight text-ink sm:text-4xl">
            Built by people who have worked with the companies shaping this
            space.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            The Founders Experience is made by people who have worked with
            TDengine, C3.ai, OpenAI, Meta, Google, Workday, Wave, Anthropic, and
            other Fortune 500 enterprises.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <FadeIn key={founder.name} delay={index * 0.08}>
              <article className="surface-card group flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="relative">
                    <div
                      aria-hidden
                      className="absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(0,198,252,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative size-18 overflow-hidden rounded-full bg-secondary ring-1 ring-border transition-all duration-500 group-hover:ring-brand/50">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                        style={{ objectPosition: founder.imagePosition }}
                      />
                    </div>
                  </div>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:bg-accent hover:text-brand"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>

                <h3 className="mt-6 font-display text-2xl tracking-tight text-ink">
                  {founder.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-brand">
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
                  <span className="inline-flex rounded-full border border-brand/20 bg-accent px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-accent-foreground uppercase">
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
