import React from "react";

const RestaurantButton = ({ totalOrders }) => {
  return (
    <button onClick={totalOrders} className="btn btn-primary">
      Add
    </button>
  );
};
export default RestaurantButton;
