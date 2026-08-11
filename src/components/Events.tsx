"use client";

import Link from "next/link";
import { CalendarDays, MapPin, Mic2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { featuredEvent, upcomingEvents } from "@/data/content";

type EventsProps = {
  showAllLink?: boolean;
};

export function Events({ showAllLink = true }: EventsProps) {
  return (
    <section id="events" className="section-padding scroll-mt-24">
      <div className="container-site">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-brand">
                Events
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                Meet online. Build relationships in person.
              </h2>
            </div>
            {showAllLink && (
              <Link
                href="/events"
                className="text-sm font-medium text-brand underline-offset-4 hover:underline"
              >
                View all events
              </Link>
            )}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <FadeIn>
            <article className="relative overflow-hidden rounded-2xl border border-border bg-ink text-white">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(46,138,153,0.55), rgba(11,31,42,0.85)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative p-7 sm:p-9 md:p-10">
                <span className="inline-flex rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-medium tracking-wide">
                  Featured Event
                </span>
                <h3 className="mt-5 max-w-xl font-display text-3xl tracking-tight sm:text-4xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {featuredEvent.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-white/85">
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
                <p className="mt-3 text-sm text-white/70">
                  {featuredEvent.format}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    render={<Link href="/events#event-updates" />}
                    className="h-11 bg-brand px-5 text-brand-foreground hover:bg-brand/90"
                  >
                    Get Event Updates
                  </Button>
                  <Button
                    render={<Link href="/events#speak" />}
                    variant="outline"
                    className="h-11 border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Interested in Speaking?
                  </Button>
                </div>
              </div>
            </article>
          </FadeIn>

          <div className="grid gap-4">
            {upcomingEvents.map((event, index) => (
              <FadeIn key={event.title} delay={index * 0.06}>
                <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand/30">
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
        </div>
      </div>
    </section>
  );
}
