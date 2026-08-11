"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding pt-8">
      <div className="container-site">
        <FadeIn>
          <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
            <div className="bg-surface p-8 sm:p-10 md:p-12">
              <p className="text-sm font-medium tracking-wide text-brand">
                For Founders
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Build alongside people who understand the journey.
              </h2>
              <Button
                render={<Link href="/apply" />}
                className="mt-8 h-12 bg-brand px-6 text-brand-foreground hover:bg-brand/90"
              >
                Apply to Join
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </div>
            <div className="bg-ink p-8 text-white sm:p-10 md:p-12">
              <p className="text-sm font-medium tracking-wide text-white/50">
                For Brands
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                Support the people building what comes next.
              </h2>
              <Link
                href="/partners#partner-form"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Become a Partner
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
