import type { Metadata } from "next";
import Link from "next/link";
import { Events } from "@/components/Events";
import { Speakers } from "@/components/Speakers";
import { EventUpdatesForm } from "@/components/EventUpdatesForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Founder dinners, roundtables, coworking sessions, and The Founders Experience San Francisco gathering.",
};

export default function EventsPage() {
  return (
    <>
      <section className="section-padding pb-10">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-brand">Events</p>
          <h1 className="mt-3 text-balance font-display text-3xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Gatherings for people building companies.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From intimate dinners to flagship days in San Francisco, our events
            are designed for honest conversation and lasting relationships.
          </p>
        </div>
      </section>

      <Events showAllLink={false} />
      <Speakers />

      <section
        id="event-updates"
        className="section-stack scroll-mt-24 border-t border-border/60 bg-surface/50"
      >
        <div className="container-site grid max-w-5xl gap-8 lg:grid-cols-2">
          <EventUpdatesForm />
          <div
            id="speak"
            className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Interested in speaking?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We’re always looking for founders and operators who can share
              practical lessons from building. Tell us what you’ve learned, and
              what you’d want to discuss with peers.
            </p>
            <Button
              render={<Link href="/apply" />}
              className="mt-6 h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto"
            >
              Share your interest
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              Prefer email? Mention speaking in your member application or
              partner inquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
