import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <h4>Restaurant Orders</h4>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;


