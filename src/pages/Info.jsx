import React from "react";

export default function Info() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">¿Qué es la ludopatía?</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300">
        La ludopatía es un trastorno del control de impulsos que se manifiesta como una necesidad persistente de jugar,
        a pesar de sus consecuencias negativas. Esta página brinda información general con fines de orientación y no sustituye
        la evaluación profesional.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Señales frecuentes</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li>Pérdida de control sobre tiempo/dinero destinado al juego.</li>
            <li>Necesidad de aumentar la apuesta para sentir la misma excitación.</li>
            <li>Mentir o ocultar la conducta de juego.</li>
            <li>Impacto negativo en trabajo, estudio o vínculos.</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Mitos y realidades</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li><strong>Mito:</strong> “Puedo recuperar todo con una última apuesta”.</li>
            <li><strong>Realidad:</strong> el juego está diseñado para que la casa tenga ventaja.</li>
            <li><strong>Mito:</strong> “Puedo dejar cuando quiera”.</li>
            <li><strong>Realidad:</strong> muchas personas necesitan apoyo profesional y social.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-5 rounded-xl border border-amber-200 bg-amber-50">
        <p className="text-sm text-amber-900">
          Si creés que estás en riesgo, priorizá tu seguridad. Considerá pedir ayuda de inmediato y tomar distancia de entornos y apps de apuesta.
        </p>
      </div>
    </section>
  );
}
