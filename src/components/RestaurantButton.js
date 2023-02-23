import React from "react";

function RestaurantButton({ orderOne }) {
  return (
    <button className="restaurant-btn" onClick={orderOne}>
      Add
    </button>
  );
}

export default RestaurantButton;
