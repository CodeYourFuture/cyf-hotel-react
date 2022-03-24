import React from "react";
import Logo from "./logo.png";
export default function heading() {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        style={{ width: "150px", height: "150px", margin: "50px" }}
        src={Logo}
        alt="logo"
      />
    </div>
  );
}
