import React from "react";
import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[
          { title: "¿Qué es la ludopatía?", text: "Síntomas, riesgos y mitos. Información clara y empática.", to: "/que-es" },
          { title: "Recursos en Rosario", text: "Directorio local, contactos y primeros pasos.", to: "/recursos" },
          { title: "Comunidad y apoyo", text: "Foro anónimo, historias y actividades.", to: "/comunidad" },
        ].map((c, i) => (
          <Link to={c.to} key={i} className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:shadow-md transition">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{c.title}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">{c.text}</p>
            <div className="mt-3 text-brand-700 text-sm font-medium">Ver más →</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
