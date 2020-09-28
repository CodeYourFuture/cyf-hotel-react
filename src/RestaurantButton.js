import React from "react";

const RestaurantButton = ({ addPizza }) => {
  return (
    <button onClick={addPizza} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
