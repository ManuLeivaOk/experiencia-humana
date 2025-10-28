"use client";
import { Divider } from "primereact/divider";

export default function Header() {
  return (
    <header
      className="flex flex-column align-items-center justify-content-center text-center py-6 px-3 mt-2 shadow-xl"
      style={{
        /* background: "linear-gradient(135deg, #f8f9f4, #ecebe4)", */
        background:
          "linear-gradient(135deg, #d8e4b5 0%, #f6efe1 45%, #c9acc8 100%)",
        borderBottom: "2px solid #cbda9a",
      }}
    >
      {/* Logo */}
      <div className="mb-3 flex align-items-center justify-content-center gap-3">
        <i
          className="pi pi-heart-fill"
          style={{ fontSize: "1.8rem", color: "#533630" }}
        ></i>
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

      {/* Divider decorativo */}
      <Divider
        align="center"
        type="solid"
        style={{ width: "80px", borderColor: "#cbda9a", marginTop: "1.5rem" }}
      />
    </header>
  );
}
