import { ReactNode } from 'react';

export const metadata = {
  title: 'Mi App',
  description: 'Aplicación web con menú lateral responsivo',
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
      <main className="min-h-screen w-full" style={{ background: "linear-gradient(135deg, #cbda9a 0%, #f4ebda 40%, #b897b5 100%)" }}>
        {children}
      </main>
  );
}
