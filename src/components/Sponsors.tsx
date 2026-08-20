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
    <section className="py-section-sm section-divider overflow-hidden">
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow">Sponsors</p>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-h2 text-ink">
            Backed by{" "}
            <a
              href={foundingSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-brand/40 decoration-2 underline-offset-[6px] transition-colors hover:text-brand hover:decoration-brand"
            >
              {foundingSponsor.name}
            </a>
            .
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <a
            href={foundingSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card mt-9 flex flex-col gap-2 rounded-2xl px-6 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:px-8"
          >
            <span className="font-display text-lg tracking-[0.14em] text-ink uppercase sm:shrink-0">
              {foundingSponsor.name}
            </span>
            <span className="text-sm text-muted-foreground sm:max-w-xl sm:text-right">
              {foundingSponsor.description}
            </span>
          </a>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-14 text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Made by people who have worked with
          </p>
        </FadeIn>
      </div>

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
    </section>
  );
}
