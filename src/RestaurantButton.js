import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.orderOne} className="btn btn-success mx-2">
        Add
      </button>
      <button onClick={props.cancelOrder} className="btn btn-warning">
        cancel
      </button>
      <button onClick={props.decreaseOrder} className="btn btn-danger mx-2">
        minus
      </button>
    </div>
  );
};

export default RestaurantButton;
