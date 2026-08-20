import type { Metadata } from "next";
import Link from "next/link";
import { FounderApplicationForm } from "@/components/FounderApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Join",
  description:
    "Apply to join The Founders Experience, a curated community for founders and startup leaders.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="py-section pb-8">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="eyebrow">Membership</p>
            <h1 className="mt-5 text-balance font-display text-h1 text-ink">
              Apply to join the community.
            </h1>
            <p className="mt-7 max-w-2xl text-lead text-muted-foreground">
              Membership is free for accepted founders and startup leaders. Tell
              us what you’re building. We review every application carefully.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Looking to sponsor instead?{" "}
              <Link
                href="/partners#partner-form"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                Become a partner
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-sm pt-0">
        <div className="container-site">
          <div className="max-w-4xl">
            <FounderApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
