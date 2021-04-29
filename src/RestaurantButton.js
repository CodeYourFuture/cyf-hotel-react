import React from "react";

const RestaurantButton = function(props) {
  return (
    <button className="btn btn-primary m-1" onClick={props.orderOne}>
      Add
    </button>
  );
};

export default RestaurantButton;
