"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Mic2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { featuredEvent, upcomingEvents } from "@/data/content";

type EventsProps = {
  showAllLink?: boolean;
  compact?: boolean;
};

export function Events({ showAllLink = true, compact = false }: EventsProps) {
  return (
    <section id="events" className="section-padding scroll-mt-24 pt-8">
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-brand">
                Events
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Meet online. Build relationships in person.
              </h2>
            </div>
            {showAllLink && (
              <Link
                href="/events"
                className="text-sm font-medium text-ink underline-offset-4 hover:underline"
              >
                View all events
              </Link>
            )}
          </div>
        </FadeIn>

        <div
          className={
            compact
              ? "mt-10"
              : "mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]"
          }
        >
          <FadeIn>
            <article className="overflow-hidden rounded-2xl border border-border bg-surface">
              {!compact && (
                <Image
                  src="/images/community-gathering.jpg"
                  alt="A Founders Experience gathering in San Francisco."
                  width={1024}
                  height={819}
                  className="h-56 w-full object-cover sm:h-72"
                />
              )}
              <div className="p-7 sm:p-9">
                <span className="inline-flex rounded-md bg-accent px-2.5 py-1 text-xs font-medium tracking-wide text-accent-foreground">
                  Featured Event
                </span>
                <h3 className="mt-5 max-w-xl font-display text-3xl tracking-tight text-ink">
                  {featuredEvent.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featuredEvent.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <MapPin className="size-4 text-brand" />
                    {featuredEvent.location}
                  </li>
                  <li className="flex items-center gap-2">
                    <CalendarDays className="size-4 text-brand" />
                    {featuredEvent.date}
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic2 className="size-4 text-brand" />
                    {featuredEvent.audience}
                  </li>
                </ul>
                <p className="mt-3 text-sm text-muted-foreground">
                  {featuredEvent.format}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    render={<Link href="/events#event-updates" />}
                    className="h-11 bg-brand px-5 text-black hover:bg-brand/90"
                  >
                    Get Event Updates
                  </Button>
                  <Link
                    href="/events#speak"
                    className="inline-flex h-11 items-center text-sm font-medium text-ink underline-offset-4 hover:underline"
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
                  <article className="rounded-2xl border border-border bg-surface p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-medium tracking-wide text-brand">
                        {event.type}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl tracking-tight text-ink">
                      {event.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
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
