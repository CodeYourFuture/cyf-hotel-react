import React from "react";

const Heading = () => {
  return (
    <div className="Header">
      <div>
        <img
          className="imageLogo"
          src={
            "https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
          alt={"free hotel logo design"}
        />
      </div>
      <div>
        <h1> CYF Hotel</h1>
      </div>
    </div>
  );
};

export default Heading;
