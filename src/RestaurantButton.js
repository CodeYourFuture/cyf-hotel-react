import React from "react";
import "./App.css";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderOneFun}>
      Add
    </button>
  );
};
export default RestaurantButton;
