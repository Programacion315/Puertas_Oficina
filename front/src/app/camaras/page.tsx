import React from 'react';

export default function Camaras() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-24">
      <h2 className="text-4xl font-bold mb-8">Cámaras</h2>
      <p className="text-lg">Vista de las cámaras de seguridad disponibles.</p>
      <div className="mt-10 w-full h-64 bg-gray-300 flex items-center justify-center">
        <p>Imagen o transmisión de la cámara aquí</p>
      </div>
    </div>
  );
}
    