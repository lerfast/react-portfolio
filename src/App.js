import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ContactPopup from './components/ContactPopup';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection onConnectClick={() => setPopupOpen(true)} />} />
        <Route path="/work" element={<PortfolioSection />} />
        {/* Define additional routes here */}
      </Routes>
      {isPopupOpen && <ContactPopup onClose={() => setPopupOpen(false)} />}
    </Router>
  );
}

export default App;
