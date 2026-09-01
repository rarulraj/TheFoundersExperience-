"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  getStoredTheme,
  THEME_STORAGE_KEY,
  toggleTheme,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      if (getStoredTheme()) return;
      applyTheme(media.matches ? "dark" : "light");
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY) return;
      if (event.newValue === "light" || event.newValue === "dark") {
        applyTheme(event.newValue);
      }
    };

    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white shadow-sm transition-colors hover:border-brand-bright/50 hover:text-brand-bright lg:size-10",
        className
      )}
      aria-label="Toggle light and dark mode"
      onClick={toggleTheme}
    >
      <span className="relative size-5">
        <Sun className="absolute inset-0 size-5 scale-0 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100" />
        <Moon className="absolute inset-0 size-5 scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-0 dark:-rotate-90 dark:opacity-0" />
      </span>
    </button>
  );
}
