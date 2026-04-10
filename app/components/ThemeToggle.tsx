"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-2xl animate-pulse bg-foreground/5 border border-foreground/10" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl glass transition-all duration-500 hover:scale-105 active:scale-95 border-foreground/5 hover:border-primary/20"
      aria-label="Toggle Theme"
    >
      <div className="relative h-6 w-6">
        <Sun
          className="absolute inset-0 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary"
        />
        <Moon
          className="absolute inset-0 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-secondary"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
