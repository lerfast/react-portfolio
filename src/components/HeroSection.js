// src/components/HeroSection.js
export default function HeroSection({ onConnectClick }) {
    return (
      <section className="text-center p-20">
        <h1 className="text-5xl font-bold mb-4">Hello~, I'm José</h1>
        <p className="text-xl mb-4">Designing products that put the user at the center of everything.</p>
        <button onClick={onConnectClick} className="mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Let's Connect
        </button>
      </section>
    );
  }
  
  