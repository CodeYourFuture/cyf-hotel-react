import React from "react";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button className="btn-id btn btn-primary" onClick={orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
