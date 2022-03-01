import React from "react";

const RestaurantButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
