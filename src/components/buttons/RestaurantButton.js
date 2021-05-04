import React from "react";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button className="btn btn-primary restaurant-btn mx-3" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
