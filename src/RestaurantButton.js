import React from "react";

function RestaurantButton({orderOne}) {
  return(
  <button className="btn btn-primary" onClick={orderOne}>
    Add
  </button>
  )
}

export default RestaurantButton;
