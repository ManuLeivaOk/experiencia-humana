"use client";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Image from "next/image";

const cursos = [
  {
    titulo: "Mindfulness y Conexión",
    subtitulo: "Bienestar y equilibrio emocional",
    descripcion:
      "Aprende técnicas de mindfulness para reducir el estrés y mejorar tu concentración y bienestar general.",
    img: "/terapia.webp",
  },
  {
    titulo: "Terapia Familiar Integrativa",
    subtitulo: "Fortalecimiento de vínculos",
    descripcion:
      "Explora estrategias para mejorar la comunicación y resolver conflictos dentro de la familia de manera saludable.",
    img: "/terapia.webp",
  },
  {
    titulo: "Desarrollo Personal y Profesional",
    subtitulo: "Crecimiento integral",
    descripcion:
      "Capacítate en habilidades de autoconocimiento y liderazgo para potenciar tu desarrollo en todas las áreas de tu vida.",
    img: "/terapia.webp",
  },
];

export default function Courses() {
  return (
    <section
      className="p-6 flex flex-column align-items-center"
      style={{ background: "#f4ebda" }}
    >
      <h2
        className="text-center mb-6"
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#533630" }}
      >
        Nuestros Cursos
      </h2>

      <div className="grid justify-content-center gap-4">
        {cursos.map((curso, i) => (
          <div key={i} className="col-12 md:col-4 flex justify-content-center">
            <Card
              className="flex flex-column"
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "16px",
                background: "#fff",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Imagen */}
              <div
                className="overflow-hidden shadow-2 flex align-items-center justify-content-center mb-4"
                style={{ width: "100%", height: "180px", borderRadius: "16px" }}
              >
                <Image
                  src={curso.img}
                  alt={curso.titulo}
                  width={340}
                  height={180}
                  style={{ objectFit: "cover", borderRadius: "16px" }}
                />
              </div>

              <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* Título */}
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    color: "#533630",
                    textAlign: "center",
                    marginBottom: "0.5rem",
                    height: "2.4em",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {curso.titulo}
                </h3>

                {/* Subtítulo */}
                <h4
                  className="mt-0 mb-3 text-center"
                  style={{
                    fontSize: "1.1rem",
                    color: "#64754c",
                    fontWeight: 600,
                    minHeight: "1.5em",
                    marginBottom: "1rem",
                  }}
                >
                  {curso.subtitulo}
                </h4>

                {/* Descripción */}
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#444",
                    lineHeight: "1.5",
                    textAlign: "justify",
                    marginBottom: "1.5rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {curso.descripcion}
                </p>

                {/* Botón */}
                <div className="flex justify-content-center mt-auto">
                  <Button
                    label="Consultar más"
                    icon="pi pi-search"
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
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
