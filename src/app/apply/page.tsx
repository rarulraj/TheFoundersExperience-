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
      <section className="section-padding pb-8">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Membership</p>
          <h1 className="mt-5 text-balance font-display text-3xl leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Apply to join the community.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
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
      </section>

      <section className="section-stack pt-0">
        <div className="container-site max-w-4xl">
          <FounderApplicationForm />
        </div>
      </section>
    </>
  );
}
