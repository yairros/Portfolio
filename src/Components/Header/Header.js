import React from "react";
import Typical from "react-typical";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Yair Rosenschein</h1>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,

              "Frontend Developer ✅",
              1000,

              "Backend Developer 🏆",
              1000,

              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
        I'm an ITC graduate. You are welcome to look at the different projects I have done in the ITC course and on my own.
        </p>
        <br></br>
        <p>
          A few comments about the projects:
          <ul>
            <li>
            Currently, only the single player version is working in the dragon snake game.
            </li>
            <li>
            The fighter game is played with the arrows for the player on the right, while the down arrow is to attack, and W A D keys for the player on the left, while space is to attack. 
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Header;
