import { useEffect, useMemo, useState } from "react";
import { themeConfig } from "../config/theme.config";

function getInitialTheme() {
  if (typeof window === "undefined") {
    return themeConfig.defaultTheme;
  }

  const storedTheme = window.localStorage.getItem(themeConfig.storageKey);

  if (storedTheme && themeConfig.themes[storedTheme]) {
    return storedTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return themeConfig.defaultTheme;
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeConfig.storageKey, theme);
  }, [theme]);

  const nextTheme = useMemo(() => {
    const themeNames = Object.keys(themeConfig.themes);
    const currentIndex = themeNames.indexOf(theme);
    return themeNames[(currentIndex + 1) % themeNames.length];
  }, [theme]);

  function toggleTheme() {
    setTheme(nextTheme);
  }

  return {
    theme,
    nextTheme,
    toggleTheme,
    currentLabel: themeConfig.themes[theme].label,
    nextLabel: themeConfig.themes[nextTheme].label,
  };
}
