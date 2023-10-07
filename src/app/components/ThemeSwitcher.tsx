"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [darkSide, setDarkSide] = useState(true);
  const { theme, setTheme } = useTheme();
  //   const [colorTheme, setTheme] = useDarkSide();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "light" : "dark");
    setDarkSide(checked);
  };

  return (
    <div className="flex justify-center items-center dark:bg-[#080808] bg-gray-200 w-6 h-6 rounded-full">
      <button
        name="switch"
        aria-label="switch"
        role="button"
        onClick={() => toggleDarkMode(!darkSide)}
      >
        {darkSide ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
