import React, { useState } from "react";
import { RestaurantButton } from "./RestaurantButton";

let count = 0;
export const Order = () => {
  const [orders, setOrders] = useState(count);
  const orderOne = () => {
    setOrders(count++);
  };
  return (
    <div>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton button={orderOne} />
        </li>
      </ul>
    </div>
  );
};
