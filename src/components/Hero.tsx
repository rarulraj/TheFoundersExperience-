"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,42,0.22)_0%,rgba(11,31,42,0.45)_48%,rgba(11,31,42,0.88)_100%)]" />
        <div className="absolute inset-0 grain pointer-events-none opacity-50" />

        <div className="container-site relative flex min-h-[min(88vh,820px)] flex-col justify-end pb-16 pt-28 sm:pb-20 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building a company is hard. You shouldn’t have to do it alone.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg"
          >
            The Founders Experience brings founders and startup leaders together
            to share the realities of building, learn from each other, and grow
            stronger companies together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/apply" />}
              className="h-12 bg-brand px-6 text-base text-black hover:bg-brand/90"
            >
              Apply to Join
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Link
              href="/events"
              className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              See upcoming events
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-6 text-sm font-medium tracking-wide text-brand"
          >
            Built by founders. For founders.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 text-sm text-white"
          >
            Membership is free for accepted founders and operators.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
