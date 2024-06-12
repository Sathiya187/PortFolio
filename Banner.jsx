import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/Person.jpg" alt=""style={{ width: '200px', height: 'auto' ,marginLeft:'90px' }} />
          </div>
          <div className="banner-content">
            <h6 style={{ fontSize: '18px' }}>Hello,I'm Sathiya Priyan</h6>
            <h3 style={{ fontSize: '16px' }}>Front-end Developer</h3>
            <p style={{ fontSize: '14px' }}>
             Welcome to my Portfolio!  I am a Passionate and creative Front-end developer with
             a focus on building engaging user interfaces and interactive web applications using 
             React.js.I bring design concepts to life and create seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;