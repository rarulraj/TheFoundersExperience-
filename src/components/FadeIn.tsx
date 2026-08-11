"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
