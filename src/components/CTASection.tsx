"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-stack">
      <div className="container-site">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-brand/25 bg-surface p-6 sm:rounded-3xl sm:p-12 md:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_10%,rgba(0,198,252,0.16),transparent_70%)]" />
            <div className="relative">
              <p className="text-sm font-medium tracking-wide text-brand">
                Join the community
              </p>
              <h2 className="mt-3 max-w-2xl text-balance font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl md:text-5xl">
                Build alongside people who understand the journey.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Membership is free for accepted founders and operators. Apply
                and we’ll be in touch.
              </p>
              <Button
                render={<Link href="/apply" />}
                className="mt-8 h-12 w-full bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90 sm:w-auto"
              >
                Apply to Join
                <ArrowRight data-icon="inline-end" className="size-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
