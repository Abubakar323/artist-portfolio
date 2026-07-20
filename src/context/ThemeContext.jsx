import { createContext, useContext, useEffect, useState } from "react";

// "swatch"/"swatch2" are only used to draw the little two-tone dot in the
// dropdown — the actual colors live in src/index.css as CSS variables and
// are consumed everywhere via the purple/cyan/pink/blue Tailwind overrides
// in tailwind.config.js.
export const themes = [
  { id: "purple-cyan", name: "Purple & Cyan", swatch: "#a855f7", swatch2: "#06b6d4" },
  { id: "rose-amber", name: "Rose & Amber", swatch: "#f43f5e", swatch2: "#f59e0b" },
  { id: "emerald-teal", name: "Emerald & Teal", swatch: "#22c55e", swatch2: "#14b8a6" },
  { id: "sapphire-indigo", name: "Sapphire & Indigo", swatch: "#3b82f6", swatch2: "#6366f1" },
  { id: "sunset", name: "Sunset", swatch: "#f97316", swatch2: "#ef4444" },
];

const STORAGE_KEY = "artist-portfolio-theme";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && themes.some((t) => t.id === saved)) return saved;
    } catch {
      // localStorage unavailable (e.g. private browsing) — fall back silently
    }
    return "purple-cyan";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write errors
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
