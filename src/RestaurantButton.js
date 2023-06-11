import React from "react";

// I *think* the function got passed down as props from the parent "Restaurant.js"
// check with Douglas...!
function RestaurantButton({ OrderOne }) {
  return (
    <button onClick={OrderOne} className="btn btn-primary">
      Add
    </button>
  );
}

export default RestaurantButton;
