import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme-dark") === "true";
    setDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme-dark", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 rounded-md border border-slate-300 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      {dark ? "🌙 Oscuro" : "🔆 Claro"}
    </button>
  );
}
