import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.handlerClick} className="btn btn-info">
      Add
    </button>
  );
}

export default RestaurantButton;
