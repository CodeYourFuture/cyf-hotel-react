import React, { useState } from "react";
import Restaurant from "./Restaurant";

const RestaurantButton = props => {
  return (
    <button onClick={props.order} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
