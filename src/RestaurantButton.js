import React from "react";

const RestaurantButton = props => (
  <button onClick={props.handleClick} className="btn btn-primary">
    Add
  </button>
);
export default RestaurantButton;
