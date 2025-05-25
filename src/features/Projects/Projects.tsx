// src/features/Projects/Projects.tsx

import { projects } from "../../constants/projects";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        My Projects
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 text-center">
        Explore my projects and contributions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {projects
          .filter((_, index) => index !== 1) // skip second project
          .map(({ title, image }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {title}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
