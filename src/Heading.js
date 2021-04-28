import React from "react";
import "./Heading.css";

const Heading = () => {
  return (
    <div className=" app-header mb-4 d-flex justify-content-around align-items-center">
      <header>
        <h2>CYF HOTEL</h2>
      </header>
      <img
        src="https://pics.freeicons.io/uploads/icons/png/992585301578378318-512.png"
        alt="Hotels logo with a plate 5 gold star"
      />
    </div>
  );
};

export default Heading;
