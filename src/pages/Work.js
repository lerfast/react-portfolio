import React from 'react';

const ProjectCard = ({ title, date, description, imageSrc, tags }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{date}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <img src={imageSrc} alt={`Screenshot of ${title}`} className="rounded-lg shadow-lg mb-4" />
      <div className="flex items-center space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`bg-${tag.color}-100 text-${tag.color}-800 text-xs font-semibold px-2.5 py-0.5 rounded`}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">José Berbesí</h1>
            <p className="text-gray-600">Software designer</p>
            <h2 className="text-3xl font-bold my-4">Creating digital solutions that engage and meet users' needs.</h2>
            <p className="text-gray-600 mb-4">Want more? Find me on Medium!</p>
            <button className="text-blue-600 hover:underline">+ Follow</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded ml-4">Hire me</button>
          </div>
          <div>
            {/* Placeholder for profile image */}
            <img src="https://placehold.co/600x400" alt="José Berbesí holding a tablet showing an analytics dashboard" className="rounded-lg shadow-lg"/>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard
              title="Proagrica"
              date="January 2022 - Current"
              description="Data driven management tool for agriculture industry."
              imageSrc="https://placehold.co/500x300"
              tags={[
                { text: 'Web development', color: 'blue' },
                { text: 'UX Designer', color: 'green' }
              ]}
            />

            {/* Project 2 */}
            <ProjectCard
              title="Crop records"
              date="January 2022 - June 2022"
              description="Innovative crop lifecycle tracking system..."
              imageSrc="https://placehold.co/500x300"
              tags={[]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Project 3 */}
            <ProjectCard
              title="Gantt view"
              date="July 2022 - December 2022"
              description="The Gantt view tool was specifically designed to assist farmers..."
              imageSrc="https://placehold.co/500x300"
              tags={[]}
            />

            {/* Project 4 */}
            <ProjectCard
              title="Job records"
              date="January 2023 - Current"
              description="Recommended actions that aid agronomists in developing precise field operations..."
              imageSrc="https://placehold.co/500x300"
              tags={[]}
            />
          </div>
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-600">&copy; José Berbesí. 2023 v1.1</p>
        </footer>
      </div>
    </div>
  );
};

export default Work;
