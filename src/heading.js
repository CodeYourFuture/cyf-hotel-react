import React from "react";
import Logo from "./logo.png";
export default function heading() {
  return (
    <div className="heading">
      <img src={Logo} alt="logo" />
      <header className="app-header">CYF Hotel</header>
    </div>
  );
}
