import React from "react";

const RestaurantButton = props => {
  return (
    <div className="order-buttons">
      <button onClick={props.addOrder} className="btn btn-primary">
        Add
      </button>
      <button onClick={props.removeOrder} className="btn btn-primary">
        Remove
      </button>
    </div>
  );
};

export default RestaurantButton;
