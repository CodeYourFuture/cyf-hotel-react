import React from "react";

function RestaurantButton(order) {
  let orderOne = order.order;
  return (
    <>
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </>
  );
}

export default RestaurantButton;
