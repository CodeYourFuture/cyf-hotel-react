import React from "react";

const RestaurantButton = props => {
  return (
    <button
      onClick={props.orderOne}
      className="restaurantButton btn btn-primary"
    >
      Add
    </button>
  );
};

export default RestaurantButton;
