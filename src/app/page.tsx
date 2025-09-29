'use client';

import { Button } from 'primereact/button';

export default function HomePage() {

  return (
    <div className="grid">
      <div className="col-12 md:col-6">
        <div className="p-4 border-round shadow-2">
          <h2>Bienvenido</h2>
          <p>Este es el inicio de tu app con Next.js + PrimeReact + PrimeFlex</p>
          <Button label="Ingresar" icon="pi pi-sign-in" />
        </div>
      </div>
    </div>
  );
}
