import React from "react";
const RestaurantButton = ({ orderOne }) => {
  return (
    <button onClick={orderOne} className="btn btn-add">
      Add
    </button>
  );
};
export default RestaurantButton;
