import React from "react";

const RestaurantButton = props => {
  return (
    <button
      onClick={props.eventHandler}
      className="btn btn-primary ButtonRestaurant"
    >
      Add
    </button>
  );
};

export default RestaurantButton;
