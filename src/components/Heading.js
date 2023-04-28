import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Heading() {
  const [showNavBar, setShowNavBar] = useState(false);
  const handleHamBurger = () => {
    setShowNavBar(!showNavBar);
    let menu = document.querySelector(".menu-links");
    menu.style.visibility = "visible";
  };
  return (
    <div className="header">
      <nav className="main-nav">
        <div className="logo">
          <h1>
            <span className="span1">C</span>
            <span className="span2">Y</span>
            <span className="span3">F</span>
            <span className="span-4">Hotel</span>
          </h1>{" "}
        </div>
        <div className={showNavBar ? "menu-links" : "menu-links"}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/booking">Booking</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="ham-burger" onClick={handleHamBurger}>
        <a href="#">
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
}
export default Heading;
