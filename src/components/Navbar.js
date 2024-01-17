import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-100">
      <div className="logo">
        {/* Aquí va el logo, puedes usar una imagen o texto */}
      </div>
      {/* Menú para dispositivos móviles */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4">
          <li><a href="/work" className="text-gray-700 hover:text-gray-900">Work</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
      {/* Botón de menú para dispositivos móviles */}
      <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars"></i>
      </button>
      {/* Menú para pantallas más grandes */}
      <ul className="hidden md:flex space-x-4">
        <li><a href="/work" className="text-gray-700 hover:text-gray-900">Work</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-gray-900">About</a></li>
        <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  );
}
