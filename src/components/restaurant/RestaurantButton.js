import React from "react";
import "./order.css";

const RestaurantButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
