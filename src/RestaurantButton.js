import React from "react";

function RestaurantButton({ orderOne, orders }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
