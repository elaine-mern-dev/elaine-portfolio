// src/pages/Portfolio.tsx
import React from "react";
import { projects } from "../constants/projects";
import { Nav } from "../shared/layout";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  return (
    <div className="p-6 min-h-screen">
      <Nav />
      <h2 className="text-3xl font-bold mb-8 text-gray">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({
            title,
            description,
            github,
            demo,
            route,
            techStack,
            role,
            status,
          }) => (
            <div
              key={title}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 relative"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              {role && (
                <p className="text-sm text-gray-600 italic mb-2">{role}</p>
              )}
              <p className="text-gray-700 mb-4">{description}</p>

              {/* Tech Stack */}
              {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {status !== "coming-soon" && (
                <div className="flex flex-wrap space-x-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                  {route && (
                    <Link
                      to={route}
                      className="text-orange-600 hover:underline"
                    >
                      More details
                    </Link>
                  )}
                </div>
              )}

              {status === "coming-soon" && (
                <div className="flex flex-wrap space-x-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                  {route && (
                    <a
                      href={route}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:underline"
                    >
                      More details
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
