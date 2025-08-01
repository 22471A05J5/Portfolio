import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Bekery",
    description: "I am create my web page by using html and css .",
    image: "Screenshot 2025-08-01 215520.png",
    link: "https://github.com/22471A05J5/SCT_WD_TASK1",
  },
  {
    title: "Library Management",
    description: "I create my Library management by using sprongboot",
    image: "Screenshot 2025-08-01 232958.png",
    link: "https://github.com/22471A05J5/Library",
  },
  {
    title: "Restaurant",
    description: " I created webpage includes animations, responsive  by using reactjs ",
    image: "Screenshot 2025-08-01 220544.png",
    link: "https://github.com/22471A05J5/Restaurant",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
