import { useState } from "react";
import React from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((orders) => orders + 1);
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton onClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
