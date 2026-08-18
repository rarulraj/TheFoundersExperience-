"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialProofPoints } from "@/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[min(88vh,820px)]">
        <Image
          src="/images/community-gathering.jpg"
          alt="Founders and operators gathered for a Founders Experience evening of conversations and shared lessons."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.34)_30%,rgba(0,0,0,0.72)_66%,#000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_100%,rgba(0,198,252,0.16),transparent_70%)]" />
        <div className="grain pointer-events-none absolute inset-0 opacity-60" />

        <div className="container-site relative flex min-h-[min(88vh,820px)] flex-col justify-end pb-16 pt-28 sm:pb-20 md:pb-24">
          <motion.h1
            {...rise(0.05)}
            className="max-w-4xl text-balance font-display text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building a company is hard. You shouldn’t have to do it alone.
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            The Founders Experience brings founders and startup leaders together
            to share the realities of building, learn from each other, and grow
            stronger companies together.
          </motion.p>

          <motion.div
            {...rise(0.18)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/apply" />}
              className="h-12 bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90"
            >
              Apply to Join
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center rounded-lg px-3 text-sm font-medium text-white/90 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              See upcoming events
            </Link>
          </motion.div>

          <motion.p
            {...rise(0.26)}
            className="mt-10 text-sm font-medium tracking-wide text-brand"
          >
            Built by founders. For founders.
          </motion.p>
          <motion.p {...rise(0.3)} className="mt-2 text-sm text-white/75">
            Membership is free for accepted founders and operators.
          </motion.p>
        </div>
      </div>

      <div className="border-y border-border/70 bg-surface/60">
        <div className="container-site flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4 text-sm text-muted-foreground sm:px-8 lg:px-12">
          {socialProofPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-6">
              {index > 0 && (
                <span
                  aria-hidden
                  className="hidden size-1 rounded-full bg-brand/50 sm:block"
                />
              )}
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
