import { useEffect, useState } from "react";

export function useDarkMode() {
  const [darkmode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
  }, [darkmode]);

  const toggle = () => {
    setDarkMode((prev) => !prev);
  };

  return { darkmode, toggle };
}
