import Link from "next/link";
import { siteConfig } from "@/data/content";
import { Logo } from "@/components/Logo";

const footerLinks = [
  { label: "Community", href: "/#community" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Apply", href: "/apply" },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Privacy", href: "/about#privacy" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_90%_at_15%_0%,rgba(0,198,252,0.08),transparent_70%)]" />
      <div className="container-site relative py-section-sm">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="The Founders Experience home"
              className="group inline-block"
            >
              <Logo className="h-10 w-auto max-w-[220px] rounded-lg transition-transform duration-500 group-hover:scale-[1.02] sm:h-14 sm:max-w-none" />
            </Link>
            <p className="mt-6 text-[0.7rem] font-semibold tracking-[0.18em] text-brand uppercase">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Membership is free for accepted founders and operators.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3 sm:gap-x-12 lg:grid-cols-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex w-fit items-center gap-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-ink"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span
                  aria-hidden
                  className="h-px w-0 bg-brand transition-all duration-300 group-hover:w-4"
                />
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="rule-fade mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Founders Experience. All rights
            reserved.
          </p>
          <p>A curated founder community.</p>
        </div>
      </div>
    </footer>
  );
}
