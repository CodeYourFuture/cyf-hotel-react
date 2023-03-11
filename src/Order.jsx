import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  return (
    <li>
      {/* Check this: https://reactjs.org/docs/hooks-state.html */}
      {props.orderType}: {orders} <RestaurantButton action={orderOne} />
    </li>
  );

  function orderOne() {
    setOrders(orders + 1);
  }
};

export default Order;
