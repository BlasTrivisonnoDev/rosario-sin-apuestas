import React from "react";

export default function ResourceCard({ name, desc, phone, website, address, note }) {
  return (
    <article className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
      {desc && <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{desc}</p>}
      <div className="mt-3 grid gap-1 text-sm text-slate-700 dark:text-slate-300">
        {address && <div><span className="font-medium">Dirección:</span> {address}</div>}
        {phone && <div><span className="font-medium">Tel:</span> <a className="underline" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></div>}
        {website && <div><span className="font-medium">Web:</span> <a className="underline" target="_blank" rel="noreferrer" href={website}>{website}</a></div>}
        {note && <div className="text-xs text-slate-500">{note}</div>}
      </div>
    </article>
  );
}
