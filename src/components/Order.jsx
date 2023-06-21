import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  const [orders, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(orders + 1);
  };
  return (
    <li>
      Pizzas: {orders}
      <RestaurantButton add={orderOne} />
    </li>
  );
};

export default Order;

