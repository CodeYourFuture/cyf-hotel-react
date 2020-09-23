import React from "react";

function Heading() {
  const imageAdd = "https://image.flaticon.com/icons/svg/139/139899.svg";

  return (
    <div>
      <header className="App-header">
        <img className="logoPic" src={imageAdd} alt="hotel logo" />CYF Hotel
      </header>
    </div>
  );
}

export default Heading;
