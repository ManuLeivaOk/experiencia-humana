"use client";
import { Card } from "primereact/card";
import Image from "next/image";
import { Divider } from "primereact/divider";
import CustomDivider from "./Divider";

const duenas = [
  {
    nombre: "Lic. Ana María del Rosario Gómez",
    rol: "Psicóloga clínica",
    descripcion:
      "Especialista en terapia cognitivo-conductual con más de 10 años de experiencia en el acompañamiento de adultos y adolescentes.",
    img: "/mujer.png",
  },
  {
    nombre: "Lic. María Pérez",
    rol: "Terapia Familiar",
    descripcion:
      "Facilita procesos de integración y resolución de conflictos en el ámbito familiar, trabajando en la construcción de vínculos saludables.",
    img: "/mujer.png",
  },
  {
    nombre: "Lic. Sofía López",
    rol: "Docente y Formadora",
    descripcion:
      "Capacitadora en programas de desarrollo personal y profesional. Ha diseñado talleres de formación para instituciones educativas.",
    img: "/mujer.png",
  },
];

export default function About() {
  return (
    <section className="py-6">
      <h2
        className="text-center mb-6"
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#533630" }}
      >
        ¿Quiénes somos?
      </h2>

      <CustomDivider title="Coordinadoras" />

      <div className="grid justify-content-center mb-7" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {duenas.map((d, i) => (
          <div key={i} className="col-12 md:col-4 flex justify-content-center">
            <Card
              className="flex flex-column align-items-center text-center shadow-3"
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "16px",
                minHeight: "460px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "linear-gradient(180deg, #f9f9f7 0%, #f3f4ee 100%)",
              }}
            >
              {/* Imagen circular */}
              <div
                className="border-circle overflow-hidden shadow-2 flex align-items-center justify-content-center mb-3 mx-auto"
                style={{ width: "180px", height: "180px" }}
              >
                <Image
                  src={d.img}
                  alt={d.nombre}
                  width={180}
                  height={180}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Nombre */}
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#533630",
                  textAlign: "center",
                  height: "2.2em", // fuerza que tenga máximo 2 líneas
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {d.nombre}
              </h3>

              {/* Rol */}
              <h4
                className="mt-0 mb-5"
                style={{
                  fontSize: "1.2rem",
                  color: "#64754c",
                  fontWeight: 600,
                  minHeight: "1.5em", // fija altura para todos
                }}
              >
                {d.rol}
              </h4>

              {/* Descripción */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: "1.5",
                  textAlign: "justify",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  flexGrow: 1, // ocupa el espacio restante
                }}
                className="m-0"
              >
                {d.descripcion}
              </p>
            </Card>
          </div>
        ))}
      </div>

      <CustomDivider title="Equipo de trabajo" />

      <div className="grid justify-content-center" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {duenas.map((d, i) => (
          <div key={i} className="col-12 md:col-4 flex justify-content-center">
            <Card
              className="flex flex-column align-items-center text-center shadow-3"
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "16px",
                minHeight: "460px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "linear-gradient(180deg, #f9f9f7 0%, #f3f4ee 100%)",
              }}
            >
              {/* Imagen circular */}
              <div
                className="border-circle overflow-hidden shadow-2 flex align-items-center justify-content-center mb-3 mx-auto"
                style={{ width: "180px", height: "180px" }}
              >
                <Image
                  src={d.img}
                  alt={d.nombre}
                  width={180}
                  height={180}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Nombre */}
              <h3
                className="mb-3"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  color: "#533630",
                  textAlign: "center",
                  height: "2.2em", // fuerza que tenga máximo 2 líneas
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {d.nombre}
              </h3>

              {/* Rol */}
              <h4
                className="mt-0 mb-5"
                style={{
                  fontSize: "1.2rem",
                  color: "#64754c",
                  fontWeight: 600,
                  minHeight: "1.5em", // fija altura para todos
                }}
              >
                {d.rol}
              </h4>

              {/* Descripción */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  lineHeight: "1.5",
                  textAlign: "justify",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  flexGrow: 1, // ocupa el espacio restante
                }}
                className="m-0"
              >
                {d.descripcion}
              </p>
            </Card>
          </div>
        ))}
      </div>

    </section>
  );
}
