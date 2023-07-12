"use client";

import { useTheme } from "next-themes";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="flex items-center justify-center rounded-lg p-4 transition-colors hover:bg-black dark:hover:bg-zinc-100"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme == "dark" ? (
        <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-300" />
      )}
    </button>
  );
}
