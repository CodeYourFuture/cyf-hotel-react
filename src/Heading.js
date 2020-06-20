import React from "react";

function Heading() {
  return (
    <header className="App-header">
      {" "}
      CYF Hotel <Logo />
    </header>
  );
}

function Logo() {
  return (
    <img
      className="image-header"
      alt=""
      src="https://image.flaticon.com/icons/svg/139/139899.svg"
    />
  );
}

export default Heading;
