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
      className={cn("h-8 w-auto object-contain object-left", className)}
    />
  );
}
