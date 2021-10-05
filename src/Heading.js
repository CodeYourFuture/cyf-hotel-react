import React from "react";

const Heading = ({ title, imgSrc }) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
      <img src={imgSrc} alt="logo" />
    </header>
  );
};

Heading.defaultProps = {
  title: "CYF Hotel",
  imgSrc: "https://image.flaticon.com/icons/svg/139/139899.svg"
};

export default Heading;
