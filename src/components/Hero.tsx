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
      <div className="relative min-h-[min(92vh,880px)]">
        <Image
          src="/images/community-gathering.jpg"
          alt="Founders and operators gathered for a Founders Experience evening of conversations and shared lessons."
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.34)_28%,rgba(0,0,0,0.74)_64%,#000_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_12%_100%,rgba(0,198,252,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_92%_8%,rgba(0,198,252,0.1),transparent_70%)]" />
        <div className="grain pointer-events-none absolute inset-0 opacity-60" />

        <div className="container-site relative flex min-h-[min(92vh,880px)] flex-col justify-end pb-16 pt-28 sm:pb-24 md:pb-28">
          <motion.div
            initial={{ opacity: 0, scaleX: reduceMotion ? 1 : 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="brand-flare mb-8"
          />

          <motion.h1
            {...rise(0.05)}
            className="max-w-4xl text-balance font-display text-4xl leading-[1.05] tracking-tight text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Building a company is hard. You shouldn’t have to do it alone.
          </motion.h1>

          <motion.p
            {...rise(0.12)}
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            The Founders Experience brings founders and startup leaders together
            to share the realities of building, learn from each other, and grow
            stronger companies together.
          </motion.p>

          <motion.div
            {...rise(0.18)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/apply" />}
              className="btn-glow h-12 bg-brand px-6 text-base text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90"
            >
              Apply to Join
              <ArrowRight
                data-icon="inline-end"
                className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </Button>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              See upcoming events
            </Link>
          </motion.div>

          <motion.p
            {...rise(0.26)}
            className="mt-12 text-[0.7rem] font-semibold tracking-[0.2em] text-brand uppercase"
          >
            Built by founders. For founders.
          </motion.p>
          <motion.p {...rise(0.3)} className="mt-3 text-sm text-white/70">
            Membership is free for accepted founders and operators.
          </motion.p>
        </div>
      </div>

      <div className="border-b border-border/70 bg-surface/70 backdrop-blur-sm">
        <div className="container-site flex flex-wrap items-center gap-x-8 gap-y-2 px-5 py-5 sm:px-8 lg:px-12">
          {socialProofPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-8">
              {index > 0 && (
                <span
                  aria-hidden
                  className="hidden h-3.5 w-px bg-border sm:block"
                />
              )}
              <span className="text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-ink">
                {point}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
