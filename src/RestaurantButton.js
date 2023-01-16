import React from "react";

const RestaurantButton = ({ clickFunction }) => {
  return (
    <button onClick={clickFunction} className="btn btn-primary ml-3 mb-1">
      Add
    </button>
  );
};

export default RestaurantButton;
