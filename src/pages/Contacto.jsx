import React, { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Ayuda inmediata y contacto</h1>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Si estás en riesgo, buscá asistencia urgente. A continuación, un botón de llamada rápida y un formulario de contacto.
      </p>

      <div className="mt-6 grid gap-6">
        <a
          href="tel:08002685640"
          className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-brand-600 text-white hover:bg-brand-700 w-full sm:w-auto"
        >
          📞 Llamar APRECOD 0800-268-5640
        </a>

        <form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 grid gap-3"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <p className="hidden"><label>No completar: <input name="bot-field" /></label></p>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Nombre (opcional)</span>
            <input className="border border-slate-300 rounded-lg p-2" name="nombre" placeholder="Tu nombre" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <input type="email" name="email" required className="border border-slate-300 rounded-lg p-2" placeholder="tu@email.com" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm font-medium">¿Cómo podemos ayudarte?</span>
            <textarea required rows="5" name="mensaje" className="border border-slate-300 rounded-lg p-2" placeholder="Contanos brevemente tu situación o qué necesitás." />
          </label>
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
            Enviar mensaje
          </button>
          {sent && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-2">
              Gracias por tu mensaje. Configurá un endpoint o servicio de email para recibirlo (por ejemplo, Netlify Forms).
            </p>
          )}
        </form>

        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100">Integración rápida con Netlify Forms</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
            Para recibir mensajes sin backend propio, activá <strong>Netlify Forms</strong> y agregá <code>name="contacto"</code> y un input hidden <code>form-name</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
