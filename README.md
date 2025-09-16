# Salir del Juego · Rosario (React + Tailwind + Router)

Sitio multipágina y responsivo para ayudar a dejar la ludopatía en **Rosario, Santa Fe**.

## 🚀 Qué incluye
- React + Vite + React Router
- TailwindCSS (estilo minimalista, colores calmos)
- Páginas: Inicio, ¿Qué es?, Recursos, Comunidad, Familiares, Contacto
- Directorio local (`src/data/centros.json`) para completar con contactos verificados
- Preparado para despliegue en Netlify

## 🛠️ Requisitos
- Node 18+ y npm

## ▶️ Ejecutar en local
```bash
npm install
npm run dev
```
Abrí http://localhost:5173

## 🌐 Deploy en Netlify
1. Subí este proyecto a tu GitHub.
2. En Netlify, seleccioná “New site from Git” y tu repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🧩 Personalizar datos locales
Editá `src/data/centros.json` con **teléfonos, direcciones y webs verificados**.

> ⚠️ Varios números son placeholder (ej. 0800-XXX-XXXX). Reemplazalos por información oficial antes de publicar.

## 📨 Formulario de contacto (opcional)
Para usar **Netlify Forms**:
- Agregá `name="contacto"` al `<form>` y un input hidden `<input type="hidden" name="form-name" value="contacto" />`.
- Activá “Forms” en tu panel de Netlify.

## 🗺️ Mapa / Autoexclusión
En `Recursos` hay un botón a Google Maps. Podés incrustar un mapa o linkear al formulario / info de autoexclusión provincial (si corresponde).

---

Hecho con empatía y foco en accesibilidad. 💚
