import React from "react";
import "./heading.css";

const Heading = ({ text }) => {
  return (
    <header className="App-header">
      <div>
        {text}
        <img
          className="imgLogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/627/584/small/illust58-5849-01.jpg"
          alt="hotel-logo"
        />
      </div>
    </header>
  );
};

export default Heading;
