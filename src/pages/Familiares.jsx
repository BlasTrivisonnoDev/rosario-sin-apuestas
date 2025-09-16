import React from "react";

export default function Familiares() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Guía para familiares y amigos</h1>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Consejos prácticos para acompañar sin juzgar y cuidar tu propio bienestar.
      </p>

      <div className="mt-6 grid gap-6">
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Cómo ayudar</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li>Escuchá con empatía y evitá minimizar el problema.</li>
            <li>Establecé límites claros sobre dinero y convivencia.</li>
            <li>Promové buscar ayuda profesional y acompañá en el proceso.</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Autocuidado del entorno</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300 text-sm space-y-1">
            <li>Buscá tu propia red de apoyo o grupo para familiares.</li>
            <li>Definí momentos personales para descansar y despejarte.</li>
            <li>En caso de violencia o riesgo, priorizá tu seguridad.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
