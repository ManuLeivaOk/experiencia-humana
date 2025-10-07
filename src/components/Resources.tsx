"use client";
import React, { useRef, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Toast } from "primereact/toast";

type Tipo = "audio" | "cuento" | "metafora" | "formulario" | "video";

interface Recurso {
  id: number;
  tipo: Tipo;
  titulo: string;
  descripcion: string;
}

const recursosMock: Recurso[] = [
  {
    id: 1,
    tipo: "audio",
    titulo: "Ejercicio de relajación guiada",
    descripcion:
      "Audio breve de 8 minutos que guía una respiración consciente para disminuir la tensión y recuperar calma en momentos de sobreexcitación.",
  },
  {
    id: 2,
    tipo: "cuento",
    titulo: "El árbol de los sueños",
    descripcion:
      "Un cuento metafórico pensado para acompañar procesos de cambio y construcción de sentido. Ideal para sesiones con adolescentes y adultos.",
  },
  {
    id: 3,
    tipo: "metafora",
    titulo: "La mochila cargada",
    descripcion:
      "Metáfora terapéutica para trabajar sobre la carga emocional y estrategias para descargar lo que no necesitamos llevar todo el tiempo.",
  },
  {
    id: 4,
    tipo: "formulario",
    titulo: "Registro diario de emociones",
    descripcion:
      "Formato práctico y editable para que pacientes registren emociones, gatillantes y estrategias de afrontamiento durante 14 días.",
  },
  {
    id: 5,
    tipo: "video",
    titulo: "Mini-clase: Regulación emocional",
    descripcion:
      "Video de 12 minutos con conceptos prácticos y ejercicios para enseñar a pacientes a identificar señales corporales y actuar sobre ellas.",
  },
];

const iconMap: Record<Tipo, string> = {
  audio: "pi pi-volume-up",
  cuento: "pi pi-book",
  metafora: "pi pi-comment",
  formulario: "pi pi-file",
  video: "pi pi-play",
};

export default function Recursos() {
  const toast = useRef<Toast | null>(null);
  const [filter, setFilter] = useState<"all" | Tipo>("all");

  const filtered =
    filter === "all"
      ? recursosMock
      : recursosMock.filter((r) => r.tipo === filter);

  const handleMockDownload = (r: Recurso) => {
    toast.current?.show({
      severity: "info",
      summary: "Descarga simulada",
      detail: `${r.titulo} — (mock) no se descargó ningún archivo.`,
      life: 3000,
    });
  };

  const handlePreview = (r: Recurso) => {
    toast.current?.show({
      severity: "warn",
      summary: "Vista previa",
      detail: `Vista previa simulada: ${r.titulo}`,
      life: 2000,
    });
  };

  const capitalizar = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <section className="p-6">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          className="text-center mb-6"
          style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#533630" }}
        >
          Recursos para profesionales y pacientes
        </h2>

        {/* filtros */}
        <div
          className="flex justify-content-center flex-wrap"
          style={{ gap: 8, marginBottom: 16 }}
        >
          {[
            { key: "all", label: "Todos", icon: "" },
            { key: "audio", label: "Audios", icon: "pi pi-volume-up" },
            { key: "cuento", label: "Cuentos", icon: "pi pi-book" },
            { key: "metafora", label: "Metáforas", icon: "pi pi-comment" },
            { key: "formulario", label: "Formularios", icon: "pi pi-file" },
            { key: "video", label: "Videos", icon: "pi pi-play" },
          ].map((f) => (
            <Button
              key={f.key}
              label={f.label}
              icon={f.icon || undefined}
              onClick={() => setFilter(f.key as "all" | Tipo)}
              style={
                filter === f.key
                  ? {
                      background: "#cbda9a",
                      border: "none",
                      color: "#533630",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0.6rem 1.2rem",
                      fontSize: "0.95rem",
                    }
                  : {
                      background: "transparent",
                      border: "2px solid #533630",
                      color: "#533630",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0.6rem 1.2rem",
                      fontSize: "0.95rem",
                    }
              }
            />
          ))}
        </div>

        {/* grid centrado y responsivo: flex-wrap + flex-basis */}
        <div
          className="flex flex-wrap justify-content-center"
          style={{ gap: "1.25rem", paddingTop: 6, paddingBottom: 18 }}
        >
          {filtered.map((r) => (
            <div
              key={r.id}
              style={{
                flex: "0 1 320px",
                maxWidth: 320,
                width: "100%",
              }}
            >
              <Card
                className="shadow-3 flex flex-column"
                style={{
                  width: "100%",
                  height: "100%", 
                  minHeight: 340, 
                  padding: "1.25rem",
                  borderRadius: 8,
                  background: "linear-gradient(180deg, #f9f9f7 0%, #f3f4ee 100%)",
                }}
              >
                {/* Bloque de contenido fijo */}
                <div
                  className="flex flex-column align-items-center text-center"
                  style={{ flexGrow: 1 }}
                >
                  <div
                    style={{
                      width: 96,
                      height: 96,
                      margin: "0 auto 0.75rem auto",
                      borderRadius: "50%",
                      border: "1px solid #d3d3d3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      boxShadow: "0 20px 20px rgba(0,0,0,0.06)",
                    }}
                  >
                    <i
                      className={iconMap[r.tipo]}
                      style={{ fontSize: 28, color: "#64754c" }}
                    />
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: "#533630",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      textAlign: "center",
                      minHeight: "2.5rem", // 🔑 reserva espacio para títulos largos (2 líneas)
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {r.titulo}
                  </h3>

                  <p
                    style={{
                      margin: "6px 0 12px 0",
                      color: "#64754c",
                      fontWeight: 600,
                    }}
                  >
                    {capitalizar(r.tipo)}
                  </p>

                  {/* descripción con truncado */}
                  <p
                    style={{
                      margin: 0,
                      color: "#333",
                      fontSize: "0.95rem",
                      lineHeight: "1.45",
                      textAlign: "left",
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flexGrow: 1, // 🔑 empuja los botones siempre al fondo
                    }}
                  >
                    {r.descripcion}
                  </p>
                </div>

                {/* Bloque de acciones */}
                <div
                  className="flex justify-content-center"
                  style={{ gap: 8, marginTop: 14 }}
                >
                  <Button
                    label="Descargar"
                    icon="pi pi-download"
                    onClick={() => handleMockDownload(r)}
                    style={{
                      background: "#cbda9a",
                      border: "none",
                      color: "#533630",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      padding: "0.8rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  />
                  <Button
                    label="Ver"
                    icon="pi pi-eye"
                    className="p-button-secondary p-button-outlined"
                    onClick={() => handlePreview(r)}
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Toast ref={toast} />
    </section>
  );
}
