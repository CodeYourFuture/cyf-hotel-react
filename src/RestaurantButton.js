import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-primary">
        Add
      </button>
      <button onClick={props.minusOne} className="btn btn-primary">
        Remove
      </button>
    </div>
  );
};

export default RestaurantButton;
