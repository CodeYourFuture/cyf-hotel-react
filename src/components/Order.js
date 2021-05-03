import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);
  //const pizzas = 0;

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      Pizzas: {orders} <RestaurantButton clickFunc={orderOne} />
    </li>
  );
}

export default Order;
