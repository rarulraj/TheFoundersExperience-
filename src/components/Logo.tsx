import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  preload?: boolean;
};

export function Logo({ className, preload }: LogoProps) {
  return (
    <Image
      src="/brand/tfe-wordmark.png"
      alt="The Founders Experience"
      width={240}
      height={60}
      quality={95}
      preload={preload}
      loading={preload ? "eager" : undefined}
      fetchPriority={preload ? "high" : undefined}
      className={cn("h-10 w-auto", className)}
    />
  );
}
