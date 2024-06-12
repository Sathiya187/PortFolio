import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "B.Tech Information Technology",
      desc: "SASTRA Deemed to be University(2020-2024)",
      active: true,
    },
    {
      icon: "fa-pen-to-square",
      title: "12th Standard",
      desc: "Kamala Subramaniam Matriculation Higher Secondary School(2020)",
      active: false,
    },
    {
      icon: "fa-ruler",
      title: "10th Standard",
      desc: "Kamala Subramaniam Matriculation Higher Secondary School(2018)",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>4th Year</h3>
            <p>Information Technology</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>CGPA</h4>
              <p>6.90</p>
            </div>
            <div className="portfolio">
              <h4>Interests</h4>
              <p>Front-end,Data analysis</p>
            </div>
            <div className="portfolio">
              <h4>4</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>Cricket</h4>
              <p>All-rounder,Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;