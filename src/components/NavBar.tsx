"use client";
import { Menubar } from "primereact/menubar";

export default function Nav() {
  const items = [
    {
      label: "Inicio",
      command: () => {}, // no redirige
    },
    {
      label: "Nosotros",
      command: () => {},
    },
    {
      label: "Servicios",
      command: () => {},
    },
    {
      label: "Cursos",
      command: () => {},
    },
    {
      label: "Contacto",
      command: () => {},
    },
  ];

  const start = (
    <span
    className="mr-2"
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#533630",
      }}
    >
      Experiencia Humana
    </span>
  );

  return (
    <Menubar
      model={items}
      start={start}
      className="shadow-1 border-0"
      style={{
        background: "#ffffff",
        padding: "0.5rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    />
  );
}
