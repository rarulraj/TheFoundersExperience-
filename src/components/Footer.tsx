import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { foundingSponsor, siteConfig } from "@/data/content";
import { Logo } from "@/components/Logo";
import { TseNavyCredit } from "@/components/TseLogo";

const footerColumns = [
  {
    heading: "Community",
    links: [
      { label: "Why join", href: "/#community" },
      { label: "Events", href: "/events" },
      { label: "Apply to join", href: "/apply" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partners", href: "/partners" },
      { label: "Privacy", href: "/about#privacy" },
    ],
  },
  {
    heading: "Connect",
    links: [{ label: "LinkedIn", href: siteConfig.linkedin }],
  },
];

export function Footer() {
  return (
    <footer className="dark-panel relative overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-site relative py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="The Founders Experience home"
              className="group inline-block text-white"
            >
              <Logo className="h-9 w-auto transition-transform duration-500 group-hover:scale-[1.02] sm:h-10" />
            </Link>
            <p className="mt-6 text-[0.72rem] font-bold tracking-[0.18em] text-brand-bright uppercase">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A curated community where founders and startup leaders share the
              realities of building. Membership is free for accepted members.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-white/55 uppercase">
                  {column.heading}
                </p>
                <ul className="mt-4 space-y-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                        {link.href.startsWith("http") && (
                          <ArrowUpRight className="size-3.5 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-bright" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="caption mt-7 flex flex-col gap-3 text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} The Founders Experience. All rights
            reserved.
          </p>
          <a
            href={foundingSponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full not-italic transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <TseNavyCredit label="Founding sponsor" />
          </a>
        </div>
      </div>
    </footer>
  );
}
