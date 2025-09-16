import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">🌱</span>
            <span className="font-semibold text-slate-800 dark:text-slate-100">Salir del Juego · Rosario</span>
          </div>
          <p className="text-sm text-slate-600">Recursos, apoyo y comunidad para dejar la ludopatía. Rosario, Santa Fe.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-slate-800 dark:text-slate-100">Secciones</div>
            <Link to="/que-es" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">¿Qué es?</Link>
            <Link to="/recursos" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Recursos</Link>
            <Link to="/comunidad" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Comunidad</Link>
            <Link to="/familiares" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Familiares</Link>
            <Link to="/contacto" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Contacto</Link>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-slate-800 dark:text-slate-100">Legal</div>
            <a href="#" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Privacidad</a>
            <a href="#" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Términos</a>
            <a href="#" className="block text-slate-600 hover:text-slate-900 dark:text-slate-100">Créditos</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-6">© {new Date().getFullYear()} Salir del Juego · Rosario</div>
    </footer>
  );
}
