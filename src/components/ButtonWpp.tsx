"use client";

import React from "react";
import { Button } from "primereact/button";

const PHONE = "5493585060083";
const DEFAULT_MESSAGE = "Hola! Quisiera más info.";

export default function FloatingWhatsApp({
  phone = PHONE,
  message = DEFAULT_MESSAGE,
  size = 48,
}: {
  phone?: string;
  message?: string;
  size?: number;
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const styleWrapper: React.CSSProperties = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    zIndex: 9999,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.16)",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  };

  return (
    <div style={styleWrapper} className="p-d-flex p-ai-center p-jc-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        style={{ width: "100%", height: "100%" }}
      >
        <Button
          icon="pi pi-whatsapp"
          className="p-button-rounded p-button-lg"
          style={{ ...buttonStyle, background: "#25D366", border: "none" }}
        />
      </a>
    </div>
  );
}
