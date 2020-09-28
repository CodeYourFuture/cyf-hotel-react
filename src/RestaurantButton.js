import React from "react";

export default function RestaurantButton({ orderOne }) {
  return (
    <div>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </div>
  );
}
