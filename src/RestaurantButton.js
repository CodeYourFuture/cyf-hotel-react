import React from "react";

const RestaurantButton = ({handleClick}) => {
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add
    </button>
  );
};

export default RestaurantButton;