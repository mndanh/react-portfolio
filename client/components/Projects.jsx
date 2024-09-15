import React from 'react';
import '../App.css';
import { eastereggs, notetaker } from '../src/assets/pictures';
import { github2Icon, liveIcon } from '../src/assets/icons';

const projects = [
  {
    image: eastereggs,
    title: "Eastereggs",
    description: "An application built with...",
    liveLink: "https://eastereggs.onrender.com/",
    github2Link: "https://github.com/lothylg/eastereggs"
  },
  {
    image: notetaker,
    title: "Note Taker",
    description: "An application that uses...",
    liveLink: "https://note-taker-1x83.onrender.com/",
    github2Link: "https://github.com/mndanh/note-taker"
  },
  // Add more projects here
];

const Projects = () => {
    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <img src={liveIcon} alt="Live App" className="project-icon" />
              </a>
              <a href={project.github2Link} target="_blank" rel="noopener noreferrer">
                <img src={github2Icon} alt="GitHub Repo" className="project-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;