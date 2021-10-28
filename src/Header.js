import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <header className="App-header">CYF Hotel</header>
      <img
        src={require("./images/hotel-icon.png")}
        alt="logo"
        className="Header-logo"
      />
    </div>
  );
};

export default Header;
