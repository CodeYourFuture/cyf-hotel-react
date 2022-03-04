import React from "react";

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary"
      onClick={props.addFood}
      value={props.value}
    >
      {props.name}
    </button>
  );
};

export default RestaurantButton;
