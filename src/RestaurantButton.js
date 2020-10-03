import React from "react";
import Restaurant from "./Restaurant";

function RestaurantButton(props) {
  return (
    <button onClick={props.name} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
