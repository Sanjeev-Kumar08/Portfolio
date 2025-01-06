import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>

      <div className="button-container">
        <a href={project.github} className="button">
          GitHub
        </a>
        <a href={project.liveDemo} className="button">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
