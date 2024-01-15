import React from 'react';

const ProjectCard = ({ title, description, tags }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <img
        src="https://placehold.co/600x400"
        alt={`Placeholder image for ${title} project`}
        className="w-full h-auto rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap -m-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="m-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectSummary = () => {
  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Tarjeta del proyecto Agripro */}
          <ProjectCard
            title="Agripro"
            description="Data driven management tool for agriculture industry."
            tags={['OUX', 'Visual Design']}
          />

          {/* Tarjeta del proyecto Baubap */}
          <ProjectCard
            title="Baubap"
            description="Mobile fintech app: microloans, points, and insurance sales."
            tags={['OUX', 'Visual Design']}
          />

          {/* Repite los bloques anteriores para cada proyecto que quieras mostrar */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
