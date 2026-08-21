"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredEvent, socialProofPoints } from "@/data/content";

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
    <section className="relative overflow-hidden">
      {/* Pastel mesh wash, cyan-forward with a whisper of violet. */}
      <div className="mesh-light absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="container-site relative pt-20 pb-14 text-center sm:pt-28 sm:pb-20">
        <motion.p {...rise(0)} className="eyebrow-center">
          Built by founders. For founders.
        </motion.p>

        <motion.h1
          {...rise(0.06)}
          className="mx-auto mt-7 max-w-4xl text-balance font-display text-display text-ink"
        >
          Building a company is hard.{" "}
          <span className="bg-[linear-gradient(100deg,var(--brand)_10%,var(--brand-bright)_55%,#818cf8_100%)] bg-clip-text text-transparent">
            You shouldn’t have to do it alone.
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.14)}
          className="mx-auto mt-6 max-w-2xl text-lead text-muted-foreground"
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
            className="shadow-lift inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 text-base font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:w-auto"
          >
            See upcoming events
          </Link>
        </motion.div>

        <motion.p {...rise(0.3)} className="mt-6 text-sm text-muted-foreground">
          Membership is free for accepted founders and operators.
        </motion.p>

        {/* Framed visual: the community, presented like a product shot. */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 32, scale: reduceMotion ? 1 : 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div
            aria-hidden
            className="absolute -inset-x-8 -top-10 bottom-1/3 rounded-[3rem] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(0,198,252,0.22),transparent_70%)] blur-2xl"
          />
          <div className="media-frame relative overflow-hidden rounded-3xl border border-border bg-card p-2 sm:rounded-[2rem] sm:p-2.5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-[1.5rem]">
              <Image
                src="/images/community-gathering.jpg"
                alt="Founders and operators gathered for a Founders Experience evening of conversations and shared lessons."
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover object-[center_42%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />

              {/* Floating context chips, like product UI annotations. */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2 sm:bottom-6 sm:left-6">
                <motion.div
                  {...rise(0.6)}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/25 bg-navy/55 px-4 py-2.5 text-left text-white shadow-lg backdrop-blur-md"
                >
                  <span className="icon-tile flex size-8 items-center justify-center rounded-xl border-white/20">
                    <Users className="size-4 text-brand-bright" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">100+ founders</span>
                    <span className="block text-xs text-white/70">
                      and startup leaders
                    </span>
                  </span>
                </motion.div>
              </div>
              <motion.div
                {...rise(0.72)}
                className="absolute right-4 bottom-4 hidden items-center gap-2.5 rounded-2xl border border-white/25 bg-navy/55 px-4 py-2.5 text-left text-white shadow-lg backdrop-blur-md sm:right-6 sm:bottom-6 md:flex"
              >
                <span className="icon-tile flex size-8 items-center justify-center rounded-xl border-white/20">
                  <CalendarDays className="size-4 text-brand-bright" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">
                    {featuredEvent.title}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/70">
                    <MapPin className="size-3" />
                    {featuredEvent.location} · {featuredEvent.date}
                  </span>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slim proof strip under the hero. */}
      <div className="relative border-y border-border/80 bg-surface/70">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 py-5">
          {socialProofPoints.map((point, index) => (
            <span key={point} className="flex items-center gap-8">
              {index > 0 && (
                <span
                  aria-hidden
                  className="hidden size-1 rounded-full bg-brand-bright/60 sm:block"
                />
              )}
              <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-ink">
                {point}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
