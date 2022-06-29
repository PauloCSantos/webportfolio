import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/paulocsantos1995/"
        >
          <FaLinkedin color="#0A0F46" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/PauloCSantos"
        >
          <FaGithub color="#0A0F46" />
        </a>
      </div>
      <a href="#about" className="footer-name">PauloCSantos</a>
    </div>
  );
}

export default Footer;
