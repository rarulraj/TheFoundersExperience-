"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

// Nav entries that point at a section of the home page rather than a route.
const sectionIds = navLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.slice(2));

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Dismiss the panel on any navigation, including browser back/forward, which
  // no click handler on the links would catch.
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which home-page section is in view so a section link and the Home
  // link are never highlighted at the same time.
  useEffect(() => {
    if (pathname !== "/") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        }
        // Resolve ties by nav order so the result is stable.
        setActiveSection(sectionIds.find((id) => inView.has(id)) ?? null);
      },
      // A band across the upper-middle of the viewport: a section counts as
      // current once it reaches reading position, not when it first peeks in.
      { rootMargin: "-25% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Close rather than reflow the panel when the viewport crosses into the
    // desktop layout, where the panel is hidden but would stay mounted.
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Only trust the observed section while we are actually on the home page.
  const currentSection = pathname === "/" ? activeSection : null;

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && currentSection === href.slice(2);
    }
    if (href === "/") {
      return pathname === "/" && currentSection === null;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        scrolled || open
          ? "border-border/80 bg-background/85 shadow-[0_8px_30px_-18px_rgba(var(--shadow-ink),0.28)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="The Founders Experience home"
          className="group flex min-w-0 items-center text-ink"
        >
          <Logo
            priority
            className="h-8 w-auto max-w-[min(58vw,220px)] transition-transform duration-300 group-hover:scale-[1.02] sm:h-9 sm:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-ink"
                    : "text-muted-foreground hover:text-ink"
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-4 -bottom-px h-0.5 origin-center rounded-full bg-brand-bright transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            render={<Link href="/apply" />}
            className="btn-glow h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Apply to Join
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-ink shadow-sm transition-colors hover:border-brand/40 hover:text-brand"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="animate-in fade-in slide-in-from-top-2 max-h-[calc(100dvh-var(--header-h))] overflow-y-auto overscroll-contain border-t border-border/80 bg-background/95 backdrop-blur-xl duration-200 lg:hidden"
        >
          <div className="container-site flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm transition-colors",
                    active
                      ? "bg-accent font-semibold text-accent-foreground"
                      : "text-ink hover:bg-muted hover:text-brand"
                  )}
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-brand-bright"
                    />
                  )}
                </Link>
              );
            })}
            <div className="rule-fade mt-3 mb-4" />
            <Button
              render={<Link href="/apply" onClick={closeMenu} />}
              className="btn-glow h-11 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Apply to Join
            </Button>
            <p className="px-3 pt-4 pb-1 text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {siteConfig.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
