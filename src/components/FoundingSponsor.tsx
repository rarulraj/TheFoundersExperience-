import { foundingSponsor } from "@/data/content";
import { TseLogo } from "@/components/TseLogo";
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
        "surface-card mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10",
        className
      )}
    >
      <span className="flex min-w-0 items-center gap-4 sm:shrink-0">
        <TseLogo variant="wordmark" className="h-10 w-auto max-w-[min(72vw,240px)] sm:h-12" />
      </span>
      <span className="min-w-0 sm:text-right">
        <span className="block text-[0.68rem] font-bold tracking-[0.18em] text-brand uppercase">
          Founding sponsor
        </span>
        <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
          {foundingSponsor.description}
        </span>
      </span>
    </a>
  );
}
