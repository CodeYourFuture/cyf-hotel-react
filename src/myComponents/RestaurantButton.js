import React from "react";

export default function RestaurantButton({ orderOneProp }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => orderOneProp()}>
        Add
      </button>
    </div>
  );
}
