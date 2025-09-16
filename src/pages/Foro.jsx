import React, { useEffect } from "react";

export default function Foro() {
  useEffect(() => {
    // Disqus embed (requires replacing SHORTNAME with tu shortname de Disqus)
    const d = document;
    if (!d.getElementById("dsq-embed-scr")) {
      const s = d.createElement("script");
      s.src = "https://SHORTNAME.disqus.com/embed.js";
      s.setAttribute("data-timestamp", Date.now().toString());
      s.id = "dsq-embed-scr";
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Foro / Comunidad</h1>
      <p className="mt-2 text-slate-700 dark:text-slate-300">
        Este espacio permite intercambiar experiencias. Mantené el respeto y evitá datos personales. 
        Si estás en riesgo, contactá a una línea de ayuda (ver sección Recursos).
      </p>

      <div className="mt-6 p-5 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">Foro integrado (Disqus)</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Para activar, creá una cuenta en <a className="underline" target="_blank" rel="noreferrer" href="https://disqus.com/">Disqus</a> y reemplazá <code>SHORTNAME</code> por tu shortname.
        </p>
        <div id="disqus_thread" className="mt-4"></div>
      </div>

      <div className="mt-6 p-5 rounded-xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
        <h2 className="font-semibold text-slate-900 dark:text-slate-100">Alternativa sin backend</h2>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Otra opción es abrir un servidor de <a className="underline" target="_blank" rel="noreferrer" href="https://discord.com/">Discord</a> o un grupo de Telegram y enlazarlo aquí.
        </p>
        <a
          className="inline-flex mt-3 px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700"
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Unirme al Discord
        </a>
      </div>
    </section>
  );
}
