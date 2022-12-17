import React from "react";

export default function RestaurantButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add
    </button>
  );
}
