import React from "react";

const RestaurantButton = props => {
  return (
    <button onClick={props.order} className="btn btn-primary rest-btn">
      Add
    </button>
  );
};

export default RestaurantButton;
