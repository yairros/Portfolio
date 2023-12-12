import React from "react";
import "./Works.css";
import snake from "../../assets/snake.jpg";
import winely from "../../assets/winely.jpg";
import stock from "../../assets/stock.jpeg";
import fighter from "../../assets/fighter.jpg";
import petlify from "../../assets/petlify.png";
import jobly from "../../assets/jobly.png";
const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <a href="https://dragonsnake-client.vercel.app/" target="_blank" >
            <img src={snake} alt="work1" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://thankful-wave-0b04eab03.2.azurestaticapps.net/" target="_blank" >
            <img src={winely} alt="winely" />
          </a>
        </div>
        <div className="works-item">
        <a href="https://stock-market-site.netlify.app/" target="_blank" >
          <img src={stock} alt="stock" />
        </a>
        </div>
        <div className="works-item">
         <a href="https://1on1-fighting-game.netlify.app/" target="_blank" >
          <img src={fighter} alt="fighter" />
         </a>
        </div>
        <div className="works-item">
          <a href="https://adoptify-server.onrender.com" target="_blank" >
          <img src={petlify} alt="petlify" />
         </a>
        </div>
        <div className="works-item">
          <a href="https://jobly-mu36.onrender.com" target="_blank" >
          <img src={jobly} alt="jobly" />
         </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
