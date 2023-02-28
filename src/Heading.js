import React from "react";
import ReactDOM from "react-dom";
// import search from "./magnifying-glass.png"; eg

export const Heading = () => {
  // let image = require("./magnifying-glass.png"); local image eg

  return (
    <div className="header-logo-name">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/187/187879.png"
        // src={image}
        // src={require("./magnifying-glass.png")} local image eg
        // src={search} Local image eg
      />

      <p className="hotel-name">CYF Hotel</p>
    </div>
  );
};

// export default Heading;
