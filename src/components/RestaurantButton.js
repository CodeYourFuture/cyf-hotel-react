import React from "react";

function RestaurantButton(props) {
  return (
    <button className="btn btn-primary" onClick={props.clickFunc}>
      +
    </button>
  );
}

export default RestaurantButton;
