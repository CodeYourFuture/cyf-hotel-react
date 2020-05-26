import React from "react";

const Heading = props => {
  return (
    <header className="App-header">
      <img
        className="img-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Hotel Logo"
      />
      {props.logoName}
    </header>
  );
};
export default Heading;
