import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Info from "./pages/Info.jsx";
import Recursos from "./pages/Recursos.jsx";
import Comunidad from "./pages/Comunidad.jsx";
import Familiares from "./pages/Familiares.jsx";
import Contacto from "./pages/Contacto.jsx";
import Foro from "./pages/Foro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "que-es", element: <Info /> },
      { path: "recursos", element: <Recursos /> },
      { path: "comunidad", element: <Comunidad /> },
      { path: "familiares", element: <Familiares /> },
      { path: "contacto", element: <Contacto /> },
      { path: "foro", element: <Foro /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
