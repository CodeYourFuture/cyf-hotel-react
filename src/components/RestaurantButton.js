import React from "react";

const RestaurantButton = props => {
  return (
    <button className="restaurant-btn" onClick={props.orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
