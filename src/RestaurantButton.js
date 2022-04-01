import React from "react";

const RestaurantButton = props => {
  return (
    <button
      className="order-btn btn btn-dark ml-4 col-2"
      onClick={props.handleClick}
    >
      Add
    </button>
  );
};

export default RestaurantButton;
