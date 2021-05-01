import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  let [orders, setOrders] = useState(0);
  let orderOne = () => {
    setOrders((orders += 1));
  };
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders}
          <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
