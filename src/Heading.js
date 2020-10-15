import React from "react";
import Logo from "./Logo";

function Heading() {
  return (
    <div className="top-container">
      <header className="App-header">CYF Hotel</header>
      <Logo />
    </div>
  );
}

// ReactDOM.render(<Heading/>,document.querySelector(".App"));

export default Heading;
