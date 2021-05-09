import React from "react";
function RestaurantButton(props) {
  return (
    <button onClick={props.resOrder} className="btn btn-primary">
      Add
    </button>
  );
}
export default RestaurantButton;
