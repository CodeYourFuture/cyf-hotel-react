import React from "react";

// Render add pizza button, called by `Restaurant.js`
const RestaurantButton = props => {
  return (
    <>
      <button onClick={props.click} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default RestaurantButton;
