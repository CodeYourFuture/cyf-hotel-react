import React from "react";

const RestaurantButton = prop => {
  return (
    <button onClick={prop.orders} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
