import React from "react";
import Clock from "./Clock";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img
          className="App-logo-image"
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt=""
        />
        <span> CYF Hotel</span>
        <Clock />
      </header>
    );
  }
}
export default Header;
