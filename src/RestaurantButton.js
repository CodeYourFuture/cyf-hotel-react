import React from "react";

const RestaurantButton = props => {
  return (
    <button className="btn btn-light px-3 m-1" onClick={props.handleClick}>
      Add
    </button>
  );
};

export default RestaurantButton;
