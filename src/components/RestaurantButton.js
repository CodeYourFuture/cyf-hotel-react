import React from "react";

function RestaurantButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.orderOne}>
      Add
    </button>
  );
}

export default RestaurantButton;
