// src/components/Navbar.js
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-5 bg-transparent">
        <div className="logo">
          {/* Placeholder for the logo - you'll need to replace this with the actual image */}
          <img src="https://placehold.co/50x50" alt="Company Logo" className="h-8" />
        </div>
        <div className="nav-links flex gap-4">
          <a href="#work" className="text-sm font-semibold hover:underline">Work</a>
          <a href="#about" className="text-sm font-semibold hover:underline">About</a>
          <a href="#contact" className="text-sm font-semibold hover:underline">Contact</a>
        </div>
      </nav>
    );
  }
  