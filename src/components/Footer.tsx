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
    <footer className="border-t border-border bg-surface">
      <div className="container-site section-padding !py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Link href="/" aria-label="The Founders Experience home">
              <Logo className="h-10 w-auto max-w-[220px] rounded-lg sm:h-14 sm:max-w-none" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Membership is free for accepted founders and operators.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-ink"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Founders Experience. All rights
            reserved.
          </p>
          <p>A curated founder community and event platform.</p>
        </div>
      </div>
    </footer>
  );
}
