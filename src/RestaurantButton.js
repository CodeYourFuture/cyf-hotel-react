import React from "react";

const RestaurantButton = ({ order }) => {
  return (
    <button className="btn btn-primary" onClick={order}>
      Add
    </button>
  );
};
export default RestaurantButton;
