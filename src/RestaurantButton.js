import React from "react";

const RestaurantButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
