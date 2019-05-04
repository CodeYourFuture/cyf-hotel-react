import React from "react";
import Clock from "./Clock";
const Heading = () => {
  return (
    <div>
      <header className="App-header">
        CYF Hotel
        <img
          className="App-logo"
          src="https://images-na.ssl-images-amazon.com/images/I/41tzAiG8jOL.jpg"
        />
      </header>
      <Clock />
    </div>
  );
};
export default Heading;
