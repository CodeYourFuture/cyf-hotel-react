import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => setOrders(preOrder => preOrder + 1);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton clickEvent={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
