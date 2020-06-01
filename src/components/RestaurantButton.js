import React from "react";
import Restaurant from "../Restaurant";

const RestaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.orderButton}>
      Add
    </button>
  );
};

export default RestaurantButton;
