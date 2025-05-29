import { useState, useMemo, useEffect, useCallback } from "react";
import getTheme from "../theme";
import { Theme } from "@mui/material/styles";

const THEME_MODE_KEY = "themeMode";

const useMode = () => {
  // Initialize mode from localStorage or default to light
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem(THEME_MODE_KEY);
      return savedMode === "dark" ? "dark" : "light";
    }
    return "light";
  });

  // Memoize the theme to prevent unnecessary recalculations
  const theme: Theme = useMemo(() => getTheme(mode), [mode]);

  // Toggle mode function with proper state and localStorage updates
  const toggleMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem(THEME_MODE_KEY, newMode);
      return newMode;
    });
  }, []);

  // Effect to handle initial theme and system preference
  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute("data-theme", mode);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newMode = e.matches ? "dark" : "light";
      setMode(newMode);
      localStorage.setItem(THEME_MODE_KEY, newMode);
    };

    // Only add listener if user hasn't set a preference
    if (!localStorage.getItem(THEME_MODE_KEY)) {
      mediaQuery.addEventListener("change", handleChange);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [mode]);

  return { theme, mode, toggleMode };
};

export default useMode;
