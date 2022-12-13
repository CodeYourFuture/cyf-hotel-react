import React from "react";

export default function RestaurantButton({ orderOneProps }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={orderOneProps}>
        Add
      </button>
    </div>
  );
}
