import React from "react";

const RestaurantButton = ({ onclick }) => {
  return (
    <button className="btn btn-primary" onClick={onclick}>
      Add
    </button>
  );
};
export default RestaurantButton;
