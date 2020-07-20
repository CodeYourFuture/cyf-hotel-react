import React from "react";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button onClick={orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
