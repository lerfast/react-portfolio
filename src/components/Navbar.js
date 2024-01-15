import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to="/"> {/* Logo aquí */}</Link>
      <div className="flex gap-4">
        <Link to="/work" className="text-white">Work</Link>
        <Link to="/about" className="text-white">About</Link>
        <Link to="/contact" className="text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
