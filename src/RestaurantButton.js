import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.order} className="btn btn-primary m-2">
      Add
    </button>
  );
};

export default RestaurantButton;
