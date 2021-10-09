import React from "react";

export default function RestaurantButton({ handleClick }) {
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add
    </button>
  );
}
