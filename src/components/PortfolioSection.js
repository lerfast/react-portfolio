import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="work" className="p-20 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://placehold.co/600x400" alt="Data driven management tool for agriculture industry" className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="font-bold">Agripro</h3>
            <p className="text-sm mb-2">Data driven management tool for agriculture industry</p>
            <div className="flex justify-start items-center">
              <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">UI/UX</span>
              <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded ml-2">Visual Design</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="https://placehold.co/600
x400" alt="Mobile fintech app: microloans, points, and insurance sales" className="w-full h-64 object-cover"/>
<div className="p-4">
<h3 className="font-bold">Baubap</h3>
<p className="text-sm mb-2">Mobile fintech app: microloans, points, and insurance sales</p>
<div className="flex justify-start items-center">
<span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">UI/UX</span>
<span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded ml-2">Visual Design</span>
</div>
</div>
</div>
</div>
</section>
);
};

export default PortfolioSection;