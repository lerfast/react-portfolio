import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Asegúrate de que el camino de importación sea correcto
import Popup from '../components/Popup'; // Asegúrate de que el camino de importación sea correcto
import ProjectSummary from '../components/ProjectSummary'; // Asegúrate de que el camino de importación sea correcto

const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <header className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm José</h1>
        <p className="text-xl mb-6">Designing products that put the user at the center of everything.</p>
        <button className="py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300" onClick={togglePopup}>
          Let's Connect
        </button>
      </header>
      <ProjectSummary />
      <Popup isOpen={popupOpen} onClose={togglePopup} />
    </div>
  );
};

export default Home;