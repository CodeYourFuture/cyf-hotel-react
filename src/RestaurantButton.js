import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.addOrder} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
