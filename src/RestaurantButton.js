import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary m-2 px-4">
      Add
    </button>
  );
};

export default RestaurantButton;
