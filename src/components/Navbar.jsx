import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkBase = "px-3 py-2 rounded-md text-sm font-medium";
  const linkActive = "bg-brand-600 text-white";
  const linkInactive = "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800";

  return (
    <header className="bg-white dark:bg-slate-900/90 backdrop-blur sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">🌱</span>
          <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">Salir del Juego · Rosario</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-lg border border-slate-300"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Inicio</NavLink>
          <NavLink to="/que-es" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>¿Qué es?</NavLink>
          <NavLink to="/recursos" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Recursos</NavLink>
          <NavLink to="/comunidad" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Comunidad</NavLink>
          <NavLink to="/foro" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Foro</NavLink>
          <NavLink to="/familiares" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Familiares</NavLink>
          <NavLink to="/contacto" className={({isActive}) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Contacto</NavLink>
        </nav>
          <ThemeToggle />
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700">
          <nav className="px-4 py-2 grid gap-2 bg-white dark:bg-slate-900">
            <NavLink onClick={() => setOpen(false)} to="/" end className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Inicio</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/que-es" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">¿Qué es?</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/recursos" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Recursos</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/comunidad" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Comunidad</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/familiares" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Familiares</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contacto" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Contacto</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
