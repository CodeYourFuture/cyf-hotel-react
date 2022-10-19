import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order() {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(() => orders + 1);
  }
  return (
    <div>
      <li>
        Pizzas: {orders} <RestaurantButton placeOrder={orderOne} />
      </li>
    </div>
  );
}

export default Order;
