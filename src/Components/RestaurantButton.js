import React from "react";

const RestaurantButton = ({ orderOne }) => {
  return (
    <button onClick={orderOne} className="btn btn-primary float-right">
      Add
    </button>
  );
};

export default RestaurantButton;
