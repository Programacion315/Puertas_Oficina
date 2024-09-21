import React from 'react';

export default function Assistances() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-24">
      <h2 className="text-4xl font-bold mb-8">Asistencias</h2>
      <p className="text-lg">Información sobre asistencias y soporte técnico.</p>
      <ul className="mt-10 list-disc text-left">
        <li>Asistencia técnica 24/7</li>
        <li>Mantenimiento preventivo y correctivo</li>
        <li>Instalación de nuevos equipos</li>
      </ul>
    </div>
  );
}