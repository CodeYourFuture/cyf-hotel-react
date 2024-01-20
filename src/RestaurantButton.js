import React from "react";

function RestaurantButton(props) {
  return (
    <div>
      <p>add order</p>
      <button onClick={props.addOrder}> click to add order </button>
    </div>
  );
}
export default RestaurantButton;
