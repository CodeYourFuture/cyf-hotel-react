import React from "react";
/* <header className="App-header">CYF Hotel</header> */

const Heading = props => {
  return (
    <header className={props.className}>
      CYF Hotel
      <img src="bed.png" />
    </header>
  );
};

export default Heading;
