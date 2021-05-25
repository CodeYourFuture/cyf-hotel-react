import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = function(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <li className="list-group-item order-item">
      {props.orderType} {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
