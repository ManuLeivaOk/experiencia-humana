import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Enterprise',
  description: 'App Empresarial',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="m-0">
        <main>{children}</main>
      </body>
    </html>
  );
}
