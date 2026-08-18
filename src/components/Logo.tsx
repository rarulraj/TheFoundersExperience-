import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="The Founders Experience"
      width={1024}
      height={280}
      priority={priority}
      className={cn("h-10 w-auto rounded-md", className)}
    />
  );
}
