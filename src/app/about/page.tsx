import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Founders } from "@/components/Founders";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Founders Experience — a curated community where founders share real experiences and grow stronger companies together.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-brand">About</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            A space for the realities of building.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {siteConfig.positioning}
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Founder-led",
              body: "Conversations are shaped by people who are in the work — founders, cofounders, and operators navigating growth in real time.",
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
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <h2 className="font-display text-2xl tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-ink text-white">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Not merely a networking group.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            The Founders Experience is a curated founder community and
            media/event platform. Members get genuine value for free. Aligned
            brands fund and support the ecosystem through carefully selected
            partnerships.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/75">
            Through honest conversations, shared experience, and genuine
            support, members can learn faster, make better decisions, and build
            stronger companies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<Link href="/apply" />}
              className="h-11 bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Apply to Join
            </Button>
            <Link
              href="/partners#partner-form"
              className="inline-flex h-11 items-center justify-center px-2 text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Founders />

      <section id="privacy" className="section-padding scroll-mt-24">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl tracking-tight text-ink">
            Privacy
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We treat member and partner information with care. Application
            details are used to review fit, operate the community, and share
            relevant updates you opt into. We do not sell personal data. For
            privacy questions, reach out through the partner or member forms and
            note “Privacy” in your message.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
