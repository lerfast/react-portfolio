import React from 'react';

export default function WorkPage() {
  // Datos de los proyectos para la segunda parte de la página
  const projectDetails = [
    // ... tus detalles de proyecto
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* Primera parte de la página con imagen y texto */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Sección de texto e información */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="flex items-center mb-4">
              {/* Imagen de perfil */}
              <img
                className="rounded-full mr-4"
                src="https://placehold.co/100x100"
                alt="José Berbesi"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <h2 className="text-2xl font-bold">José Berbesi</h2>
                <p className="text-sm text-gray-700">Software designer</p>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Creating digital solutions that engage and meet users' needs.
            </h1>
            <p className="mb-4">Want more? Find me on Medium!</p>
            <div className="flex">
              <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mr-2">
                + Follow
              </button>
              <button className="text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded">
                Hire me
              </button>
            </div>
          </div>
          {/* Sección de la imagen */}
          <div className="md:w-1/2">
            <img
              className="rounded-xl shadow-xl"
              src="https://placehold.co/600x400"
              alt="Work showcase"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </div>
        {/* Segunda parte de la página con los proyectos */}
        <div className="py-12">
          <div className="flex flex-wrap -m-4">
            {projectDetails.map((project, index) => (
              <div key={index} className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <img
                    className="block w-full h-48 rounded mb-6"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <h3 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{project.period}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{project.title}</h2>
                  <p className="leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center flex-wrap ">
                    {/* Aquí puedes añadir botones o enlaces, por ejemplo: */}
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* Etiquetas de habilidades, si las hay */}
                    <span className="text-gray-500 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {/* Iconos o etiquetas aquí */}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
