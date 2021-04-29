import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = function(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  //add bootstrap class to <li>
  return (
    <li>
      {props.orderType} {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
