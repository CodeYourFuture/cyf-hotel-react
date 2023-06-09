import React from "react";
import "./App.css";
import "./Heading.css";
const HotelIcon = () => (
  <svg
    className="hotel-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <rect
      x="10"
      y="20"
      width="30"
      height="30"
      style={{ fill: "rgb(0,0,255)", strokeWidth: 1, stroke: "rgb(0,0,0)" }}
    />
    <rect
      x="15"
      y="25"
      width="10"
      height="10"
      style={{ fill: "rgb(255,255,255)", strokeWidth: 1, stroke: "rgb(0,0,0)" }}
    />
    <rect
      x="25"
      y="25"
      width="10"
      height="10"
      style={{ fill: "rgb(255,255,255)", strokeWidth: 1, stroke: "rgb(0,0,0)" }}
    />
    <rect
      x="20"
      y="40"
      width="10"
      height="10"
      style={{ fill: "rgb(255,255,255)", strokeWidth: 1, stroke: "rgb(0,0,0)" }}
    />
  </svg>
);

const Heading = () => {
  return (
    <header className="App-header">
      <span>CYF Hotel</span>
      <HotelIcon />
    </header>
  );
};

export default Heading;
