import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
          <a href="https://www.linkedin.com/in/yair-rosenschein-511a67225/" target="_blank">Linkedin profile{" "}
          <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
          <a href="https://github.com/yairros" target="_blank">Github account{" "}
          <i className="fa-brands fa-github"></i>{" "}
          </a>
      </ul>
    </nav>
  );
};

export default Navbar;
