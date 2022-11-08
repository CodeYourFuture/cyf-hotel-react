import React from "react";

const Heading = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <a className="navbar-brand App-brand" href="#">
        <img
          src="https://img.icons8.com/office/344/4-star-hotel.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="hotel"
        />
        CYF Hotel
      </a>
    </nav>
  );
};

export default Heading;
