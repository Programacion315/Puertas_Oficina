import './globals.css'; // Importa tus estilos globales si los tienes
import React from 'react';
import Link from 'next/link'; // Asegúrate de importar el componente Link

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>ULOCK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full bg-gray-800 p-4">
          <ul className="flex justify-around text-white">
            <li>
              <Link href="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/camaras" className="hover:text-gray-400">Cámaras</Link>
            </li>
            <li>
              <Link href="/assistances" className="hover:text-gray-400">Asistencias</Link>
            </li>
            <li>
              <Link href="/transport" className="hover:text-gray-400">Transporte</Link>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
