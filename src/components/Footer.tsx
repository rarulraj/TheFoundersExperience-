import Link from "next/link";
import { siteConfig } from "@/data/content";

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
    <footer className="mt-8 border-t border-border bg-ink text-white">
      <div className="container-site section-padding !py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl tracking-tight sm:text-3xl">
              The Founders Experience
            </p>
            <p className="mt-3 text-sm text-white/70">{siteConfig.tagline}</p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Membership is free for accepted founders and operators.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
