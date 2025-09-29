"use client";

export default function Header() {
  return (
    <section
      className="flex flex-column align-items-center justify-content-center text-center p-6"
      style={{
        minHeight: "85vh",
        background:
          "linear-gradient(135deg, #cbda9a 0%, #f4ebda 40%, #b897b5 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-[#533630] mb-4">
        Experiencia Humana
      </h1>
      <p className="text-lg md:text-xl text-[#533630] mb-6 max-w-2xl">
        Clínica de Salud Mental
      </p>
      <button className="p-button p-component bg-[#64754c] border-none">
        <span className="p-button-label text-white">Conoce más</span>
      </button>
    </section>
  );
}
