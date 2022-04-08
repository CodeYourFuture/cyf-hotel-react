import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.orderOne} className="btn btn-primary btn-order">
      Add
    </button>
  );
}

export default RestaurantButton;
