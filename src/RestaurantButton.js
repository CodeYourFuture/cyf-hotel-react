import React from "react";

const RestaurantButton = ({ orderPizza }) => {
  return (
    <button className="btn btn-primary" onClick={orderPizza}>
      Add
    </button>
  );
};

export default RestaurantButton;
