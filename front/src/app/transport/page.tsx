import React from 'react';

export default function Transport() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-24">
      <h2 className="text-4xl font-bold mb-8">Transporte</h2>
      <p className="text-lg">Opciones de transporte para el personal y equipos.</p>
      <ul className="mt-10 list-disc text-left">
        <li>Vehículos asignados para transporte de personal</li>
        <li>Rutas de transporte seguras</li>
        <li>Servicios de transporte 24/7</li>
      </ul>
    </div>
  );
}