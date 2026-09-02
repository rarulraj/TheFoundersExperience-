import { foundingSponsor } from "@/data/content";
import { TseWordmarkPlate } from "@/components/TseLogo";
import { cn } from "@/lib/utils";

type FoundingSponsorProps = {
  className?: string;
};

export function FoundingSponsor({ className }: FoundingSponsorProps) {
  return (
    <a
      href={foundingSponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "surface-card surface-card-static mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:px-10 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
        className
      )}
    >
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold tracking-[0.18em] text-brand uppercase">
          Founding sponsor
        </span>
        <span className="mt-4 block">
          <TseWordmarkPlate />
        </span>
      </span>
      <span className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
        {foundingSponsor.description}
      </span>
    </a>
  );
}
