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
        document.documentElement.classList.remove("dark");
        localStorage.theme = ThemeMode.LIGHT;
        break;
      case ThemeMode.DARK:
        document.documentElement.classList.add("dark");
        localStorage.theme = ThemeMode.DARK;
        break;
      case ThemeMode.SYSTEM:
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
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
