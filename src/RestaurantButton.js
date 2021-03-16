import React from "react";

const RestaurantButton = ({ action }) => {
  return (
    <button className="btn btn-primary" onClick={action}>
      Add
    </button>
  );
};
export default RestaurantButton;
