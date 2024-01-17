import React, { useEffect, useState } from 'react';

export default function Modal({ toggleModal }) {
  // Estado para controlar la animación
  const [isOpen, setIsOpen] = useState(false);

  // Efecto para iniciar la animación cuando el componente se monta
  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Función para cerrar el modal con animación
  const closeWithAnimation = () => {
    setIsOpen(false);
    // Utilizamos un temporizador que coincida con la duración de la transición
    setTimeout(() => {
      toggleModal(); // Esta función cambia el estado en el componente padre para cerrar el modal
    }, 300); // La duración aquí debe ser la misma que la duración de la transición del modal
  };

  // Función para prevenir la propagación del evento de clic en el modal
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ${
        isOpen ? 'visible' : 'invisible'
      }`}
      onClick={closeWithAnimation}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        onClick={stopPropagation}
      >
        <button onClick={closeWithAnimation} className="absolute top-4 right-4 text-black">
          <i className="fas fa-times"></i>
        </button>
        <h2 className="text-xl font-bold mb-2">Meet the designer.</h2>
        <img
          src="https://placehold.co/100x100"
          alt="José, a UX designer with a passion for creating meaningful experiences."
          className="rounded-full mx-auto mb-4"
        />
        <p className="text-gray-700 mb-4">
          Hey, I'm José, a UX designer with a passion for creating meaningful experiences.
        </p>
        <a href="mailto:jliberessi@gmail.com" className="text-blue-500 hover:underline">
          jliberessi@gmail.com
        </a>
      </div>
    </div>
  );
}
