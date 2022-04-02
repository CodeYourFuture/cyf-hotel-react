import React from "react";

const RestaurantButton = ({ handleOrderONe }) => {
  return (
    <button onClick={handleOrderONe} className="btn btn-primary ml-2">
      Add
    </button>
  );
};

export default RestaurantButton;
