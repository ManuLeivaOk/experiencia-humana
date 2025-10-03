import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Enterprise',
  description: 'App Empresarial',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="" style={{ background: "linear-gradient(135deg, #cbda9a 0%, #f4ebda 40%, #b897b5 100%)" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
