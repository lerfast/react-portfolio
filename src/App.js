import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// Importa los componentes de las páginas aquí si los vas a utilizar

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* Aquí irán tus rutas a las páginas Work, About y Contact cuando las implementes */}
    </div>
  );
}

export default App;
