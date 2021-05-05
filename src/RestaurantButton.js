import React from "react";
// +1 pizza to order when button is clicked
const RestaurantButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
