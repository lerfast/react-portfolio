import React from 'react';

const WorkPage = () => {
  return (
    <>
       {/* Primera parte de la página con imagen y texto */}
       <div className="bg-white p-6 md:p-12">
       <div className="max-w-4xl mx-auto">
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
        </div>
        </div>

      <div className="bg-gray-100 p-6 md:p-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-lg font-bold">AGRIPRO</h3>
                  <p className="text-xs text-gray-500 mb-2">(Name changed due to internal policies of my employer)</p>
                  <p className="text-sm text-gray-600 mb-4">January 2022 - June 2023</p>
                  <p className="text-sm text-gray-600">Data driven management tool for agriculture industry</p>
                  <p className="text-xs text-gray-500 mt-6">I previously collaborated with a global provider specializing in independent connectivity and data-driven support solutions for the agriculture and animal health industries...</p>
                  <div className="flex space-x-2 mt-4">
                      <a href="#" className="text-xs bg-black text-white px-2 py-1 rounded-full">Web development</a>
                      <a href="#" className="text-xs bg-black text-white px-2 py-1 rounded-full">UX Designer</a>
                      <a href="#" className="text-xs bg-black text-white px-2 py-1 rounded-full">UI Designer</a>
                  </div>
              </div>
              <div>
                  <h3 className="text-lg font-bold">DIGITIZER</h3>
                  <p className="text-xs text-gray-500 mb-2">Features</p>
                  <img src="https://placehold.co/300x200" alt="Screenshot of Digitizer app interface" className="rounded-lg shadow-lg mb-4"/>
                  <p className="text-xs text-gray-500 mb-4">January 2022 - June 2022</p>
                  <p className="text-xs text-gray-500">Presenting a dynamic crop lifecycle tracking module for California farmers, ensuring effortless monitoring and regulatory compliance...</p>
                  <h3 className="text-lg font-bold mt-6">GANTT VIEW</h3>
                  <p className="text-xs text-gray-500 mb-2">Features</p>
                  <img src="https://placehold.co/300x200" alt="Screenshot of Gantt view feature" className="rounded-lg shadow-lg mb-4"/>
                  <p className="text-xs text-gray-500 mb-4">July 2022 - December 2022</p>
                  <p className="text-xs text-gray-500">The Gantt view tool was specifically designed to assist farmers in scheduling their crops during the appropriate seasons for maximum growth and yield...</p>
              </div>
          </div>
      </div>
    </>
  );
};

export default WorkPage;
