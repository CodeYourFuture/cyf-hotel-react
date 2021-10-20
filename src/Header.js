import React from "react";

const Header = () => {
  return (
    <header className="App-header">
      {/* <span>CYF Hotel</span> */}
      <div className="App-header-wrapper">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt="Logo"
        />
        <nav className="nav">
          <li>CYF Hotel</li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
