"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,247,248,0.2)_0%,rgba(246,247,248,0.85)_72%,#f6f7f8_100%)]" />

      <div className="relative min-h-[min(92vh,880px)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(46,138,153,0.22), rgba(11,31,42,0.45)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(46,138,153,0.35),transparent_45%),linear-gradient(to_top,rgba(244,247,248)_0%,rgba(244,247,248,0.55)_38%,transparent_70%)]" />

        <div className="container-site relative flex min-h-[min(92vh,880px)] flex-col justify-end pb-16 pt-28 sm:pb-20 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 font-display text-2xl tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            The Founders Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building a company is hard. You shouldn’t have to do it alone.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            The Founders Experience brings founders and startup leaders together
            to share the realities of building, learn from each other, and grow
            stronger companies together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/apply" />}
              className="h-12 bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90"
            >
              Apply to Join
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
            <Link
              href="/partners#partner-form"
              className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Partner With Us
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm text-white/75"
          >
            Join a growing community of founders and startup operators.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
