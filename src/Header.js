import React from "react";
const Header = props => {
  return (
    <div className="nav-bar">
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="img"
        className="App-logo"
      />
      <header className="App-header">{props.name}</header>
    </div>
  );
};

export default Header;
