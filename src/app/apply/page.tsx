import type { Metadata } from "next";
import Link from "next/link";
import { FounderApplicationForm } from "@/components/FounderApplicationForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Apply to Join",
  description:
    "Apply to join The Founders Experience, a curated community for founders and startup leaders.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Apply to join the community.">
        <p className="mt-7 max-w-2xl text-lead text-white/70">
          Membership is free for accepted founders and startup leaders. Tell us
          what you’re building. We review every application carefully.
        </p>
        <p className="caption mt-4 text-white/55">
          Looking to sponsor instead?{" "}
          <Link
            href="/partners"
            className="font-medium text-brand-bright not-italic underline-offset-4 hover:underline"
          >
            Become a partner
          </Link>
          .
        </p>
      </PageHero>

      <section className="py-section-sm">
        <div className="container-site">
          <div className="max-w-4xl">
            <FounderApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
