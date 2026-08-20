"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-section-sm">
      <div className="container-site">
        <FadeIn>
          <div className="glow-brand relative overflow-hidden rounded-3xl border border-brand/25 bg-surface p-7 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_75%_at_85%_5%,rgba(0,198,252,0.2),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_5%_100%,rgba(0,198,252,0.1),transparent_70%)]" />
            <div className="grain pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <p className="eyebrow">Join the community</p>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-h2 text-ink">
                Build alongside people who understand the journey.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Membership is free for accepted founders and operators. Apply
                and we’ll be in touch.
              </p>
              <Button
                render={<Link href="/apply" />}
                className="btn-glow mt-9 h-12 w-full bg-brand px-6 text-base text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
              >
                Apply to Join
                <ArrowRight
                  data-icon="inline-end"
                  className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
