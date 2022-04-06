import React from "react";

const RestaurantButton = (props) => {
  return (
    <button
      className="btn btn-info btn-outline-light"
      onClick={props.handleClick}
    >
      Add
    </button>
  );
};

export default RestaurantButton;
