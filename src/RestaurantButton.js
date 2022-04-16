import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.functionOnClick} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
