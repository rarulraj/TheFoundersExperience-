"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-section-sm section-divider">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <FadeIn>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-5 text-balance font-display text-h2 text-ink">
              Everything founders ask before applying.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Something else on your mind? Ask us in your application. A real
              person reads every one.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="surface-panel divide-y divide-border overflow-hidden rounded-3xl">
              {faqs.map((faq, index) => {
                const open = openIndex === index;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/70 sm:px-7"
                    >
                      <span className="font-display text-base text-ink sm:text-lg">
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300",
                          open &&
                            "rotate-45 border-brand/40 bg-accent text-brand"
                        )}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7 sm:text-[0.95rem]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
