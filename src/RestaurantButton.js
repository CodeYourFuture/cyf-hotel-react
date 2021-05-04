import React from "react";

const RestaurantButton = props => {
  return (
    <button
      onClick={props.orderOne}
      className="btn btn-outline-info btn-sm mg-5"
    >
      Add
    </button>
  );
};

export default RestaurantButton;
