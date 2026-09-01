import type { Metadata } from "next";
import Link from "next/link";
import { Events } from "@/components/Events";
import { Speakers } from "@/components/Speakers";
import { EventUpdatesForm } from "@/components/EventUpdatesForm";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The Founders Panel in October is our first gathering, coming soon, plus dinners, roundtables, and coworking sessions.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gatherings for people building companies."
      >
        <p className="mt-7 max-w-2xl text-lead text-white/70">
          We start in October with the Founders Panel, our first gathering.
          More dinners, roundtables, and in-person sessions will follow.
        </p>
      </PageHero>

      <Events showAllLink={false} />
      <Speakers />

      <section
        id="event-updates"
        className="py-section-sm section-divider bg-surface/70"
      >
        <div className="container-site">
          <div className="grid max-w-5xl gap-6 lg:grid-cols-2">
            <EventUpdatesForm />
            <div id="speak" className="surface-panel rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-h3 text-ink">
                Interested in speaking?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We’re always looking for founders and operators who can share
                practical lessons from building. Tell us what you’ve learned,
                and what you’d want to discuss with peers.
              </p>
              <Button
                render={<Link href="/apply" />}
                className="btn-glow mt-6 h-11 w-full rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
              >
                Share your interest
              </Button>
              <p className="caption mt-4 text-muted-foreground">
                Prefer email? Mention speaking in your member application or
                partner inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
