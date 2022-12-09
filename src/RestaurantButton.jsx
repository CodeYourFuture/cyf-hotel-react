import React from "react";

function RestaurantButton(prop) {
  return (
    <div>
      <button className="btn btn-primary" onClick={prop.order}>
        Add
      </button>
    </div>
  );
}

export default RestaurantButton;
