import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-4">
      <div>José Berbesi. 2024</div>
      <div>V1.1</div>
      {/* Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" className="hover:text-gray-300">
          {/* Replace with LinkedIn SVG or font-awesome icon */}
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/yourprofile" aria-label="GitHub" className="hover:text-gray-300">
          {/* Replace with GitHub SVG or font-awesome icon */}
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
