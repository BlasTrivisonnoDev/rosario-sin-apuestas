import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            No estás solo. Hay un camino para dejar el juego.
          </h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg">
            Recursos confiables, comunidad y ayuda inmediata en Rosario, Santa Fe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contacto" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700">
              Quiero ayuda ahora
            </Link>
            <Link to="/recursos" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">
              Ver recursos
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-500">*Si estás en riesgo inmediato, llama a emergencias locales.</p>
        </div>
        <div className="p-6">
          <div className="aspect-[4/3] w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm grid place-items-center">
            <div className="text-center p-6">
              <div className="text-6xl">🌤️</div>
              <p className="mt-2 text-slate-600">Diseño calmo, sin estímulos tipo casino.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
