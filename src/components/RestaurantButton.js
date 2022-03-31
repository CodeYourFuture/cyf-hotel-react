import React from "react";
const RestaurantButton = prop => {
  return (
    <button className="btn btn-primary" onClick={prop.prop}>
      Add
    </button>
  );
};
export default RestaurantButton;
