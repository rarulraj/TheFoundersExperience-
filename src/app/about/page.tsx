import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Founders } from "@/components/Founders";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Founders Experience, a curated community where founders share real experiences and grow stronger companies together.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-section pb-10">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">About</p>
            <h1 className="mt-5 text-balance font-display text-h1 text-ink">
              A space for the realities of building.
            </h1>
            <p className="mt-7 text-lead text-muted-foreground">
              {siteConfig.positioning}
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-sm pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Founder-led",
              body: "Conversations are shaped by people who are in the work: founders, cofounders, and operators navigating growth in real time.",
            },
            {
              title: "Knowledge shared",
              body: "We believe lessons should travel. Members share what worked, what didn’t, and what they would do differently next time.",
            },
            {
              title: "Success celebrated together",
              body: "Wins matter more when they’re shared with people who understand the cost of getting there.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="surface-card group rounded-2xl p-6 sm:p-7"
            >
              <div className="mb-5 h-px w-10 bg-brand/60 transition-all duration-500 group-hover:w-16" />
              <h2 className="font-display text-h3 text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-section-sm">
        <div className="container-site">
          <div className="max-w-3xl">
            <div className="brand-flare mb-7" />
            <h2 className="text-balance font-display text-h2 text-ink">
              Not merely a networking group.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The Founders Experience is a community, not a platform. We bring
              founders together for honest conversation, peer support, and
              relationships that last beyond a single event. Membership is free.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Through shared experience, members can learn faster, make better
              decisions, and build stronger companies.
            </p>
            <div className="mt-8">
              <Button
                render={<Link href="/apply" />}
                className="btn-glow h-11 w-full bg-brand text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
              >
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Founders />

      <section id="privacy" className="py-section-sm">
        <div className="container-site">
          <div className="surface-panel max-w-3xl rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-h3 text-ink">Privacy</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We treat member and partner information with care. Application
              details are used to review fit, operate the community, and share
              relevant updates you opt into. We do not sell personal data. For
              privacy questions, reach out through the partner or member forms
              and note “Privacy” in your message.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
