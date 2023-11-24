import React from "react";
import "./Works.css";
import snake from "../../assets/snake.jpg";
import winely from "../../assets/winely.jpg";
import stock from "../../assets/stock.jpeg";
import fighter from "../../assets/fighter.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";
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
        {/* <div className="works-item">
          <img src={w5} alt="work5" />
        </div>
        <div className="works-item">
          <img src={w6} alt="work6" />
        </div> */}
      </div>
    </div>
  );
};

export default Works;
