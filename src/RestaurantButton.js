import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-info px-3 m-1" onClick={props.handleClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
