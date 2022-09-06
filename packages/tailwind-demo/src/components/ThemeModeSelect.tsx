import React, { useEffect, useState } from "react";

enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export const ThemeModeSelect = () => {
  const [mode, setMode] = useState(ThemeMode.SYSTEM);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as ThemeMode);

    switch (e.target.value as ThemeMode) {
      case ThemeMode.LIGHT:
        localStorage.theme = ThemeMode.LIGHT;
        document.documentElement.classList.remove("dark");
        break;
      case ThemeMode.DARK:
        localStorage.theme = ThemeMode.DARK;
        document.documentElement.classList.add("dark");
        break;
      case ThemeMode.SYSTEM:
        localStorage.removeItem("theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;
    }
  };

  useEffect(() => {
    setMode(localStorage.theme || ThemeMode.SYSTEM);
  }, []);

  return (
    <form>
      <label htmlFor="mode-select">Theme Mode:</label>
      <select
        name="modes"
        id="mode-select"
        className="ml-4 text-black border rounded-md"
        onChange={handleChange}
        value={mode}
      >
        <option value={ThemeMode.LIGHT}>Light</option>
        <option value={ThemeMode.DARK}>Dark</option>
        <option value={ThemeMode.SYSTEM}>System</option>
      </select>
    </form>
  );
};
