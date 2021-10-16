import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(currentOrders => {
      return currentOrders + 1;
    });
  }
  return (
    <div>
      <li>
        {props.orderType} {orders} <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;
