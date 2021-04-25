import React from "react";

const RestaurantButton = props => (
  <button className="btn btn-primary m-3" onClick={props.handleClick}>
    Add Pizza
  </button>
);

export default RestaurantButton;
