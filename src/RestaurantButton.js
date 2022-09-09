import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.orderOne} className="btn food-btn">
      Order
    </button>
  );
}
export default RestaurantButton;
