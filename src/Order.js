import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  //defining a state variables and assigning orders to 0
  const [orders, setOrders] = useState(0);
  //creating a function that increments orders by1
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <ul>
      <li>
        {props.orderType}: {orders}
        <RestaurantButton order={orderOne} />
      </li>
    </ul>
  );
};

export default Order;
