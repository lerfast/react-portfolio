import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <p>José Berbesi. 2024</p>
      <p>V1.1</p>
      {/* Agrega aquí los enlaces a las redes sociales con los iconos de Font Awesome */}
      <div className="flex justify-center items-center space-x-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* Puedes agregar más iconos sociales si es necesario */}
      </div>
    </footer>
  );
};

export default Footer;