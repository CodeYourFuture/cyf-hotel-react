import React from "react";
import "./App.css";

const RestaurantButton = props => {
  return (
    <button
      className="btn btn-primary col-7 lg-col-5"
      onClick={props.orderOneFun}
    >
      Add
    </button>
  );
};
export default RestaurantButton;
