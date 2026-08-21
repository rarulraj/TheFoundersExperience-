import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Inline SVG wordmark. The mark is the same three-bar tile used by the
 * favicon (`src/app/icon.svg`), so the brand reads identically in the browser
 * tab, the nav, and the footer. The type uses `currentColor`, so the logo
 * adapts to light and dark contexts by inheriting text color from its parent.
 * `priority` is accepted for call-site compatibility but no longer maps to an
 * image preload.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 204 40"
      role="img"
      aria-label="The Founders Experience"
      className={cn("h-10 w-auto", className)}
    >
      {/* Favicon mark: navy tile, white / cyan / white bars. The faint
          currentColor stroke keeps the tile defined on dark panels. */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="9"
        fill="#060d1c"
        stroke="currentColor"
        strokeOpacity="0.14"
      />
      <rect x="8.5" y="9.4" width="23" height="4.5" rx="2.25" fill="#ffffff" />
      <rect x="8.5" y="17.75" width="23" height="4.5" rx="2.25" fill="#00c6fc" />
      <rect x="8.5" y="26.1" width="23" height="4.5" rx="2.25" fill="#ffffff" />

      <text
        x="50"
        y="15.5"
        fill="currentColor"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontSize="10"
        fontWeight="600"
        letterSpacing="3.1"
      >
        THE FOUNDERS
      </text>
      <text
        x="50"
        y="32"
        fill="currentColor"
        fontFamily="var(--font-inter), ui-sans-serif, system-ui, sans-serif"
        fontSize="15"
        fontWeight="800"
        letterSpacing="4.35"
      >
        EXPERIENCE
      </text>
    </svg>
  );
}
