import React from "react";

const RestaurantButton = ({ handleClick, text }) => {
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {text}
    </button>
  );
};
export default RestaurantButton;
