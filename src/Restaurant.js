import React from "react";
import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

const Restaurant = () => {
  // const pizzas = 0;

  const [orders, setOrders] = useState(0);
  function onAdd() {
    setOrders(orders + 1);
  }
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton onAdd={onAdd} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
