import React from "react";
import "./App.css";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add to Order
    </button>
  );
};

export default RestaurantButton;
