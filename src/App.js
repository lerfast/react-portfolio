import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkPage from './pages/WorkPage'; // Asegúrate de que este import apunte al archivo WorkPage.js correcto en la carpeta pages
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          {/* Aquí puedes añadir más rutas para otras páginas */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
