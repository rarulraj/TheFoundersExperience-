import { cn } from "@/lib/utils";

type TseLogoProps = {
  className?: string;
  /** `mark` is the TSE letters; `wordmark` is the two-line lockup. */
  variant?: "mark" | "wordmark";
};

function TseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 56"
      role="img"
      aria-label="The Search Experience"
      className={cn("h-5 w-auto", className)}
    >
      <g fill="currentColor">
        {/* Tick to the left of the T */}
        <rect x="0" y="0" width="13" height="11" rx="5.5" />
        {/* T — stem left-aligned under the bar */}
        <rect x="18" y="0" width="29" height="11" rx="5.5" />
        <rect x="18" y="0" width="11" height="56" rx="5.5" />
        {/* E — three equal bars */}
        <rect x="107" y="0" width="43" height="11" rx="5.5" />
        <rect x="107" y="22.5" width="43" height="11" rx="5.5" />
        <rect x="107" y="45" width="43" height="11" rx="5.5" />
      </g>
      {/* S — stencil, two strokes with a gap at the spine */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M89 7c-32 0-36 16-15 21" />
        <path d="M76 29c28 4 26 21-14 21" />
      </g>
    </svg>
  );
}

function TseWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 248 46"
      role="img"
      aria-label="The Search Experience"
      className={cn("h-10 w-auto", className)}
    >
      <text
        x="0"
        y="12"
        fill="#28AEC3"
        fontFamily="var(--font-montserrat), ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="4.2"
      >
        THE SEARCH
      </text>
      <rect x="0" y="18.2" width="20" height="5.4" rx="2.7" fill="currentColor" />
      <rect x="0" y="26.8" width="20" height="5.4" rx="2.7" fill="#28AEC3" />
      <rect x="0" y="35.4" width="20" height="5.4" rx="2.7" fill="currentColor" />
      <text
        x="26"
        y="40.2"
        fill="currentColor"
        fontFamily="var(--font-montserrat), ui-sans-serif, system-ui, sans-serif"
        fontSize="18"
        fontWeight="800"
        letterSpacing="2.4"
      >
        XPERIENCE
      </text>
    </svg>
  );
}

export function TseLogo({ className, variant = "mark" }: TseLogoProps) {
  if (variant === "wordmark") {
    return <TseWordmark className={className} />;
  }
  return <TseMark className={className} />;
}
