import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = () => {
  let [order, setOrders] = useState(0);
  function orderOne() {
    setOrders(order + 1);
  }

  //same as the line above
  // const state = useState(0)
  // const order = state[0];
  // const setOrder = state[1];

  const pizzas = 0;
  return (
    <li>
      Pizzas: {order}
      <RestaurantButton prop={orderOne} />
    </li>
  );
};

export default Order;
