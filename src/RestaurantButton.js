import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-danger mx-2">
        Add
      </button>
      <button onClick={props.cancelOrder} className="btn btn-warning">
        cancel
      </button>
    </div>
  );
};

export default RestaurantButton;
