import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.handleClick} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
