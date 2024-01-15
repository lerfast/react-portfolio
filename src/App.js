import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de que el nombre del archivo en el sistema de archivos sea 'Home.js'
import About from './pages/About'; // Asegúrate de que el nombre del archivo en el sistema de archivos sea 'About.js'
import Work from './pages/Work'; // Asegúrate de que el nombre del archivo en el sistema de archivos sea 'Work.js'
import Navbar from './components/Navbar'; // Asegúrate de que el nombre del archivo en el sistema de archivos sea 'Navbar.js'
import Footer from './components/Footer'; // Asegúrate de que el nombre del archivo en el sistema de archivos sea 'Footer.js'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
