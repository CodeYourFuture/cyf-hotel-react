import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";

const Order = props => {
  const [orders, setOrder] = useState(0);
  function orderOne() {
    setOrder(orders + 1);
  }
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};
export default Order;
