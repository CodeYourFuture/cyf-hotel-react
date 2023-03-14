import React from "react";

function RestaurantButton({ orderOne }) {
  return (
    <button className="btn btn-primary order" onClick={orderOne}>
      Add
    </button>
  );
}

export default RestaurantButton;
