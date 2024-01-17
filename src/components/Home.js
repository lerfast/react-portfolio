import React, { useState } from 'react';
import Modal from './Modal'; // Asegúrate de haber creado el Modal.js

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-2">Hello~, I'm José</h1>
      <p className="text-gray-700 mb-4">Designing products that put the user at the center of everything.</p>
      <button
        onClick={toggleModal}
        className="px-6 py-2 border border-blue-500 text-blue-500 font-bold rounded transition duration-300 hover:bg-blue-500 hover:text-white"
      >
        Let's Connect
      </button>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </div>
  );
}
