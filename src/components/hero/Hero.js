import React from "react";
import "./HeroStyles.css";
import { AiOutlineSearch } from "react-icons/ai";

import Video from "../../assets/maldivesVideo.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay" />
      <div className="content">
        <h1>Escape</h1>
        <h2>To a world of Endless Adventure</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;