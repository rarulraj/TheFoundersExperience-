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
      <span className="text-[0.8rem] font-semibold tracking-[0.22em] text-ink/50 uppercase sm:text-sm">
        {name}
      </span>
      <span
        aria-hidden
        className="size-1 shrink-0 rounded-full bg-brand/35"
      />
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
        "relative overflow-hidden py-3",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <p className="sr-only">{items.join(", ")}</p>
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "hover:[animation-play-state:paused]"
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
