import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Melanoma SKin Cancer Detection",
      img: "/Projects1.jpg",
      gLink: "https://github.com/Sathiya187/Melanoma-Skin-Cancer-Detection",
    
    },
    {
      title: "Portfolio",
      img: "/Projects2.jpg",
      gLink: "https://github.com/Sathiya187",
      
    },
    {
      title: "Weather website",
      img: "/Projects3.jpg", 
      gLink: "https://github.com/Sathiya187/Weather",
      
    },
    {
      title: "IMDB Data Analysis",
      img: "/Projects4.jpg",
      gLink: "https://github.com/Sathiya187/IMDB-Data-Analysis",
     
    },
    
    
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Sathiya187"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;