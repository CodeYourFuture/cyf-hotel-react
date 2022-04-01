import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.order} className="btn btn-warning btn-sm">
        Add
      </button>
    </div>
  );
};

export default RestaurantButton;
