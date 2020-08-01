import React from "react";
import "./Heading.css";
function Header() {
  return (
    <div>
      <header className="App-header">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="hotel log"
          className="logo"
        />
        <h3 className="Title">CYF Hotel</h3>
      </header>
    </div>
  );
}

export default Header;
