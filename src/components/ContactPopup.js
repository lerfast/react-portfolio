// src/components/ContactPopup.js
import React from 'react';

export default function ContactPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-800 text-lg">
          <i className="fas fa-times cursor-pointer"></i>
        </button>
        <div className="text-center">
          <img src="https://placehold.co/100x100" alt="José's avatar" className="rounded-full mx-auto mb-4"/>
          <h2 className="text-lg font-semibold mb-2">Meet the designer.</h2>
          <p className="text-sm mb-4">Hey, I'm José, a UX designer with a passion for creating meaningful experiences.</p>
          <p className="text-sm mb-4">Let's work together to create something great!</p>
          <a href="mailto:jliberossi@gmail.com" className="inline-block bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors">Email José</a>
        </div>
      </div>
    </div>
  );
}
