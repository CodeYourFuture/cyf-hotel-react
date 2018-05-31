import React, { Component } from "react";

const Logo = (props) => {
  return (
    <header className="App-header">
      <img
        className="image"
        src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
        alt=""
      />
      {props.title}
    </header>
  );
};

export default Logo;
