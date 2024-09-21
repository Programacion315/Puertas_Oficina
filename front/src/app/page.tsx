'use client';

import React from 'react';
import Image from 'next/image';
import logo from '/public/logo.png';


export default function Home() {

  const abrirPuerta = async () => {

    console.log("Abrir puta puerta")

    try {
      // Realiza la solicitud al servidor Node.js en el puerto 8000
      const response = await fetch('http://localhost:8000/abrir-puerta', {
        method: 'PUT',
      });

      if (response.ok) {
        alert('Puerta abierta con éxito');
      } else {
        alert('Error al abrir la puerta');
        console.log(response);
      }
    } catch (error) {
      console.error('Error al abrir la puerta:', error);
      alert('Error al intentar abrir la puerta');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 sm:p-12 md:p-24">
      <Image 
          src={logo} 
          alt="ULOCK Logo" 
          width={550}  // Cambia este valor para ajustar el ancho
          height={150} // Cambia este valor para ajustar la altura
          className="custom-class"
        />
      <p className="mt-4 text-base sm:text-lg md:text-xl text-center">Tu solución integral para la seguridad y asistencia técnica.</p>

      <button
        className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300"
        onClick={abrirPuerta}
      >
        Open
      </button>
    </div>
  );
}
