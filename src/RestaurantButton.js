/* eslint-disable indent*/
import React from "react";
// import Restaurant from "./Restaurant";

function RestaurantButton(props) {
  return (
    <button
      className="add-btn"
      onClick={props.update}
      className="btn btn-primary"
    >
      Add
    </button>
  );
}

export default RestaurantButton;
