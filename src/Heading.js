import React from "react";
import { useState, useEffect } from "react";

const Header = () => {
  // const clicked = (color) => {
  //   setColor(color);
  //   };

  // useEffect(() => {
  //   document.body.style.backgroundColor = color;
  // }, [color]);

  return (
    <header className="App-header">
      <div className="logo-and-title">
        <img
          className="App-logo"
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/29/3f/16/lounge.jpg"
        />
        <h1>CYF Hotel</h1>
      </div>
      <div className="btn-mood">
        <button
          onClick={() => {
            clicked("white");
          }}
        >
          🌗
        </button>
      </div>
    </header>
  );
};

export default Header;
