import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(currentOrder => {
      return currentOrder + 1;
    });
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton onHandler={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
