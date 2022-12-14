import React from "react";

function RestaurantButton({ orderOneProps }) {
  return (
    <button onClick={orderOneProps} className="btn btn-primary">
      Add
    </button>
  );
}
export default RestaurantButton;
