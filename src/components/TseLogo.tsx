import Image from "next/image";
import { cn } from "@/lib/utils";

type TseLogoProps = {
  className?: string;
  /** Official guideline files. Navy mark is for navy chrome; wordmark is navy-on-white. */
  variant?: "mark" | "markOnNavy" | "wordmark";
};

const assets = {
  mark: {
    src: "/sponsors/tse-lettermark.png",
    width: 160,
    height: 73,
  },
  markOnNavy: {
    src: "/sponsors/tse-lettermark-navy.png",
    width: 170,
    height: 77,
  },
  wordmark: {
    src: "/sponsors/tse-wordmark.jpg",
    width: 545,
    height: 99,
  },
} as const;

export function TseLogo({ className, variant = "wordmark" }: TseLogoProps) {
  const asset = assets[variant];

  return (
    <Image
      src={asset.src}
      alt="The Search Experience"
      width={asset.width}
      height={asset.height}
      quality={variant === "wordmark" ? 95 : 90}
      className={cn("h-8 w-auto object-contain object-left", className)}
    />
  );
}

/** Official navy-on-white lockup. The card is the plate in light mode; dark mode needs a white well. */
export function TseWordmarkPlate({ className }: { className?: string }) {
  return (
    <span className="inline-flex items-center dark:rounded-2xl dark:bg-white dark:px-4 dark:py-3 dark:ring-1 dark:ring-navy/10">
      <TseLogo
        variant="wordmark"
        className={cn("h-11 w-auto max-w-[min(80vw,300px)] sm:h-12", className)}
      />
    </span>
  );
}

/** Quiet credit chip so the baked-navy lettermark doesn’t float on hero auras. */
export function TseNavyCredit({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-navy px-3 py-1.5",
        className
      )}
    >
      <span className="text-[0.62rem] font-bold tracking-[0.18em] text-white/55 uppercase">
        {label}
      </span>
      <TseLogo variant="markOnNavy" className="h-5 w-auto sm:h-6" />
    </span>
  );
}
