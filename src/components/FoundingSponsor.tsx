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
        "surface-card mx-auto flex max-w-4xl flex-col gap-5 rounded-3xl px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10",
        className
      )}
    >
      <span className="min-w-0 text-ink">
        <span className="block text-[0.68rem] font-bold tracking-[0.18em] text-brand uppercase">
          Founding sponsor
        </span>
        <TseLogo
          variant="wordmark"
          className="mt-3 h-8 w-auto max-w-[min(72vw,220px)] sm:h-9"
        />
      </span>
      <span className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
        {foundingSponsor.description}
      </span>
    </a>
  );
}
