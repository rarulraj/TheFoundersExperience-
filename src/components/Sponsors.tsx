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
    <section className="section-stack overflow-hidden border-t border-border/60">
      <div className="container-site">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-brand">
            Sponsors
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
            Backed by{" "}
            <a
              href={foundingSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-brand/40 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
            >
              {foundingSponsor.name}
            </a>
            , a premier recruiting firm.
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mt-8 flex flex-col gap-2 border-y border-border/70 py-6 sm:flex-row sm:items-baseline sm:gap-6">
            <a
              href={foundingSponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-[0.18em] text-ink/80 uppercase transition-colors hover:text-brand"
            >
              {foundingSponsor.name}
            </a>
            <span className="text-sm text-muted-foreground">
              {foundingSponsor.description}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-12 text-sm text-muted-foreground">
            Made by people who have worked with
          </p>
        </FadeIn>
      </div>

      <div className="mt-6 space-y-1 border-y border-border/50 bg-surface/40 py-4">
        <LogoMarquee items={companiesWorkedWith} />
        <LogoMarquee
          items={[...companiesWorkedWith].reverse()}
          reverse
        />
      </div>

      <p className="container-site mt-5 text-sm text-muted-foreground">
        {companiesWorkedWithNote}
      </p>
    </section>
  );
}
