import React from "react";

const RestaurantButton = props => (
  <button className="btn btn-primary m-3" onClick={props.handleClick}>
    Add {props.orderType}
  </button>
);

export default RestaurantButton;
