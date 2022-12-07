import React from "react";

function RestaurantButton({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      Add
    </button>
  );
}
export default RestaurantButton;
