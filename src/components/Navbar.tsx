"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-border/70 bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href="/"
          aria-label="The Founders Experience home"
          className="group flex min-w-0 items-center"
        >
          <Logo
            priority
            className="h-8 w-auto max-w-[min(58vw,220px)] rounded-md transition-transform duration-300 group-hover:scale-[1.02] sm:h-10 sm:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm transition-colors",
                  active ? "text-ink" : "text-muted-foreground hover:text-ink"
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-3.5 -bottom-px h-px origin-center bg-brand transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Button
            render={<Link href="/apply" />}
            className="btn-glow h-10 bg-brand px-4 text-sm text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90"
          >
            Apply to Join
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-ink transition-colors hover:border-brand/40 hover:text-brand lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 border-t border-border/70 bg-background/95 backdrop-blur-xl duration-200 lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-muted hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            <div className="rule-fade mt-3 mb-4" />
            <div>
              <Button
                render={<Link href="/apply" onClick={closeMenu} />}
                className="btn-glow h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90"
              >
                Apply to Join
              </Button>
            </div>
            <p className="px-3 pt-3 text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
