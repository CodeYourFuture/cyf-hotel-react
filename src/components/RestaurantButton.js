import React from "react";

const RestaurantButton = ({ handleClick }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
