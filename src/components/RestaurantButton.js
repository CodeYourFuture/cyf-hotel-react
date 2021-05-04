import React from "react";
import "./RestaurantButton.css";

const RestaurantButton = ({ totalOrders }) => {
  return (
    <button onClick={totalOrders} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
