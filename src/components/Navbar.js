import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-100">
      <div className="logo">
        {/* Aquí va el logo, puedes usar una imagen o texto */}
      </div>
      <ul className="flex space-x-4">
        <li><a href="/work" className="text-gray-700 hover:text-gray-900">Work</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-gray-900">About</a></li>
        <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  );
}
