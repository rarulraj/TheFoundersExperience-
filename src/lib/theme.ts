export const THEME_STORAGE_KEY = "tfe-theme";

export type Theme = "light" | "dark";

export const themeColors = {
  light: "#ffffff",
  dark: "#031f32",
} as const;

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(stored) ? stored : null;
}

export function getPreferredTheme(): Theme {
  const stored = getStoredTheme();
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;

  const color = themeColors[theme];
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", color);
    meta.removeAttribute("media");
  });
}

export function persistTheme(theme: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyTheme(theme);
}

export function toggleTheme() {
  const next: Theme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  persistTheme(next);
  return next;
}

/** Runs before paint so the first frame matches the stored or system theme. */
export const themeInitScript = `(function(){try{var stored=localStorage.getItem("${THEME_STORAGE_KEY}");var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var root=document.documentElement;root.classList.toggle("dark",theme==="dark");root.style.colorScheme=theme;var color=theme==="dark"?"${themeColors.dark}":"${themeColors.light}";document.querySelectorAll('meta[name="theme-color"]').forEach(function(meta){meta.setAttribute("content",color);meta.removeAttribute("media");});}catch(e){}})();`;
