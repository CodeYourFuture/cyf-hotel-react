import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary m-1" onClick={props.handleClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
