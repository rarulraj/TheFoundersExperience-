import Image from "next/image";
import { cn } from "@/lib/utils";

type TseLogoProps = {
  className?: string;
  /** `mark` is the TSE lettermark; `wordmark` is the full lockup for light cards. */
  variant?: "mark" | "markOnNavy" | "wordmark";
};

export function TseLogo({ className, variant = "wordmark" }: TseLogoProps) {
  const assets = {
    mark: {
      src: "/sponsors/tse-mark.png",
      width: 215,
      height: 215,
    },
    markOnNavy: {
      src: "/sponsors/tse-mark-on-navy.png",
      width: 192,
      height: 192,
    },
    wordmark: {
      src: "/sponsors/tse-wordmark.jpg",
      width: 545,
      height: 99,
    },
  } as const;

  const asset = assets[variant];

  return (
    <Image
      src={asset.src}
      alt="The Search Experience"
      width={asset.width}
      height={asset.height}
      className={cn("h-8 w-auto object-contain object-left", className)}
    />
  );
}
