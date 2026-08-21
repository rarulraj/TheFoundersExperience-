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
          <div className="dark-panel relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14 md:p-20">
            <div className="grain pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <p className="eyebrow-center border-white/15 bg-white/5 text-brand-bright shadow-none">
                Join the community
              </p>
              <h2 className="mx-auto mt-7 max-w-2xl text-balance font-display text-h2 text-white">
                Build alongside people who understand the journey.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lead text-white/70">
                Membership is free for accepted founders and operators. Apply
                and we’ll be in touch.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  render={<Link href="/apply" />}
                  className="h-12 w-full rounded-full bg-brand-bright px-7 text-base font-semibold text-navy shadow-[0_16px_40px_-14px_rgba(0,198,252,0.65)] transition-all hover:-translate-y-0.5 hover:bg-brand-bright/90 sm:w-auto"
                >
                  Apply to Join
                  <ArrowRight
                    data-icon="inline-end"
                    className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                  />
                </Button>
                <Link
                  href="/events"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  See upcoming events
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
