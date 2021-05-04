import React from "react";

function RestaurantButton({ pizza }) {
  return (
    <button onClick={pizza} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
