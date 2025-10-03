"use client";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Aquí se puede integrar con tu backend o servicio de envío de mails
  };

  return (
    <section
      className="py-6 md:px-6 flex flex-column align-items-center justify-content-center"
    >
      <h2
        className="text-center mb-6"
        style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#533630" }}
      >
         Formulario de contacto
      </h2>
      <Card
        className="p-2 md:p-6 w-full mx-5 md:mx-0 md:w-6"
        style={{
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          background: "#fff",
        }}
      >
        <h2
          className="text-center mb-6"
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#533630" }}
        >
          Dejanos tu mensaje
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-column gap-4">
          {/* Nombre */}
          <span className="p-float-label">
            <InputText
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full"
              style={{
                borderColor: "#64754c",
                borderRadius: "8px",
                padding: "1rem",
              }}
            />
            <label htmlFor="nombre" style={{ color: "#533630" }}>
              Nombre
            </label>
          </span>

          {/* Email */}
          <span className="p-float-label  mt-1">
            <InputText
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              style={{
                borderColor: "#64754c",
                borderRadius: "8px",
                padding: "1rem",
              }}
            />
            <label htmlFor="email" style={{ color: "#533630" }}>
              Email
            </label>
          </span>

          {/* Asunto */}
          <span className="p-float-label mt-1">
            <InputText
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              className="w-full"
              style={{
                borderColor: "#64754c",
                borderRadius: "8px",
                padding: "1rem",
              }}
            />
            <label htmlFor="asunto" style={{ color: "#533630" }}>
              Teléfono
            </label>
          </span>

          {/* Mensaje */}
          <span className="p-float-label mt-1">
            <InputTextarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full"
              style={{
                borderColor: "#64754c",
                borderRadius: "8px",
                padding: "1rem",
              }}
            />
            <label htmlFor="mensaje" style={{ color: "#533630" }}>
              Mensaje
            </label>
          </span>

          {/* Botón */}
          <Button
            type="submit"
            label="Enviar"
            className="mt-4"
            style={{
              background: "#df974c",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "1rem 2rem",
              fontSize: "1rem",
            }}
          />
        </form>
      </Card>
    </section>
  );
}
