import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
// Importa otros componentes de página según sea necesario

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      {/* Aquí irán otras rutas o componentes de página cuando los implementes */}
      <Footer />
    </div>
  );
}

export default App;
