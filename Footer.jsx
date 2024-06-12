/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">SP</span>
        <div className="links">
        <a href="https://github.com/Sathiya187" target="_blank" rel="noopener noreferrer">
         <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/sathiya-priyan-9b398a283/" target="blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Sathiya Priyan
        </p>
      </div>
    </footer>
  );
}

export default Footer;