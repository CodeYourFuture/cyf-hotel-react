import React from "react";

const RestaurantButton = props => {
  return (
    <div className="btn-container">
      <button onClick={props.orderOne} className="btn btn-primary">
        Add Order
      </button>
      <button onClick={props.removeOrder} className="btn btn-primary">
        Remove Order
      </button>
    </div>
  );
};

export default RestaurantButton;
