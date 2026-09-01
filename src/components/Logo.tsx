import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * TFE wordmark in TSE’s lockup language: stencil-tracked “THE FOUNDERS”
 * over the three-bar E (TSE’s mark) + “XPERIENCE”. Outer bars and the
 * word “XPERIENCE” inherit `currentColor` so the same SVG reads on navy
 * (white) and, if needed, on light surfaces (navy). Cyan is always TSE
 * light blue. `priority` is accepted for call-site compatibility.
 */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 268 46"
      role="img"
      aria-label="The Founders Experience"
      className={cn("h-10 w-auto", className)}
    >
      <text
        x="0"
        y="12"
        fill="#28AEC3"
        fontFamily="var(--font-montserrat), ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="3.6"
      >
        THE FOUNDERS
      </text>

      {/* TSE three-bar E — the E of EXPERIENCE */}
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
