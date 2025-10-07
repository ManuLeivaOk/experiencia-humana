"use client";

export default function Presentation() {
  return (
    <section className="flex flex-column align-items-center justify-content-center text-center px-4 py-6">
      <div
        className="text-center shadow-4 border-round-xl"
        style={{
          maxWidth: "800px",
          fontSize: "1.2rem",
          color: "#444",
          lineHeight: "1.8",
          background: "linear-gradient(180deg, #f9f9f7 0%, #f3f4ee 100%)",
        }}
      >
        <p className="mb-4">
          Hola. Somos <strong>Maca, Flor y Juli</strong>. Tres amigas
          psicólogas, cofundadoras de <strong>Experiencia Humana</strong>, un
          espacio de Salud Mental que ofrece procesos psicoterapéuticos,
          acompañando a jóvenes y adultos a construir una vida con sentido.
        </p>

        <p className="mb-4">
          Soñamos con un espacio vivo, donde cada persona pueda sentirse
          acompañada en su búsqueda interna, desde el cuerpo, el deseo y el
          coraje de ser.
        </p>

        <p>
          Queremos crecer como una{" "}
          <strong>red clínica que cuida, enseña y comunica</strong> sobre Salud
          Mental con ética, humanidad y compromiso.
        </p>
      </div>
    </section>
  );
}
