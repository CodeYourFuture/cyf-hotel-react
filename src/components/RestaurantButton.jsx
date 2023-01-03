import React from "react";

function RestaurantButton({ orderOne, orders }) {
  return (
    <div>
      <li>
        Pizzas: {orders}{" "}
        <button className="btn btn-primary" onClick={orderOne}>
          Add
        </button>
      </li>
    </div>
  );
}

export default RestaurantButton;
