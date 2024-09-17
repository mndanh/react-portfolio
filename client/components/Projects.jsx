import React from 'react';
import '../App.css';
import { eastereggs, notetaker, metamart, weather, mixypixy, ecommerce, social } from '../src/assets/pictures';
import { github2Icon, liveIcon } from '../src/assets/icons';

const projects = [
  {
    image: metamart,
    title: "Meta Mart",
    description: "A full MERN stack of an online market where users can purchase items from other users, and sell their own.",
    languages: "MongoDB, Express, React, Node, Bootstrap, and more",
    liveLink: "https://group-project-3-vzjd.onrender.com/",
    github2Link: "https://github.com/aiden0921an/group-project-3"
  },
  {
    image: eastereggs,
    title: "Eastereggs",
    description: "A website to search your favorite movies and interact with other users about those movies.",
    languages: "JavaScript, Express, Node, Sequelize, Postgres, Bootstrap, and more",
    liveLink: "https://eastereggs.onrender.com/",
    github2Link: "https://github.com/lothylg/eastereggs"
  },
  {
    image: social,
    title: "Backend Social Network",
    description: "A backend database that mimics a social site where users can create a profile, post thoughts, share a reaction on another users posts, and request friends.",
    languages: "JavaScript, Express, Node, MongoDB, Postgres",
    liveLink: "https://drive.google.com/file/d/16N5DTv3wkqEb_MlwFrUK70yYxL0N6KE5/view",
    github2Link: "https://github.com/mndanh/social-network"
  },
  {
    image: weather,
    title: "Weather Dashboard",
    description: "A weather application where users can search cities around the world for forecast data and leverage recent searches for easier access.",
    languages: "JavaScript, HTML, CSS",
    liveLink: "https://mndanh.github.io/weather-dashboard/",
    github2Link: "https://github.com/mndanh/weather-dashboard"
  },
  {
    image: notetaker,
    title: "Note Taker",
    description: "An app that allows users to create task notes/reminders, save them to local storage, and delete them when they're finished.",
    languages: "JavaScript, Express, HTML, CSS",
    liveLink: "https://note-taker-1x83.onrender.com/",
    github2Link: "https://github.com/mndanh/note-taker"
  },
  {
    image: mixypixy,
    title: "Mixy Pixy",
    description: "A website where users can enter in a type of alcohol and various ingredients and get a list of custom cocktails to create from those ingredients.",
    languages: "JavaScript, HTML, CSS",
    liveLink: "https://lothylg.github.io/mixy-pixy/",
    github2Link: "https://github.com/lothylg/mixy-pixy"
  },
  {
    image: ecommerce,
    title: "eCommerce Backend App",
    description: "A backend database that leverages CRUD for an online retailer. Allowing them to track their products, create new ones, edit them, and delete them.",
    languages: "JavaScript, Node, Express, Sequelize, Postgres, and more",
    liveLink: "https://drive.google.com/file/d/1G04T668-vgT0QXxzLuvxR7lr-BzHG3jy/view",
    github2Link: "https://github.com/mndanh/ecommerce-backend"
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
            <p className="project-languages">
            <strong>Technologies Used:</strong> {project.languages}
            </p>
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