import React from "react";

function RestaurantButton({ handleClick }) {
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add
    </button>
  );
}
export default RestaurantButton;
