import React from "react";

const RestaurantButton = ({ orderOne, removeOne }) => {
  return (
    <div>
      <button className="btn-primary" onClick={orderOne}>
        <i class="fas fa-plus" />
      </button>
      <button className="btn-primary" onClick={removeOne}>
        <i class="fas fa-minus" />
      </button>
    </div>
  );
};
export default RestaurantButton;
