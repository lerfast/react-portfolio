import React, { useState } from 'react';
import Navbar from './Navbar'; // Asegúrate de que este import apunte al archivo Navbar.js correcto
import Modal from './Modal'; // Asegúrate de que este import apunte al archivo Modal.js correcto
import Projects from './Projects'; // Asegúrate de que este import apunte al archivo Projects.js correcto

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sección principal que ocupa todo el alto de la ventana menos la altura del Navbar */}
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100 px-6" style={{ height: 'calc(100vh - 4rem)' }}> {/* Ajusta 4rem según la altura de tu Navbar */}
        <h1 className="text-2xl md:text-5xl font-bold mb-2 text-center">Hello~, I'm José</h1>
        <p className="text-gray-700 mb-4 text-center">Designing products that put the user at the center of everything.</p>
        <button
          onClick={toggleModal}
          className="px-6 py-2 border border-blue-500 text-blue-500 font-bold rounded transition duration-300 hover:bg-blue-500 hover:text-white"
        >
          Let's Connect
        </button>
        {/* Contenedor para la flecha con padding superior adicional */}
        <div className="mt-8 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
      {/* Sección de proyectos que comienza fuera de la pantalla y solo se muestra al desplazarse hacia abajo */}
      <div className="pt-16">
        <Projects />
      </div>
      {/* Aquí irá tu componente de Footer */}
    </div>
  );
}
