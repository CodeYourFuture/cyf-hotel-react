import React from "react";
import Restaurant from "./Restaurant";

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
