import type { Metadata } from "next";
import Link from "next/link";
import { Events } from "@/components/Events";
import { Speakers } from "@/components/Speakers";
import { EventUpdatesForm } from "@/components/EventUpdatesForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The Founders Panel in October is our first gathering, coming soon — plus dinners, roundtables, and coworking sessions.",
};

export default function EventsPage() {
  return (
    <>
      <section className="section-padding pb-10">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Events</p>
          <h1 className="mt-5 text-balance font-display text-3xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Gatherings for people building companies.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We start in October with the Founders Panel, our first gathering.
            More dinners, roundtables, and in-person sessions will follow.
          </p>
        </div>
      </section>

      <Events showAllLink={false} />
      <Speakers />

      <section
        id="event-updates"
        className="section-stack section-divider scroll-mt-24 bg-surface/40"
      >
        <div className="container-site grid max-w-5xl gap-6 lg:grid-cols-2">
          <EventUpdatesForm />
          <div
            id="speak"
            className="surface-panel scroll-mt-28 rounded-2xl p-6 sm:p-8"
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
              className="btn-glow mt-6 h-11 w-full bg-brand text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
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
