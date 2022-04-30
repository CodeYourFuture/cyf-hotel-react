import React from "react";

const RestaurantButton = ({ handleOrderONe }) => {
  return (
    <button
      onClick={handleOrderONe}
      className="btn btn-secondary ml-2 order-btn"
    >
      Add
    </button>
  );
};

export default RestaurantButton;
