import React from "react";
import Restaurant from "./Restaurant";
import "./App.css";

const RestaurantButton = props => {
  return (
    <button onClick={props.orderOne} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
