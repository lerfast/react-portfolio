import React from 'react';

export default function Projects() {
  // Información de los proyectos
  const projects = [
    {
      name: 'Agripro',
      description: 'Data driven management tool for agriculture industry',
      tags: ['OOUX', 'VISUAL DESIGN'],
      imageUrl: 'https://placehold.co/600x400', // Reemplaza con la URL de la imagen correspondiente o un placeholder
      available: true,
    },
    {
      name: 'Baubap',
      description: 'Mobile fintech app: microloans, points, and insurance sales',
      tags: ['OOUX', 'VISUAL DESIGN'],
      imageUrl: 'https://placehold.co/600x400', // Reemplaza con la URL de la imagen correspondiente o un placeholder
      available: false,
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img className="w-full h-64 object-cover object-center" src={project.imageUrl} alt={project.name} />
                {!project.available && (
                  <span className="absolute right-2 top-2 bg-red-100 text-xs uppercase px-2 py-1 rounded-full border border-red-200 text-red-500 font-medium">No available</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <div className="mt-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
