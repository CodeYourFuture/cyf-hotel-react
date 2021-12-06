import React from "react";

const RestaurantButton = ({ order }) => {
  return (
    <button className="order-button" onClick={order}>
      Add
    </button>
  );
};
export default RestaurantButton;
