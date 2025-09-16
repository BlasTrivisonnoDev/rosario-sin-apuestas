import React, { useEffect, useState } from "react";
import ResourceCard from "../components/ResourceCard.jsx";

export default function Recursos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/src/data/centros.json")
      .then(res => res.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Recursos en Rosario / Santa Fe</h1>
        <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-3xl">
          Directorio local de ayuda. Antes de publicar, verificá teléfonos y direcciones oficiales. Si estás en riesgo inmediato, contactá a emergencias locales.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((i, idx) => (
          <ResourceCard key={idx} {...i} />
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">Mapa y autoexclusión</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
          Podés incorporar un mapa con centros verificados y, si existe en la provincia, un enlace al programa de autoexclusión.
        </p>
        <div className="mt-3">
          <a
            className="inline-flex px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps"
          >
            Abrir Google Maps
          </a>
        </div>
      </div>
    
      <div className=\"mt-10 p-5 rounded-xl border border-slate-200 bg-white dark:bg-slate-900\">
        <h2 className=\"font-semibold text-slate-900 dark:text-slate-100\">Mapa de centros (Rosario)</h2>
        <p className=\"text-sm text-slate-700 dark:text-slate-300 mt-2\">Vista de referencia. Confirmá direcciones y teléfonos antes de asistir.</p>
        <div className=\"mt-3 aspect-video w-full\">
          <iframe
            title=\"Mapa centros Rosario\" className=\"w-full h-full rounded-lg border border-slate-200 dark:border-slate-700\" loading=\"lazy\" allowfullscreen
            referrerpolicy=\"no-referrer-when-downgrade\"
            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.563397195888!2d-60.650000!3d-32.946820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab16e7f6f1b3%3A0x0!2sRosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700000000000\">
          </iframe>
        </div>
      </div>

    </section>
  );
}
