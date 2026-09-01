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
        "surface-card mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl bg-white px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:px-10",
        className
      )}
    >
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold tracking-[0.18em] text-brand uppercase">
          Founding sponsor
        </span>
        {/* Official TSE lockup sits on white with clear space around it. */}
        <span className="mt-5 block py-1">
          <TseLogo
            variant="wordmark"
            className="h-12 w-auto max-w-[min(80vw,300px)] sm:h-14"
          />
        </span>
      </span>
      <span className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
        {foundingSponsor.description}
      </span>
    </a>
  );
}
