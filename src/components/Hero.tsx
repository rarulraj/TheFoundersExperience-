"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TseLogo } from "@/components/TseLogo";
import { foundingSponsor, socialProofPoints } from "@/data/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="hero-navy relative overflow-hidden">
      <div className="container-site relative pt-20 pb-16 text-center sm:pt-28 sm:pb-24">
        <motion.p {...rise(0)} className="eyebrow-center">
          Built by founders. For founders.
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="mx-auto mt-7 max-w-4xl text-balance font-display text-display text-white"
        >
          Building a company is hard.{" "}
          <span className="bg-[linear-gradient(100deg,#7ed4e2_10%,var(--brand-bright)_70%,#ffffff_100%)] bg-clip-text text-transparent">
            You shouldn’t have to do it alone.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.14)}
          className="mx-auto mt-6 max-w-2xl text-lead text-white/70"
        >
          The Founders Experience brings founders and startup leaders together
          to share the realities of building, learn from each other, and grow
          stronger companies together.
        </motion.p>

        <motion.div
          {...rise(0.22)}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            render={<Link href="/apply" />}
            className="btn-glow h-12 w-full rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
          >
            Apply to Join
            <ArrowRight
              data-icon="inline-end"
              className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
            />
          </Button>
          <Link
            href="/events"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:w-auto"
          >
            See upcoming events
          </Link>
        </motion.div>

        <motion.div
          {...rise(0.3)}
          className="mt-8 flex flex-col items-center gap-3.5"
        >
          <p className="caption text-white/50">
            Membership is free for accepted founders and operators.
          </p>
          <a
            href={foundingSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
          >
            <span className="text-[0.62rem] font-bold tracking-[0.18em] text-white/45 uppercase">
              Backed by
            </span>
            <TseLogo variant="markOnNavy" className="h-7 w-auto sm:h-8" />
          </a>
        </motion.div>
      </div>

      <div className="relative border-y border-white/10 bg-white/5">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 py-5">
          {socialProofPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-8">
              {index > 0 && (
                <span
                  aria-hidden
                  className="hidden size-1 rounded-full bg-brand-bright/70 sm:block"
                />
              )}
              <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-white/55 uppercase transition-colors hover:text-white">
                {point}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
