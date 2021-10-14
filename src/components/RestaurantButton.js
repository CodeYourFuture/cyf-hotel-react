import React from "react";

const RestaurantButton = ({ orderOne, removeOne }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
      <button className="btn btn-primary" onClick={removeOne}>
        Remove
      </button>
    </div>
  );
};
export default RestaurantButton;
