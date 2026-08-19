"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LogoMarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

function Wordmark({ name }: { name: string }) {
  return (
    <span className="flex shrink-0 items-center gap-8 px-5 sm:gap-12 sm:px-8">
      <span className="font-display text-base tracking-[0.16em] text-ink/45 uppercase transition-colors duration-300 hover:text-ink sm:text-lg">
        {name}
      </span>
      <span aria-hidden className="size-1 shrink-0 rounded-full bg-brand/40" />
    </span>
  );
}

export function LogoMarquee({
  items,
  reverse = false,
  className,
}: LogoMarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-y-3 py-3",
          className
        )}
      >
        {items.map((item) => (
          <Wordmark key={item} name={item} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden py-3",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <p className="sr-only">{items.join(", ")}</p>
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex">
            {items.map((item) => (
              <Wordmark key={`${copy}-${item}`} name={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
