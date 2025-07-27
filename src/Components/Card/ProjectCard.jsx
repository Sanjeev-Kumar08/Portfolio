import React from "react";
import FadeInOnScroll from "../FadeInOnScroll/FadeInOnScroll";

function ProjectCard({ project }) {
  return (
    <FadeInOnScroll>
    <div className="w-full h-full bg-transaprent rounded-[35px] bg-white shadow-md border border-[#c1c1c1] p-6 text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#f3f3f3] custom-meriva flex flex-col group hover:scale-105">
      {/* Fixed Image Container */}
      <div className="relative max-w-full sm:h-[240px] h-[240px] w-full overflow-hidden rounded-[20px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Title & Description */}
      <div className="flex flex-col items-center flex-grow px-2 pt-4">
        <h2 className="text-[#222222] text-lg sm:text-xl font-semibold">
          {project.title}
        </h2>
        <p className="text-sm text-gray-600 font-normal mt-2 text-center">
          {project.description}
        </p>
      </div>

      {/* Buttons at Bottom */}
      <div className="flex justify-between gap-2 pt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 bg-transparent text-black text-sm hover:bg-black hover:text-white transition-all duration-200"
        >
          GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-2 bg-transparent text-black text-sm hover:bg-black hover:text-white transition-all duration-200"
        >
          Live Demo
        </a>
      </div>
    </div>
    </FadeInOnScroll>
  );
}

export default ProjectCard;
