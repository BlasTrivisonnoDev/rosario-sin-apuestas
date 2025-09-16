import React from "react";

export default function Comunidad() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Comunidad</h1>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Espacio para compartir experiencias y encontrar apoyo de manera respetuosa. Por seguridad, evitá compartir datos personales.
      </p>

      <div className="mt-6 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">Historias de recuperación</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
          Podés habilitar un formulario moderado donde las personas cuenten su proceso de recuperación (anónimo). Las tarjetas se muestran aquí luego de la moderación.
        </p>
      </div>

      <div className="mt-6 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">Foro / Chat</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
          Para un MVP, enlazá a un canal de Discord/Telegram con reglas claras y moderación. A futuro, podés implementar un foro propio.
        </p>
      </div>
    </section>
  );
}
