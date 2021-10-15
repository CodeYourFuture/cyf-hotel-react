import React from "react";
// import "./Heading.css";

const Heading = () => {
  return (
    <div className="app-header mb-4 d-flex justify-content-between align-items-center">
      <header className="app-header d-flex align-items-center">
        CYF Hotel
      </header>
      <img
        width="100"
        height="100"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="Hotel's logo"
      />
    </div>
  );
};

export default Heading;
