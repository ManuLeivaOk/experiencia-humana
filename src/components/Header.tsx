"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="flex flex-column align-items-center justify-content-center text-center pb-5 px-3 mt-2 shadow-xl"
      style={{
        /* background: "linear-gradient(135deg, #f8f9f4, #ecebe4)", */
        background:
          "linear-gradient(135deg, #d8e4b5 0%, #f6efe1 45%, #c9acc8 100%)",
        borderBottom: "2px solid #cbda9a",
      }}
    >
      {/* Logo */}
      <div className="mb-0 flex align-items-center justify-content-center gap-3">
        <Image
          src="/logo1.svg"
          width={500}
          height={500}
          alt="Logo de Experiencia Humana"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>

      {/* Nombre */}
      <h1
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "#533630",
          letterSpacing: "2px",
          margin: 0,
        }}
      >
        EXPERIENCIA HUMANA
      </h1>

      {/* Lema */}
      <p
        className="mt-3"
        style={{
          fontSize: "1.2rem",
          color: "#64754c",
          marginTop: "0.5rem",
          fontStyle: "italic",
          width: "60%",
          lineHeight: 1.5,
        }}
      >
        Un espacio para mirar hacia a dentro y construir una vida con sentido.
      </p>
    </header>
  );
}
