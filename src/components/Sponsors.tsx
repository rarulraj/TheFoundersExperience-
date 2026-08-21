"use client";

import { FadeIn } from "@/components/FadeIn";
import { LogoMarquee } from "@/components/LogoMarquee";
import {
  companiesWorkedWith,
  companiesWorkedWithNote,
  foundingSponsor,
} from "@/data/content";

export function Sponsors() {
  return (
    <section className="py-section-sm section-divider overflow-hidden bg-surface/70">
      <div className="container-site">
        <FadeIn className="text-center">
          <p className="eyebrow-center">Backed by operators</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-display text-h2 text-ink">
            Made by people who have worked with the best.
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.08}>
        <div className="relative mt-12 py-4">
          <div className="relative space-y-2">
            <LogoMarquee items={companiesWorkedWith} />
            <LogoMarquee items={[...companiesWorkedWith].reverse()} reverse />
          </div>
        </div>
        <p className="container-site mt-4 text-center text-sm text-muted-foreground">
          {companiesWorkedWithNote}
        </p>
      </FadeIn>

      <div className="container-site">
        <FadeIn delay={0.12}>
          <a
            href={foundingSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card mx-auto mt-14 flex max-w-4xl flex-col gap-3 rounded-3xl px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10"
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
      </div>
    </section>
  );
}
