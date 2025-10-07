"use client";
import { Divider } from "primereact/divider";

export default function Header() {
  return (
    <header
      className="flex flex-column align-items-center justify-content-center text-center py-6 px-3 mt-2"
      style={{
        background: "linear-gradient(135deg, #f8f9f4, #ecebe4)",
        borderBottom: "2px solid #cbda9a",
      }}
    >
      {/* Logo */}
      <div className="mb-3 flex align-items-center justify-content-center gap-3">
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#cbda9a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <i
            className="pi pi-heart-fill"
            style={{ fontSize: "1.8rem", color: "#533630" }}
          ></i>
        </div>
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
        style={{
          fontSize: "1.2rem",
          color: "#64754c",
          marginTop: "0.5rem",
          fontStyle: "italic",
        }}
      >
        Acompañando procesos de cambio y bienestar emocional
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
