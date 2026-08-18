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
          <div className="rounded-2xl border border-brand/25 bg-brand/10 p-8 sm:p-10 md:p-12">
            <p className="text-sm font-medium tracking-wide text-brand">
              Join the community
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Build alongside people who understand the journey.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Membership is free for accepted founders and operators. Apply and
              we’ll be in touch.
            </p>
            <Button
              render={<Link href="/apply" />}
              className="mt-8 h-12 bg-brand px-6 text-black hover:bg-brand/90"
            >
              Apply to Join
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
