import React from "react";

function RestaurantButton({ placeOrder }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={placeOrder}>
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
