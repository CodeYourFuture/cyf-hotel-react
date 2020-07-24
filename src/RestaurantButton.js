import React from "react";

function RestaurantButton({ eventHandler }) {
  return (
    <button
      onClick={eventHandler}
      className="btn btn-primary restaurant-button"
    >
      Add
    </button>
  );
}

export default RestaurantButton;
