"use client";

import Link from "next/link";
import { CalendarDays, MapPin, Mic2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { featuredEvent, upcomingEvents } from "@/data/content";

type EventsProps = {
  showAllLink?: boolean;
  compact?: boolean;
};

const detailRows = [
  { icon: MapPin, key: "location" as const },
  { icon: CalendarDays, key: "date" as const },
  { icon: Mic2, key: "audience" as const },
];

export function Events({ showAllLink = true, compact = false }: EventsProps) {
  return (
    <section
      id="events"
      className="section-stack section-divider scroll-mt-24"
    >
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Events</p>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-[1.75rem] tracking-tight text-ink sm:text-4xl">
                Meet online. Build relationships in person.
              </h2>
            </div>
            {showAllLink && (
              <Link
                href="/events"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand underline-offset-4 hover:underline"
              >
                View all events
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            )}
          </div>
        </FadeIn>

        <div
          className={
            compact ? "mt-12" : "mt-12 grid gap-5 lg:grid-cols-[1.35fr_1fr]"
          }
        >
          <FadeIn>
            <article className="surface-panel glow-brand relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_88%_0%,rgba(0,198,252,0.14),transparent_70%)]" />
              <div className="relative p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-accent-foreground uppercase">
                    First gathering
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-brand uppercase">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
                    </span>
                    {featuredEvent.status}
                  </span>
                </div>
                <h3 className="mt-6 max-w-xl text-balance font-display text-2xl tracking-tight text-ink sm:text-[2rem]">
                  {featuredEvent.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featuredEvent.description}
                </p>

                <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/40 sm:grid-cols-3">
                  {detailRows.map(({ icon: Icon, key }) => (
                    <li
                      key={key}
                      className="flex items-center gap-2.5 bg-surface px-4 py-4 text-sm text-ink"
                    >
                      <Icon className="size-4 shrink-0 text-brand" />
                      {featuredEvent[key]}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {featuredEvent.format}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    render={<Link href="/events#event-updates" />}
                    className="btn-glow h-11 w-full bg-brand px-5 text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
                  >
                    Get Event Updates
                  </Button>
                  <Link
                    href="/events#speak"
                    className="inline-flex h-11 items-center justify-center px-1 text-sm font-medium text-ink underline-offset-4 transition-colors hover:text-brand hover:underline sm:justify-start"
                  >
                    Interested in Speaking?
                  </Link>
                </div>
              </div>
            </article>
          </FadeIn>

          {!compact && (
            <div className="grid gap-4">
              {upcomingEvents.map((event, index) => (
                <FadeIn key={event.title} delay={index * 0.06}>
                  <article className="surface-card h-full rounded-2xl p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-brand uppercase">
                        {event.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl tracking-tight text-ink">
                      {event.title}
                    </h3>
                    <p className="mt-2.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 text-brand/70" />
                      {event.location}
                    </p>
                  </article>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
