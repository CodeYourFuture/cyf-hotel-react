import React from "react";

function RestaurantButton(props) {
  return (
    <button onClick={props.handleClick} className="btn btn-primary">
      <spam>&#10003;</spam>
    </button>
  );
}

export default RestaurantButton;
