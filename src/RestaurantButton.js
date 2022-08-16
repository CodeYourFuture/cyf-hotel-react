import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="restaurant-list-item-button">
      Add
    </button>
  );
};

export default RestaurantButton;
